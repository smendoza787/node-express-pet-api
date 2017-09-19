var mongoose = require('mongoose'),
    Pet = mongoose.model('Pet');

exports.list_all_pets = function(req, res) {
  Pet.find({}, function(err, pet) {
    if (err) {
      res.send(err);
    }
    res.json(pet);
  });
};

exports.create_a_pet = function(req, res) {
  var new_pet = new Pet(req.body);
  new_pet.save(function(err, pet) {
    if (err) {
      res.send(err);
    }
    res.json(pet);
  });
};

exports.read_a_pet = function(req, res) {
  Pet.findById(req.params.petId, function(err, pet) {
    if (err) {
      res.send(err);
    }
    res.json(pet);
  });
};

exports.update_a_pet = function(req, res) {
  Pet.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, pet) {
    if (err) {
      res.send(err);
    }
    res.json(pet);
  });
};

exports.delete_a_pet = function(req, res) {
  Task.remove({
    _id: req.params.petId
  }, function(err, pet) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Pet successfully deleted' });
  });
};
