FROM node:16-alpine

RUN npm install -g nodemon

WORKDIR /myapi 

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]