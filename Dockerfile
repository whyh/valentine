FROM nginx:latest

RUN apt-get update && apt-get install -y inotify-tools

COPY src/ /usr/share/nginx/html/

EXPOSE 80