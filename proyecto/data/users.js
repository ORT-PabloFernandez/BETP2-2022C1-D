const connection = require('./connection');
const bcrypt = require('bcrypt');

async function getAllUsers(){
    const connectiondb = await connection.getConnection();

    const users = await connectiondb
                            .db('sample_tp2')
                            .collection('users')
                            .find()
                            .toArray();
    return users;
}

async function addUser(user){
    const connectiondb = await connection.getConnection();
    user.password = await bcrypt.hash(user.password, 8);
    
    const users = await connectiondb
                            .db('sample_tp2')
                            .collection('users')
                            .insertOne(user);
    return user;
}

module.exports = {getAllUsers, addUser} ;