FROM node:16
COPY package.json /src/
COPY yarn.lock /src/
WORKDIR /src
RUN yarn install
COPY ./ /src
RUN yarn build
CMD [ "yarn","nuxt", "start" ]