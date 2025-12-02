const dogs = [
  { id: 1, name: "Buddy", breed: "Golden Retriever", age: 3 },
  { id: 2, name: "Max", breed: "Bulldog", age: 5 },
  { id: 3, name: "Bella", breed: "Poodle", age: 2 },
];

// Get all dogs
exports.getDogs = (req, res) => {
  res.json({
    count: dogs.length,
    dogs: dogs,
  });
};

// Add a new dog
exports.addDog = (req, res) => {
  const { name, age } = req.body;
  const newDog = { id: dogs.length + 1, name, age };
  dogs.push(newDog);
  res.status(201).json(newDog);
};

// Delete a dog
exports.deleteDog = (req, res) => {
  const { id } = req.params;
  const index = dogs.findIndex((dog) => dog.id === parseInt(id));
  if (index !== -1) {
    const deletedDog = dogs.splice(index, 1);
    res.json(deletedDog);
  } else {
    res.status(404).json({ message: "Dog not found" });
  }
};

// Update a dog
exports.updateDog = (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const dog = dogs.find((dog) => dog.id === parseInt(id));
  if (dog) {
    dog.name = name || dog.name;
    dog.age = age || dog.age;
    res.json(dog);
  } else {
    res.status(404).json({ message: "Dog not found" });
  }
};
