# jwtCreateValidate

Sample creation of a jwt and validation of same using RS256. 

JWTs can be signed using a common secret which is the HMAC signature. The same is used for verification. 
In case the secret cannot be protected then an asymmetric key can be used. Private key to sign and Public to validate. 

To use this example. 
Generate a key pair using openssl or this url 
https://cryptotools.net/rsagen 
A sample public and private key is present in the solution. 
The token generate by this example can be validated using jwt.io. It can be validated as well if the public certificate is pasted in jwt.io. 
