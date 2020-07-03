FROM node:alpine

WORKDIR /src

RUN apk --update add bash bc sed git openssh maven python make g++ curl rsync

COPY package.json /src/package.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
