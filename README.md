# rr-api

> Rose Rocket Challenge API Server  

## Things I am proud of

- First time ever using MongoDB with Feathers. Getting the db to work with the front was an accomplishment!
- Being able to send data back and forth to the front end.
- Gettin data to persist
- the structure of the data base meets the needs of the information that I needed to work with
- sending errors from the backend on the front for display

## Issues I would have liked to have solved

- Find a way to create even more (if not exact) symmetry with the requirements to the React Calendar API
- Handle dates as a Date type that is sent to the front end
- Do better verification checks / return the more detailed error messages to the front end for better UI
- In general, I would have like to do the data manipulation and  handling on the back end and send the 
  properly formatted and processed data back to the front end for display / retrivial / sending to the db

## About

This project uses [Mongodb](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials) and [Feathers](http://feathersjs.com).


### Home Route is

http://localhost:3030/rr-api

### JSON Response to the front end should look like

```json
[
  {
    "createdAt": "2020-07-29T02:24:48.174Z",
    "date": "28-07-2020",
    "driverFirstName": "Example1",
    "driverLastName": "Lastname1",
    "location": "123 Anywhere Ave. Toronto, On",
    "startTime": "19:20",
    "stopTime": "23:50",
    "taskId": 4321,
    "taskType": "Other (Lunch)",
    "updatedAt": "2020-07-29T02:34:34.782Z",
    "__v": 0,
    "_id": "5f20ddf06cbe4e1c039f646f"
  },

  {
    "createdAt": "2020-07-29T02:25:48.174Z",
    "date": "28-07-2020",
    "driverFirstName": "Example1",
    "driverLastName": "Lastname2",
    "location": "123 Anystreet St. Toronto, On",
    "startTime": "12:20",
    "stopTime": "14:35",
    "taskId": 1234,
    "taskType": "Drop Off",
    "updatedAt": "2020-07-29T02:34:35.782Z",
    "__v": 0,
    "_id": "5f20ddf06cbe4e1c039f646h"
  }
]
```

## Getting Started

Getting up and running in 5 easy steps

1. Make sure you have [Mongodb](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials) installed 

2. Ensure Mongodb is running

   ```
   sudo service mongod start
   sudo service mongod status
   ```

3. Make sure you have [NodeJS](https://nodejs.org/) and [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) installed.

4. Install your dependencies

   ```
   cd path/to/rr-api
   npm install
   ```

5. Start your app

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
