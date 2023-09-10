FROM node

WORKDIR /app


COPY package.json /app
COPY . .

RUN npm install
RUN npm run build

ENV PORT 5500

EXPOSE ${PORT}

CMD [ "node", "./server/index.js" ]

