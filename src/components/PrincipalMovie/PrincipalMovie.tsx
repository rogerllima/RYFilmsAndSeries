import { ListMoviesType } from '../../types/ListMovies.ts';
import * as S from './styles.js';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

interface PrincipalMovieProps {
    movies: ListMoviesType[] |  (() => ListMoviesType[]);
}

const PricipalMovie: React.FC<PrincipalMovieProps> = ({ movies }) => {
    const [internalMovies, setInternalMovies] = useState<ListMoviesType[]>(movies);

    useEffect(() => {
        setInternalMovies(movies)
    }, [movies])

    return (
        <S.BannerContainer>
            <Swiper
                slidesPerView={1}
                autoplay
                >
                {internalMovies?.map((val, key) => {
                    return <SwiperSlide className='slide-movie' key={key}>
                        <S.SlideItem to={'/movie-detail/' + val.id}>
                            <S.Img src={'https://image.tmdb.org/t/p/w500' + val.backdrop_path}></S.Img>
                            <S.NameAndOverviewDiv>
                            <S.NameMovie>{val.title.toUpperCase()}</S.NameMovie>
                            <S.OverviewMovie>{val.overview}</S.OverviewMovie>
                            </S.NameAndOverviewDiv>
                        </S.SlideItem>
                    </SwiperSlide>
                })}
            </Swiper>
        </S.BannerContainer >
    );
}

export default PricipalMovie;
