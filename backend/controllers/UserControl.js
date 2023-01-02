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
    }else{
        await User.create({email, likedMovies: [movie]});
    }
    return res.json({message: 'Movie added to liked movies'})
    }catch(err){
        console.log(err.message);
        return res.json({message: 'Something went wrong'})
    }
}

module.exports.getLikedMovies = async (req,res) => {
    try{
        const {email} = req.body;
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