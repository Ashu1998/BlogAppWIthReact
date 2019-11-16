var ToDo = require(__dirname + '/../models/todo'); // award model import

 
exports.create = async (req, res) => {

    let result = await ToDo.create(req.query);

    res.send(result);

};


exports.update = async (req, res) => {

    let result = await ToDo.update(req.query);

    res.send(result);

};


  
exports.tasks = async (req, res) => {

    let result = await ToDo.tasks(req.query);

    res.send(result);

};

 
exports.delete = async (req, res) => {

    let result = await ToDo.delete(req.query);

    res.send(result);
    
};
