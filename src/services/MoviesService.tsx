import api from "../api";


export async function getPopularMovies() {
    const response = await api.get(`/movie/popular?`, {
        params: {
            page: 1,
            region: '55'
        },
    })

    return response;
}

export async function filterMovies(listMovie: string = 'upcoming') {
    const response = await api.get(`/movie/${listMovie}`)
    console.log(response);
    
    return response;
}

export async function searchMovies(movie: string) {
    const response = await api.get(`/search/movie`,
        {
            params: {
                query: movie,
                page: 1,
                region: '55',
                language: 'pt-BR',
                include_adult: false,
            },
        })
    return response.data.results;
}

export async function getMovieDetail(movieId: number) {
    const response = await api.get(`/movie/${movieId}`,
        {
            params: {
                language: 'pt-BR',
            }
        })

    return response;
}