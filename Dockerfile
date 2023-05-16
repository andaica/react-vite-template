# build environment
FROM node:18.16.0-alpine as build
WORKDIR /app 
COPY package.json .
RUN yarn install
COPY . . 
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]