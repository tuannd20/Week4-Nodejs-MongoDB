const faker = require("faker");
const fs = require("fs");
// Set locale to use vietnamese
faker.locale = "vi";

// Random data
// console.log(faker.name.title());
// console.log(faker.address.city());
// console.log(faker.date.future());
// console.log(faker.datatype.number());
// console.log(faker.image.imageUrl());

const randomTourList = (n) => {
  // If value n <= 0 return empty array
  if (n <= 0) return [];

  const tourList = [];

  // loop and push the tour
  Array.from(new Array(n)).forEach(() => {
    const tour = {
      id: faker.random.uuid(),
      title: faker.name.title(),
      price: faker.datatype.number(),
      image: faker.image.imageUrl(),
      location: faker.address.city(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    tourList.push(tour);
  });

  return tourList;
};

// IFFE
(() => {
  // Random data
  const tourList = randomTourList(22);

  // Prepare db object
  const db = {
    tours: tourList,
  };

  // Write data into db.json file
  fs.writeFile("./database/json/db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully");
  });
})();
