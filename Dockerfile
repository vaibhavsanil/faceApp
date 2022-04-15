#FROM alpine:3.15
FROM node:12-alpine 

WORKDIR /usr/src/smart-brain-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]