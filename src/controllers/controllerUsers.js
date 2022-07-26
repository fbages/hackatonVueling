const crud = require('../services/crudMongoDB');

exports.getAllServices = async (req, res, next) => {
    try {
        let llistat = await crud.getAllItems("users");
        res.json(llistat);
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}

exports.getService = async (req, res, next) => {
    try {
        let index = req.params.productId;
        let result = await crud.getItem("users", index);
        if(result !=null){
            res.json(result);
        } else {
            res.status(404);
            res.json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500);
        res.json(err)
    }
}

exports.newService = async (req,res, next) =>{
    try {
        res.status(201);
        res.json(await crud.createItem('users', req.body))
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}

exports.updateService = async (req,res, next) =>{
    try {
        let result = await crud.getItem("users", req.body.productId);
        if(result !=null){
            let result2 = await crud.updateItem('users', req.body.productId, req.body)
            if(result2.modifiedCount ==0){
                res.status(400);
                res.json({message:"Keys are not correct, for service 'name' and 'priority' are required"});
            } else {
                let result3 = await crud.getItem("users", req.body.productId);
                res.status(201);
                res.json(result3);
            }
        } else {
            res.status(404);
            res.json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}

exports.deleteService = async (req,res, next) =>{ 
    try {
        let result = await crud.deleteItem('users', req.params.productId);
        if(result.deletedCount == 1){
            res.json("User deleted");
        } else {
            res.status(404);
            res.json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}
