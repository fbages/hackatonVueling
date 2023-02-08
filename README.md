
# Hackaton Vueling - IT Academy

Node js - Online Travel Agency Mission

## Import project

Follow the steps below:

* Notes and prerequisites  
Project uses MongoDB database, install it before use this project 

* Clone the project from the Github Platform. Execute:
  ```
  git clone https://github.com/fbages/hackatonVueling
  ```
* Open the project downloaded and install dependecies:
  ```
  npm i
  ```  
* Run the project:
   ```
  cd src
  node app.js 
  ```

## Endpoints

POSTMAN collection contains sample requests for this API
https://github.com/fbages/hackatonprevi  

It contains following requests:

- GET Retrieve all products -> localhost:3000/products
- GET Retrieve one product -> localhost:3000/product/:productId
- POST New product -> localhost:3000/product/:productId
- PUT Update product -> localhost:3000/product/:productId
- DEL Delete product -> localhost:3000/product/:productId

- GET Retrieve all users -> localhost:3000/users
- GET Retrieve one user -> localhost:3000/user/:productId
- POST New user -> localhost:3000/user/:productId
- PUT Update user -> localhost:3000/user/:productId
- DEL Delete user -> localhost:3000/user/:productId
- GET 404 - Not found
