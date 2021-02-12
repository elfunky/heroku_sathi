// const app = require('../app');


module.exports = (app)=>{

    app.use('/', require('./index'));
    app.use('/auth', require('./auth'));
    app.use('/products', require('./product'));
};