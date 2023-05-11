FROM node:18-alpine3.16

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8081

CMD ["npm", "run", "dev"]

