require('dotenv').config();
const connection = require('./connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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

async function findByCredential(email, password){
    const connectiondb = await connection.getConnection();
    const user = await connectiondb
                            .db('sample_tp2')
                            .collection('users')
                            .findOne({email: email});
    
    if(!user){
        throw new Error('Credenciales no validas');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        throw new Error('Credenciales no validas');
    }
    
    return user;
}

function generatedToken(user){
    
    const token = jwt.sign({_id: user._id, email: user.email}, process.env.CLAVESECRETA, {expiresIn: "2h"});
    return token;
}

module.exports = {getAllUsers, addUser, findByCredential, generatedToken} ;