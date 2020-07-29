# rr-api

> rose rocket API server

## Issues I would have liked to have solved

- find a way to create more (if not exact) symmetry with the requirements to the React Calendar API
- Handle dates as a Date type that is sent to the front end
- Do better verification checks / return the error messages to the front end for better UI

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

### Ensure Mongodb is running
sudo service mongod start
sudo service mongod status


### Home Route is 
http://localhost:3030/rr-api


### JSON to the front end should look like

createdAt: "2020-07-29T02:24:48.174Z"
date: "28-07-2020"
driverName: {first: "Example", last: "Lastname"}
location: "123 Hogtown Toronto On"
startTime: "19:20"
stopTime: "23:50"
taskId: 1234
taskType: "Other (Lunch)"
updatedAt: "2020-07-29T02:34:34.782Z"
__v: 0
_id: "5f20ddf06cbe4e1c039f646f"



## Getting Started

Getting up and running in 4(ish) easy steps

1. make sure you have mongodb installed - link here

1. a) Ensure Mongodb is running
     $ sudo service mongod start
     $ sudo service mongod status

2. Make sure you have [NodeJS](https://nodejs.org/) and [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) installed.


3. Install your dependencies

    ```
    cd path/to/rr-api
    npm install
    ```

4. Start your app

    ```
    yarn start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
