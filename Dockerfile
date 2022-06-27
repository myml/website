FROM node:16 as builder
COPY package.json /src/
COPY yarn.lock /src/
WORKDIR /src
RUN yarn install
COPY ./ /src
RUN yarn build

FROM node:16
RUN mkdir /website
WORKDIR /website
COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/static ./static
COPY --from=builder /src/config ./config
COPY --from=builder /src/nuxt.config.js ./
COPY --from=builder /src/package.json ./
COPY --from=builder /src/.nuxt ./.nuxt

ENV HOST=0.0.0.0
CMD [ "yarn", "nuxt", "start" ]