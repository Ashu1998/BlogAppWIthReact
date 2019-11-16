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

const DB = require(__dirname + '/../helper/mysql-helper.js')

module.exports.create = async (data) => {

    let query = "INSERT INTO data (title, data, date_created) VALUES (?,?,?);";
    
    let params = [data.title, data.data,  new Date()];

    let vari = await DB.execquery(query, params);
    console.log(vari);

    return { success:1, status:200, data: "Data has been inserted"  }
}

module.exports.update = async (data) => {

    let query = "UPDATE data (title, data) VALUES (?,?);"	

    let params = [data.title, data.data];

    let vari = await DB.execquery(query, params);

    return { success:1, status:200, data: "Data has been updated"  }
}

module.exports.delete = async (data) => {

    let query = "DELETE from data where title = ?"

    let params = [data.title];

    let vari = await DB.execquery(query, params);

    return { success:1, status:200, data: "Data has been DELETED"  }
}

module.exports.tasks = async (data) => {

    let query = "select * from data"

    let vari = await DB.execquery(query);

    return { success:1, status:200, data: vari.data  }
}
