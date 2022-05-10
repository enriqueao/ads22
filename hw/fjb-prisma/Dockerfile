FROM node:14-alpine

WORKDIR /app/src

COPY package*.json ./

COPY . .

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["node","./src/index.js"]

