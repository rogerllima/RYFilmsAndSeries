import { ListMoviesType } from "../types/ListMovies";

export function sortMoviesByName(movies: ListMoviesType[], order: string) {
    return movies.slice().sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (order === 'asc') {
            return titleA.localeCompare(titleB);
        } else if (order === 'desc') {
            return titleB.localeCompare(titleA);
        } else {
            throw new Error('Invalid order direction. Use "asc" or "desc".');
        }
    });
}

export function filterByMostRecentDate(movies: ListMoviesType[], moviesDate: { id: string; saveDate: string }[]) {
    const sortedMoviesAndDates = moviesDate.slice().sort((a, b) => {
        const dateA = new Date(a.saveDate);
        const dateB = new Date(b.saveDate);
        return dateB.getTime() - dateA.getTime();
    });

    const orderedMovies = sortedMoviesAndDates
        .map(({ id }) => movies.find(movie => movie.id === Number(id)))
        .filter(movie => movie !== undefined) as ListMoviesType[];

    return orderedMovies;
}
