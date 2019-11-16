"use strict"
var env = 'localhost';
module.exports = function(){
     return {
        environment : env,
        mysql: { 
            "host": "127.0.0.1", 
            "user": "newuser", 
            "password": "password", 
            "database" : "mysql_db" 
        }, 
        port:3001
     }
}();
