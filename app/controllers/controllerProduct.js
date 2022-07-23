const crud = require('../helpers/crudMongoDB');

exports.getAllProducts = async (req, res, next) => {
    try {
        let llistat = await crud.getAllItems("products");
        res.json(llistat);
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}

exports.getProduct = async (req, res, next) => {
    try {
        let index = req.params.id;
        let result = await crud.getItem("products", index);
        if(result !=null){
            res.json(result);
        } else {
            res.status(404);
            res.json({ error: 'Product not found' });
        }
    } catch (err) {
        res.status(500);
        res.json(err)
    }
}

exports.newProduct = async (req, res, next) => {
    try {
        res.status(201);
        res.json(await crud.createItem('products', req.body))
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
    let result = await crud.getItem("products", req.body.id);
    if(result !=null){
        let result2 = await crud.updateItem('products', req.body.id, req.body)
        if(result2.modifiedCount ==0){
            res.status(400);
            res.json({message:"Key is not correct, for product 'name' is required"});
        } else {
            let result3 = await crud.getItem("products", req.body.id);
            res.status(201);
            res.json(result3);
        }
        } else {
            res.status(404);
            res.json({ error: 'Product not found' });
        }
       
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        let result = await crud.deleteItem('products', req.params.id);
        if(result.deletedCount == 1){
            res.json("Product deleted");
        } else {
            res.status(404);
            res.json({ error: 'Product not found' });
        }
    } catch (err) {
        res.status(400);
        res.json(err)
    }
}
