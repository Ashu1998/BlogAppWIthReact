const mysql = require('mysql');

const config = require(__dirname+'/../configs/environment.js');

exports.connection = async() =>{
    
    let connection = mysql.createConnection({
        host     :  config.mysql.host,
        user     :  config.mysql.user,
        password :  config.mysql.password,
        database :  config.mysql.database
    })

    return connection
}

exports.execquery = async(query,params=[],single=false)=>{

    return new Promise(async (resolve, reject) => {
        let response = {}
        let connection = await this.connection()
        connection.connect()
        connection.query(query,params, function (error, result, fields) {
            if (error){
                response.success = 0
                response.status = 500
                response.message = "database exception"
                console.log(error)
            }else{
                response.success = 1
                response.status = 200
                response.data = (single)?result[0]:result
            }

            resolve(response)
        })
        connection.end()
    })
}