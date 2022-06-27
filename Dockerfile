FROM node:16
COPY package.json /src/
COPY yarn.lock /src/
WORKDIR /src
RUN yarn install
COPY ./ /src
RUN yarn build
ENV HOST=0.0.0.0
CMD [ "yarn", "nuxt", "start" ]