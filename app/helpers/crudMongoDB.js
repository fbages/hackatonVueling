const db = require("../config/config")

module.exports = {

    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne

}

async function getAll(collection) {
    let llistat = await db[collection].find({});
    return llistat;
}

async function getOne(collection, index) {
    let item = await db[collection].findOne({ id: index });
    return item;
}

async function createOne(collection, objectItem) {
    let lastItem = await db[collection].find({}).limit(1).sort({ id: -1 });
    let index = (lastItem.length != 0) ? lastItem[0].id : 0;
    objectItem.id = index + 1;
    let newItem = await db[collection].create(objectItem)
    return newItem;
}

async function updateOne(collection, index, objectItem) {
    let item = await db[collection].findOne({ id: index });
    if (item != null) {
        Object.assign(item, objectItem);
        item.save();
    }
    return item;
}

async function deleteOne(collection, index) {
    let item = await db[collection].deleteOne({ id: index });
    return "Eliminat"
}