FROM node:20.0.0-slim

WORKDIR /usr/src/app

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for && \
    npm install express --save && \
    npm install mysql2 --save

COPY index.js .

EXPOSE 3000