const db = require('./db-config.js');

db.select('*').from('users')

//shortcut for the above
//  db('users');   <--- selects all from the users table
//resolves to an array of users

//get where id is 3
db('users').where({id: 3});

//post new user
db('users').insert({name: 'amanda', age:76 });

//update user with id of 5 with the new name "john"
db('users').where({id: 5}).update({name:"john"});

//delete the user with id of 3
db('users').where({id:3}).del();

