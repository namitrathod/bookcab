const driverModel = require('../models/driver.model');


module.exports.createDriver = async ({firstname,lastname, email, password, color, plate, type, capacity}) => { 
    if (!firstname || !lastname || !email || !password || !color || !plate || !type || !capacity) {
        throw new Error('All fields are required');
    }
    const driver = driverModel.create({
        fullname:{firstname,lastname},
         email,
        password,
        vehicle:{color, plate, type, capacity}})
    return driver;
    }