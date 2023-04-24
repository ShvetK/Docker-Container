FROM node:19-alpine3.16

WORKDIR /home/app2

COPY ./index.js ./package.json /

RUN npm install

EXPOSE 8001

CMD ["npm", "start"]