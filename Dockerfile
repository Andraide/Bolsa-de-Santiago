
FROM node:16 AS ui-build
WORKDIR /usr/src/app
COPY my-app/ ./my-app/
RUN cd my-app && npm install @angular/cli && npm install && npm run build

FROM node:16 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/my-app/dist ./my-app/dist
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3080

CMD ["npm", "start"]