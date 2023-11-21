import { ListMoviesType } from '../../types/ListMovies.ts';
import * as S from './styles.js';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

interface ListMoviesProps {
    movies: ListMoviesType[] | (() => ListMoviesType[]);
};

const ListMovies: React.FC<ListMoviesProps> = ({ movies }) => {
    const [internalMovies, setInternalMovies] = useState<ListMoviesType[]>(movies);
    const sidleViewLength = movies.length > 4 ? 4 : movies.length;

    useEffect(() => {
        setInternalMovies(movies)
    }, [movies])

    return (
        <S.div>
            <Swiper
                slidesPerView={sidleViewLength}
                navigation
                style={{ minWidth: '170px', maxWidth: '70%' }}
            >
                {internalMovies?.map((val, key) => {
                    return <SwiperSlide style={{ minWidth: '170px', maxWidth: '100%' }}
                        className='slide-card' key={key}>
                        <S.slideItem to={'/movie-detail/' + val.id}>
                            <S.img src={'https://image.tmdb.org/t/p/w500' + val.poster_path}></S.img>
                            <S.title>{val.title.toUpperCase()}</S.title>
                        </S.slideItem>
                    </SwiperSlide>
                })}
            </Swiper>

        </S.div >
    );
}

export default ListMovies;
