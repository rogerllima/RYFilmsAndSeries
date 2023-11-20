import { useEffect, useState } from 'react';
import * as S from './styles'
import SideBar from '../../components/NavBar/SideBar';
import { getMovieDetail } from '../../services/MoviesService';
import { useParams } from 'react-router-dom';
import { MovieDetailType } from '../../types/MovieDetail';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider } from '@mui/material/styles';

const MoveDetail = () => {
    const [movieDetail, setMovieDetail] = useState<MovieDetailType>();
    const params = useParams();

    useEffect(() => {
        getMovieDetail(Number(params.id))
            .then((response) => {
                setMovieDetail({ ...response.data })
            })
    }, []);

    return (
        <S.BodyDiv>
            <div>
                <S.SideBarContainer >
                    <SideBar />
                </S.SideBarContainer>
            </div>
            <S.BannerContainer>
                <S.ImageContainer>
                    <S.ImageMovie
                        src={'https://image.tmdb.org/t/p/w500' + movieDetail?.backdrop_path}>
                    </S.ImageMovie>
                </S.ImageContainer>
                <S.DescriptionContainer>
                    <S.ListDiv>
                        <S.NameAndVoteDiv>
                            <S.NameMovie>{movieDetail?.title}</S.NameMovie>
                            <S.VoteMovieDiv>
                                <S.VoteMovieNumber>
                                    {(Number(movieDetail?.vote_average).toFixed(1))}
                                </S.VoteMovieNumber>
                            </S.VoteMovieDiv>
                        </S.NameAndVoteDiv>
                        <div>
                            <ThemeProvider theme={S.theme}>
                                <Button variant="text" color='primary' startIcon={<AddIcon />}>
                                    Adicionar na Lista
                                </Button>
                            </ThemeProvider>
                        </div>
                    </S.ListDiv>
                    <S.OverviewMovie>
                        {movieDetail?.overview}
                    </S.OverviewMovie>
                </S.DescriptionContainer>
            </S.BannerContainer>
        </S.BodyDiv>

    )
}

export default MoveDetail;
