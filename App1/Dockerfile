FROM node:19-alpine3.16

WORKDIR /home/app1

COPY ./index.js ./package.json /

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]