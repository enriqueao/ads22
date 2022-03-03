FROM node:14-alpine

RUN mkdir /app
RUN mkdir /app/node
WORKDIR /app/node

COPY package*.json ./

RUN npm install

COPY . /app/node

EXPOSE 3001

CMD ["node", "app.js"]
