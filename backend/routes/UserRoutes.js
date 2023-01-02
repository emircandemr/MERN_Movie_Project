const { addtoLikedMovies, getLikedMovies } = require('../controllers/UserControl');

const router = require('express').Router();


router.get('/liked/:email',getLikedMovies)
router.post('/add',addtoLikedMovies)

module.exports = router;

