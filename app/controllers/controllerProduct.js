const crud = require('../helpers/crudMongoDB');

exports.getAllProducts = async (req, res, next) => {
    let llistat = await crud.getAll("products");
    res.json(llistat);
}

exports.getProduct = async (req, res, next) => {
    let index = req.params.id;
    res.json(await crud.getOne("products", index));
}

exports.newProduct = async (req,res, next) =>{
    res.json(await crud.createOne('products', req.body))
}

exports.updateProduct = async (req,res, next) =>{
    res.json(await crud.updateOne('products', req.body.id, req.body))
}

exports.deleteProduct = async (req,res, next) =>{ 
    res.json(await crud.deleteOne('products', req.params.id))
}
