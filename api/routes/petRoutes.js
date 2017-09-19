module.exports = function(app) {
  var pets = require('../controllers/petController');

  // pet Routes
  app.route('/pets')
    .get(pets.list_all_pets)
    .post(pets.create_a_pet);


  app.route('/pets/:petId')
    .get(pets.read_a_pet)
    .put(pets.update_a_pet)
    .delete(pets.delete_a_pet);
}
