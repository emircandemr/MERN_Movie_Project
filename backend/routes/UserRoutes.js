const { addtoLikedMovies, getLikedMovies, removeFromLikedMovies } = require('../controllers/UserControl');

const router = require('express').Router();


router.get('/liked/:email',getLikedMovies)
router.post('/add',addtoLikedMovies)
router.put('/remove',removeFromLikedMovies)

module.exports = router;

