# CLEblockchain
![image](https://user-images.githubusercontent.com/25730453/39607960-153273aa-4f0c-11e8-8ff3-8fed4ba7e8dd.png)

### 5/3/2018
This is a basic block. You can see it has been tested in the terminal used "dev-test": "nodemon dev-test". In the package.json 

### genesis block created succesfully tested 
![image](https://user-images.githubusercontent.com/25730453/39732434-4ebad306-523b-11e8-9de3-aa6dd299c132.png)

### first generation tested
![image](https://user-images.githubusercontent.com/25730453/39791389-6fb05af8-5309-11e8-9ba5-4f228ea4463e.png)


##5/10/18

### algorithm  SHA-256  secure S, hash H,  algorithm  A,  256 bits for the hash  or 32 bytes or characters generated to represent the hash 

    makes a unique has value (32-byte for each block )
    Its a one way hash from the direction of the data to the hash makes it easy to check blocks see if data has been tampered with 

 ### installed dependencies interminal 
         npm i crypto-js  --save

         check to make sure installed  cat package.json 

         const SHA256 = require ('crypto-js/sha256');     is a function that generates a unique hash based of data 

![image](https://user-images.githubusercontent.com/25730453/39901948-5105cb24-5499-11e8-98d1-eb70bfcb6c34.png)

    #### note     const hash = 'todo-hash';
    #### changed to  const hash = Block.hash(timestamp, lastHash, data);
    





