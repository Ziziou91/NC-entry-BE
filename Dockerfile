#Download base image node
FROM node:7.7.2-alpine

#Set work directory to /usr/app
WORKDIR /usr/app

#Copy the package.json file to /usr/app
COPY package.json .

# Install Node manager so that we can have multiple versions of node
RUN npm install --quiet

#Copy all the files form the project's root to /usr/app
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

#Test code to ensure the build is working
RUN node index.js 
