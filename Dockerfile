FROM node:16-alpine
RUN mkdir /app
COPY . /app/
WORKDIR /app
RUN yarn install
EXPOSE 3003
CMD ["/usr/local/bin/yarn", "start"]