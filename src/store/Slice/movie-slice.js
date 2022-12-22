import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {baseHTTP} from '../../services/baseHTTP'
 
export const getGenres = createAsyncThunk('movie/getGenres', async() => {
    const response = await baseHTTP.get('genre/movie/list');
    return response.data.genres;

})

const createArrayFromRawData = async (rawData,moviesArray,genres) => {
    rawData.map((movie) => {
        const movieGenres = movie.genre_ids.map((id) => genres.find((genre) => genre.id === id));
        if(movie.backdrop_path){
            moviesArray.push({
                ...movie,
                id : movie.id,
                name : movie?.original_name ? movie.original_name : movie.original_title,
                image: movie.backdrop_path,
                genres : movieGenres.map((genre) => genre?.name)
            })
        }
    })
    return moviesArray;
}

// export const getMoviesTrailers = createAsyncThunk('movie/getTrailers', async (movieId) => {
//     const response = await baseHTTP.get(`movie/${movieId}/videos`);
//     const result = response.data.results.filter((video) => video.type === 'Trailer');
//     console.log(result)
//     return result
// })


export const fetchMovies = createAsyncThunk('movie/trending',async ({type},thunkAPI) => {
    const {genres} = thunkAPI.getState().movie;

    const moviesArray = [];
    for( let i = 1; moviesArray.length < 60 &&  i <= 10; i++){
        const response = await baseHTTP.get(`trending/${type}/week`, {params : {page : i}})
        const result = response.data.results
        createArrayFromRawData(result,moviesArray,genres);
    }
    return moviesArray;
})


export const movieSlice = createSlice({
    name: 'movie',
    initialState : {
        movies : [],
        genres : [],
        genresLoaded : false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled,(state, action) => {
            state.genres = action.payload;
            state.genresLoaded = true;
        }),
        builder.addCase(fetchMovies.fulfilled,(state, action) => {
            state.movies = action.payload;
        })
        // builder.addCase(getMoviesTrailers.fulfilled,(state, action) => {
        //     state.trailers = action.payload;
        // })
    }
})
    

export default movieSlice.reducer;