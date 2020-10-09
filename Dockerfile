FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /usr/src/app/client

RUN npm install

RUN npm run build

WORKDIR /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]
