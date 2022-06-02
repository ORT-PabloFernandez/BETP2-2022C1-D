require('dotenv').config();
const jwt = require('jsonwebtoken');


function auth(req, res, next){
    // TODO considerar Bearer
    const token = req.header('Authorization').replace('Bearer ','');
    console.log(token);
    try {
        const user = jwt.verify(token, process.env.CLAVESECRETA);
        console.log(user);
        next();        
    } catch (error) {
        res.status(401).send({err: error.message});
    }
}

module.exports = auth;