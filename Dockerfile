FROM node:11-alpine

WORKDIR /app

ADD . .
RUN yarn install
RUN yarn prestart:prod

EXPOSE 3000

ENV NODE_ENV production

CMD ["yarn", "start:prod"]