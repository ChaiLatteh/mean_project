var controller = require('../controllers/controller');
var items = require('../controllers/items')

module.exports = app => {
  app.post('/api/register', controller.register);
  app.post('/api/login', controller.login);
  app.get('/api/current', controller.getCurrentUser);
  app.get('/api/current/update', controller.updateCurrentUser);
  app.post('/api/button_clicked', controller.buttonClicked);
// STORE ROUTES
  app.get('/api/increaseclick', items.increaseClick);
  app.get('/api/getcost', items.getCost)
}
