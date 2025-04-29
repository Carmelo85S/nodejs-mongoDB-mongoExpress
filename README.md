Step-by-Step Instructions 

1. Set up a new MongoDB database: 
   - Choose a name for your database (e.g., `mynewdatabase`). 
   - Decide on the type of data you want to store in your table (collection). 
     Example: A collection for users with fields like `first_name`, `last_name`, and `email`. 

2. Connect your database to a Node.js application: 
   - Use the Mongoose library to connect to MongoDB. 
   - Test the connection to ensure everything is working. 

3. Define a Schema and Model: 
   - Create a Mongoose schema for your data. 
     Example: If you are storing users, your schema could have fields like `first_name`, `last_name`, and `email`. 

4. Write CRUD Routes: 
   - Create routes in your Node.js application for each CRUD operation: 
     - `GET` to read all users from the database. 
     - `POST` to add a new user to the database. 
     - `PUT` to update an existing user by its ID. 
     - `DELETE` to remove a user by its ID. 

5. Test your routes: 
   - Use Insomnia, Postman, or a similar tool to test your CRUD routes. 
   - Make sure each route works correctly and returns the expected data. 

What to Submit 

1. A link to your GitHub repository containing the Node.js project. 
2. A short description of your database and the data it stores. 
3. Screenshots or a video showing: 
   - Your database setup in MongoDB. 
   - Your CRUD routes being tested in Insomnia or Postman. 
