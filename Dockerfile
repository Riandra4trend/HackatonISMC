FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g prisma

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

ENTRYPOINT ["npm", "run", "dev"]
