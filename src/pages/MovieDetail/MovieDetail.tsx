import { useEffect, useState } from 'react';
import * as S from './styles';
import SideBar from '../../components/NavBar/SideBar';
import { getMovieDetail } from '../../services/MoviesService';
import { useParams } from 'react-router-dom';
import { MovieDetailType } from '../../types/MovieDetail';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StarRateIcon from '@mui/icons-material/StarRate';

import dayjs from 'dayjs';

const MoveDetail = () => {
    const [movieDetail, setMovieDetail] = useState<MovieDetailType>();
    const [isAddedToList, setIsAddedToList] = useState(false);

    const params = useParams();
    const moviesIdSaved: string[] = JSON.parse(localStorage.getItem('movieIds') || '[]');
    const moviesIdAndDateSaved: { id: string; saveDate: string }[] = JSON.parse(localStorage.getItem('movieIdsAndDate') || '[]');
    const date = dayjs().format('DD/MM/YYYY');
    const yearMovie = dayjs().format('YYYY');



    useEffect(() => {
        getMovieDetail(Number(params.id))
            .then((response) => {
                setMovieDetail({ ...response.data });
            });

        if (params.id && moviesIdSaved.includes(params.id)) {
            setIsAddedToList(true);
        }
    }, []);

    const handleClickMyList = () => {
        if (params.id) {
            if (!isAddedToList) {
                moviesIdSaved.push(params.id);
                moviesIdAndDateSaved.push({ id: params.id, saveDate: date });
                localStorage.setItem('movieIds', JSON.stringify(moviesIdSaved));
                localStorage.setItem('movieIdsAndDate', JSON.stringify(moviesIdAndDateSaved));
                setIsAddedToList(true);
            } else {
                const updatedMoviesIdSaved = moviesIdSaved.filter((id) => id !== params.id);
                const updatedMoviesIdAndDateSaved = moviesIdAndDateSaved.filter((movie) => movie.id !== params.id);
                localStorage.setItem('movieIds', JSON.stringify(updatedMoviesIdSaved));
                localStorage.setItem('movieIdsAndDate', JSON.stringify(updatedMoviesIdAndDateSaved));
                setIsAddedToList(false);
            }
        }
    };

    return (
        <S.BodyDiv>
            <div>
                <S.SideBarContainer>
                    <SideBar />
                </S.SideBarContainer>
            </div>
            <S.BannerContainer>
                <S.ImageContainer>
                    <S.ImageMovie src={`https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}`} />
                </S.ImageContainer>
                <S.DescriptionContainer>
                    <S.ListDiv>
                        <S.NameAndVoteDiv>
                            <S.NameMovie>{movieDetail?.title?.toUpperCase() + ' (' + yearMovie + ')'}</S.NameMovie>
                            <S.VoteMovieDiv>
                                <StarRateIcon sx={{ color: 'yellow', height: '30px', width: '15px' }}></StarRateIcon>
                                <S.VoteMovieNumber>{Number(movieDetail?.vote_average).toFixed(1)}</S.VoteMovieNumber>
                            </S.VoteMovieDiv>
                        </S.NameAndVoteDiv>
                        <S.GenresContainer>
                            {movieDetail?.genres.map((item) => {
                                return < S.GenresItem > {item.name} </S.GenresItem>
                            })}
                        </S.GenresContainer>
                        <div>
                            <Button
                                disabled={isAddedToList}
                                onClick={handleClickMyList}
                                startIcon={<AddIcon />}
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    height: '50px'
                                }}
                            >
                                {isAddedToList ? 'Adicionado à Lista' : 'Adicionar à Lista'}
                            </Button>
                            {isAddedToList && (
                                <Button
                                    onClick={handleClickMyList}
                                    startIcon={<RemoveIcon />}
                                    variant="outlined"
                                    sx={{
                                        color: 'white',
                                        height: '50px'
                                    }}
                                >
                                    Remover da Lista
                                </Button>
                            )}
                        </div>
                    </S.ListDiv>
                    <S.OverviewMovie>{movieDetail?.overview}</S.OverviewMovie>
                </S.DescriptionContainer>
            </S.BannerContainer >
        </S.BodyDiv >
    );
};

export default MoveDetail;
