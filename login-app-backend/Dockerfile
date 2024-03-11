#layer 1 base image
FROM node:18.17.1-alpine

#layer định nghĩa directory mà mình làm việc
WORKDIR /app

#layer 2 copy source code vào trong docker  
COPY . .

EXPOSE 3000

#layer 3 cài đặt các dependencies
RUN npm install

#layer 4 run command  thời điểm runtime của container
CMD ["npm", "run", "dev"]


