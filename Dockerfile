FROM node:8

WORKDIR /dashboard

EXPOSE 8080

COPY package.json .
RUN npm install

ENTRYPOINT ["npm", "start"]
