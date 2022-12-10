# Messages API

## Overview

This project is a simple implementation on an API using Express.js. Database used to store messages is sqlite3. 

## Routes

GET /messages
- lists all messages in the database

GET /messages/{id}
- lists message with id if available

POST /messages
- Posts body to be added to messages database
- format: {"message": ""}

PUT /messages/{id}
- Updates given id message with body 
- body format: {"message": ""}

DELETE /messages/{id}
- deletes entry with supplied id

## Running the project locally

npm install
npm start