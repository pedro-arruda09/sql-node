const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/contatos', UserController.index);
routes.post('/contatos', UserController.store);

routes.get('/contatos/:user_id/addresses', AddressController.index);
routes.post('/contatos/:user_id/addresses', AddressController.store);

routes.get('/contatos/:user_id/techs', TechController.index);  
routes.post('/contatos/:user_id/techs', TechController.store);
routes.delete('/contatos/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show)

module.exports = routes;