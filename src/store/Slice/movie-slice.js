import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {baseHTTP} from '../../services/baseHTTP'
 
export const getGenres = createAsyncThunk('movie/getGenres', async() => {
    const response = await baseHTTP.get('genre/movie/list');
    return response.data.genres;

})

const createArrayFromRawData = async (rawData,moviesArray,genres) => {
    rawData.map((movie) => {
        const genre = genres.find((genre) => genre.id === movie.genre_ids[0]);
        if(movie.backdrop_path){
            moviesArray.push({
                ...movie,
                id : movie.id,
                name : movie?.original_name ? movie.original_name : movie.original_title,
                image: movie.backdrop_path,
                genre : genre?.name,
            })
        }
    })
    return moviesArray;
}


export const getRawData = async (API,genres,paging) => {
    const moviesArray = [];
    for( let i = 1; moviesArray.length < 60 && i <= 10; i++){
        const response = await baseHTTP.get(API, {params : {page : i}})
        console.log(response.data.results)
        const result = response.data.results
        createArrayFromRawData(result,moviesArray,genres);
    }
    return moviesArray;
}

export const fetchMovies = createAsyncThunk('movie/trending',async ({type},thunkAPI) => {
    const {genres} = thunkAPI.getState().movie;

    const moviesArray = [];
    for( let i = 1; moviesArray.length < 60 &&  i <= 10; i++){
        const response = await baseHTTP.get(`trending/${type}/week`, {params : {page : i}})
        const result = response.data.results
        createArrayFromRawData(result,moviesArray,genres);
    }
    console.log(moviesArray)
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
        })
    }
})
    

export default movieSlice.reducer;