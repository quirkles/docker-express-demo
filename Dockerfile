FROM node:alpine as base

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./
COPY src ./src/

RUN npm install
RUN npm run clean
RUN npm run build
RUN rm -rf src

COPY . .

CMD ["npm", "start"]
