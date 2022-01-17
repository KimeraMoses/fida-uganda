FROM node:14.17.0-alpine as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html