FROM nginx:1.17.10-alpine
RUN apk add nano && apk add curl
COPY ./dist/bolsa-santiago /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 3000