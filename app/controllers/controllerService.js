const crud = require('../helpers/crudMongoDB');

exports.getAllServices = async (req, res, next) => {
    let llistat = await crud.getAll("services");
    res.json(llistat);
}

exports.getService = async (req, res, next) => {
    let index = req.params.id;
    res.json(await crud.getOne("services", index));
}

exports.newService = async (req,res, next) =>{
    res.json(await crud.createOne('services', req.body))
}

exports.updateService = async (req,res, next) =>{
    res.json(await crud.updateOne('services', req.body.id, req.body))
}

exports.deleteService = async (req,res, next) =>{ 
    res.json(await crud.deleteOne('services', req.params.id))
}
