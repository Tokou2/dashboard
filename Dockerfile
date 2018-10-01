FROM node:8

WORKDIR /code

EXPOSE 8080

RUN npm install

ENTRYPOINT ["npm", "start"]
