#Download base image node
FROM node:7.7.2-alpine

#Set work directory to /usr/app
WORKDIR /usr/app

#Copy the package.json file to /usr/app
COPY package.json 

# Install Node manager so that we can have multiple versions of node
RUN npm -g install n
RUN n 0.10.33
RUN n 8.3.0

#Copy all the files form the project's root to /usr/app
COPY . .

