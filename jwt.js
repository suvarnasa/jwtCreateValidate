const jwt = require('jsonwebtoken')
const fs = require('fs')
const priv_key = fs.readFileSync('./priv.key', 'utf8') // will come from db
const payload = {
    username: 'sas',
    userid: 12345,
    role: 'Admin',
    //nonce : 'aaa' // that which is received from client only in implicit flow. Not required in auth flow.
}

const signOptions = {
    issuer: 'login.ooo.com', //matches the identity of IDP 
    subject: 'test token', //optional
    audience: 'clinet_id', // clienid of the incoming request. ie brand
    algorithm: 'RS256', // algorithm
    expiresIn: '24h' // time to live 
   
}
const tok = jwt.sign(payload, priv_key, signOptions);

console.log(tok);
