# jwtCreateValidate

Sample creation of a jwt and validation of same using RS256. 

JWTs can be signed and verified using the same common secret too.This will be the HMAC algorithm. 
In case the secret cannot be protected then an asymmetric key can be used. Private key to sign and Public to validate. This would be the RSA algorithm. ( this example) 

To use this example. 
Generate a key pair using openssl or this url or the "crypto" repo
https://cryptotools.net/rsagen 
A sample public and private key is present in the folder (priv.key and public.key) . 
The token generate by this example can be viewed using using jwt.io. It can be validated as well if the public certificate is pasted in jwt.io. 
