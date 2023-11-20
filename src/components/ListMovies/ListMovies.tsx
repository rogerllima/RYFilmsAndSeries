import { ListMoviesType } from '../../types/ListMovies.ts';
import * as S from './styles.js';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

interface ListMoviesProps {
    movies: ListMoviesType[] | (() => ListMoviesType[]);
 };

const ListMovies: React.FC<ListMoviesProps> = ({ movies}) => {
    const [internalMovies, setInternalMovies] = useState<ListMoviesType[]>(movies);

    useEffect(() => {
        setInternalMovies(movies)
    }, [movies])

    return (
        <S.div>
            <Swiper
                slidesPerView={4}
                navigation
                >
                {internalMovies?.map((val, key) => {
                    return <SwiperSlide className='slide-card' key={key}>
                        <S.slideItem to={'/movie-detail/' + val.id}>
                            <S.img src={'https://image.tmdb.org/t/p/w500' + val.poster_path}></S.img>
                            <S.title>{val.title}</S.title>
                        </S.slideItem>
                    </SwiperSlide>
                })}
            </Swiper>

        </S.div >
    );
}

export default ListMovies;
