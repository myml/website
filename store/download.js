const LATEST_VERSION = "22.04";
const LTS_VERSION = "22.04";

const NVIDIA_KEYWORDS = ["nvidia", "rtx", "geforce"];

async function fetchRelease(version, channel) {
  const res = await fetch(
    `https://api.pop-os.org/builds/${version}/${channel}?arch=${
      channel === "raspi" ? "arm64" : "amd64"
    }`
  );
  const body = await res.json();
  if (body.errors != null) {
    throw new Error(body.errors[0].title);
  } else {
    return body;
  }
}

export const state = () => ({
  // true if we are showing the download overlay
  showing: false,
  // 'latest' or 'lts' depending what the user selects
  release: LATEST_VERSION != null ? "latest" : "lts",
  // null, 'intel' or 'nvidia' based on what the user's gpu
  channel: null,

  data: {
    latest: {
      intel: null,
      nvidia: null,
      rpi: null,
    },
    lts: {
      intel: null,
      nvidia: null,
      rpi: null,
    },
  },
});

export const getters = {
  showing(state) {
    return state.showing;
  },

  loaded(state) {
    const { intel, nvidia, raspi } = state.data[state.release];
    return intel != null && nvidia != null && raspi != null;
  },

  canSwitchRelease() {
    return LATEST_VERSION != null;
  },

  release(state) {
    return state.release;
  },

  isLts(state, getters) {
    return getters.release === "lts";
  },

  version(state) {
    if (state.release === "latest") {
      return LATEST_VERSION;
    } else {
      return LTS_VERSION;
    }
  },

  ltsVersion() {
    return LTS_VERSION;
  },

  latestVersion() {
    return LATEST_VERSION;
  },

  alternativeVersion(state) {
    if (state.release === "latest") {
      return LTS_VERSION;
    } else {
      return LATEST_VERSION;
    }
  },

  channel(state) {
    return state.channel;
  },

  intelSha(state, getters) {
    if (getters.loaded) {
      return state.data[state.release].intel.sha;
    }
  },

  nvidiaSha(state, getters) {
    if (getters.loaded) {
      return state.data[state.release].nvidia.sha;
    }
  },

  rpiSha(state, getters) {
    if (getters.loaded) {
      return state.data[state.release].raspi.sha;
    }
  },

  intelSize(state, getters) {
    if (getters.loaded) {
      const raw = state.data[state.release].intel.size;
      return (parseInt(raw, 10) / 1073741823).toFixed(2);
    }
  },

  nvidiaSize(state, getters) {
    if (getters.loaded) {
      const raw = state.data[state.release].nvidia.size;
      return (parseInt(raw, 10) / 1073741823).toFixed(2);
    }
  },

  rpiSize(state, getters) {
    if (getters.loaded) {
      const raw = state.data[state.release].raspi.size;
      return (parseInt(raw, 10) / 1073741823).toFixed(2);
    }
  },

  intelUrl(state, getters) {
    if (getters.loaded) {
      return state.data[state.release].intel.url;
    }
  },

  nvidiaUrl(state, getters) {
    if (getters.loaded) {
      return state.data[state.release].nvidia.url;
    }
  },

  rpiUrl(state, getters) {
    if (getters.loaded) {
      return state.data[state.release].raspi.url;
    }
  },

  hasPreference(state) {
    return state.channel != null;
  },

  preferIntel(state) {
    return state.channel == null || state.channel === "intel";
  },

  preferNvidia(state) {
    return state.channel == null || state.channel === "nvidia";
  },

  preferRpi(state) {
    return state.channel == null || state.channel === "raspi";
  },

  showFullModal(state) {
    return state.channel !== "raspi";
  },
};

export const mutations = {
  toggleShowing(state, value) {
    if (value != null) {
      state.showing = value;
    } else {
      state.showing = !state.showing;
    }
  },

  switchRelease(state, value) {
    if (value === "lts" && LATEST_VERSION != null) {
      state.release = "latest";
    } else if (value === "latest" && LTS_VERSION != null) {
      state.release = "lts";
    }
  },

  preferChannel(state, value) {
    state.channel = value;
  },

  // eslint-disable-next-line camelcase
  setData(state, { channel, release, version, url, size, sha_sum }) {
    state.data[release][channel] = { url, size, sha: sha_sum };
  },
};

export const actions = {
  detectChannel({ commit, getters }) {
    if (!getters.haspreference) {
      try {
        const el = document.createElement("canvas");
        const gl =
          el.getContext("webgl") || el.getContext("experimental-webgl");

        if (gl != null) {
          const info = gl.getExtension("WEBGL_debug_renderer_info");

          if (info != null) {
            const renderer = gl.getParameter(info.UNMASKED_RENDERER_WEBGL);

            if (renderer != null) {
              const gpuString = renderer.toLowerCase();
              const match = NVIDIA_KEYWORDS.some(
                (k) => gpuString.indexOf(k) !== -1
              );

              if (match) {
                commit("preferChannel", "nvidia");
              } else {
                commit("preferChannel", "intel");
              }
            }
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
  },

  setPiMode({ commit }) {
    commit("preferChannel", "raspi");
  },

  async fetch({ commit }, release) {
    const version = release === "latest" ? LATEST_VERSION : LTS_VERSION;

    const [intel, nvidia, raspi] = await Promise.all([
      fetchRelease(version, "intel"),
      fetchRelease(version, "nvidia"),
      fetchRelease("21.10", "raspi"), // only
    ]);

    commit("setData", { ...intel, release });
    commit("setData", { ...nvidia, release });
    commit("setData", { ...raspi, release });
  },
};
