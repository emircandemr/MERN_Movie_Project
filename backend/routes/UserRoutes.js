const { addtoLikedMovies, getLikedMovies } = require('../controllers/UserControl');

const router = require('express').Router();


router.post('/add',addtoLikedMovies)
router.get('/liked/:email',getLikedMovies)

module.exports = router;

