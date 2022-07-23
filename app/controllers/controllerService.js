const crud = require('../helpers/crudMongoDB');

exports.getAllServices = async (req, res, next) => {
    try {
        let llistat = await crud.getAllItems("services");
        res.json(llistat);
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}

exports.getService = async (req, res, next) => {
    try {
        let index = req.params.id;
        let result = await crud.getItem("services", index);
        if(result !=null){
            res.json(result);
        } else {
            res.status(404);
            res.json({ error: 'Service not found' });
        }
    } catch (err) {
        res.status(500);
        res.json(err)
    }
}

exports.newService = async (req,res, next) =>{
    try {
        res.status(201);
        res.json(await crud.createItem('services', req.body))
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}

exports.updateService = async (req,res, next) =>{
    try {
        let result = await crud.getItem("services", req.body.id);
        if(result !=null){
            let result2 = await crud.updateItem('services', req.body.id, req.body)
            if(result2.modifiedCount ==0){
                res.status(400);
                res.json({message:"Keys are not correct, for service 'name' and 'priority' are required"});
            } else {
                let result3 = await crud.getItem("services", req.body.id);
                res.status(201);
                res.json(result3);
            }
        } else {
            res.status(404);
            res.json({ error: 'Service not found' });
        }
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}

exports.deleteService = async (req,res, next) =>{ 
    try {
        let result = await crud.deleteItem('services', req.params.id);
        if(result.deletedCount == 1){
            res.json("Service deleted");
        } else {
            res.status(404);
            res.json({ error: 'Service not found' });
        }
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}
