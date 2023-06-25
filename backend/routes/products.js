var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/', function(req, res, next) {
  res.send('Products index route');
});

router.get('/get-all-products', (req, res, next) => {
  res.send(
    [
        {
            id: uuidv4(),
            title: "Hogwart's Legacy",
            publisher: "Warner Bros.",
            genre: "Adventure",
            price: 59.99,
          },
          {
            id: uuidv4(),
            title: "Destiny 2",
            publisher: "Bungie",
            genre: "FPS",
            price: 29.99
          },
          {
            id: uuidv4(),
            title: "The Last of Us",
            publisher: "Sony",
            genre: "Adventure",
            price: 69.99
          },
          {
            id: uuidv4(),
            title: "Total War: Warhammer III",
            publisher: "Sega",
            genre: "Strategy",
            price: 49.99
          },
          {
            id: uuidv4(),
            title: "Everything, Everywhere, All at Once",
            publisher: "A24",
            genre: "Action/Adventure",
            price: 29.99
          },
          {
            id: uuidv4(),
            title: "Dune",
            publisher: "Penguin Classics",
            genre: "Action/Adventure",
            price: 19.99
          }
    ]
   );
})
  
module.exports = router;
