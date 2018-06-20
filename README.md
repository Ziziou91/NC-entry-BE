# NC-entry-BE

Node API instance for testing code from Northcoders Entry Challenge. All code runs in docker container.

## Running the app

To run the docker container install and start docker, then run the following terminal command:

`docker run -p 49160:8080 -d zizou91/test;`

Where the app is mapping your machine’s port 49160 to the container’s published port 8080 using `-p`

## Using the app

we can send questions to be tested against the apps suite using the following route:

`localhost:49160/api/question/:question_id`

The application should recieve a JSON file with the function stored in the following format:

`{"function":{"arguments":"argument","body":"code here;"}}`

### Current Tests

The current test suites and the routes to access them are:

1: Square a number.
-> Write a function which takes a number as an argument and returns the number multiplied by itself.

-> Route
`localhost:49160/api/question/1`


2: Sum of odd numbers.
-> Complete the function `sumOfOdds` which takes a number `n` and adds up all the od numbers up to an including `n`.

-> Route
`localhost:49160/api/question/2`


## Making changes to the app

To add changes made to the app we need to create a new docker container. Ensure you are in the dircectory containing the DockerFile, and using the following terminal command:

`docker build -t UserName/ContainerName`

