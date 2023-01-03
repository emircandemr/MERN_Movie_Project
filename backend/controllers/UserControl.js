const User = require('../models/UserModel');

module.exports.addtoLikedMovies = async (req, res) => {

    try{
        const {email, movie} = req.body;
        const user = await User.findOne({email});
        if(user){
            const likedMovies = user.likedMovies;
            const movieExists = likedMovies.find((m) => m.id === movie.id);
            if(movieExists){
               return res.json({message: 'Movie already liked'})
            }else{
                await User.findByIdAndUpdate(user._id, {
                    likedMovies: [...user.likedMovies, movie]
                }, {new: true});
        }
    }
    else{
        const newUser = new User({
            email,
            likedMovies: [movie]
        })
        newUser.save()
            .then((user) => {
                res.json({msg : 'success', user})
            })
            .catch((err) => {
                res.json({msg : 'error', err})
            })

        // await User.create({email, likedMovies: [movie]});
    }
    return res.json({message: 'Movie added to liked movies', movie })
    }
    catch(err){
        console.log(err.message);
        return res.json({message: 'Something went wrong'})
    }
}

module.exports.getLikedMovies = async (req,res) => {
    try{
        const {email} = req.params;
        const user = await User.findOne({email})
        if(user){
            res.json({msg : 'success', movies : user.likedMovies})
        }else{
            return res.json({message: 'User not found'})
        }

    }
    catch(err){
        return res.json({message: 'Something went wrong'})
    }
}

module.exports.removeFromLikedMovies = async (req,res) => {
    try{
        const {email, movie} = req.body;
        const user = await User.findOne({email});
        if(user){
            const {likedMovies} = user;
            const movieIndex = likedMovies.findIndex((m) => m.id === movie.id);
            if(movieIndex === -1){
                return res.json({message: 'Movie not found'})
            }
            const updatedLikedMovies = likedMovies.splice(movieIndex, 1)
            await User.findByIdAndUpdate(user._id, {
                likedMovies: updatedLikedMovies
                }, {new: true});
            return res.json({message: 'Movie removed from liked movies', movie })
        }else{
            return res.json({message: 'User not found'})
        }
    }
    catch(err){
        return res.json({message: 'Something went wrong'})
    }
}
