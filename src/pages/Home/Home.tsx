import { useEffect, useState } from 'react';
import * as S from './styles'
import SideBar from '../../components/NavBar/SideBar';
import { filterMovies, getPopularMovies } from '../../services/MoviesService';
import ListMovies from '../../components/ListMovies/ListMovies';
import { ListMoviesType } from '../../types/ListMovies';
import PricipalMovie from '../../components/PrincipalMovie/PrincipalMovie';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';


const Home = () => {
    const [movies, setMovies] = useState<ListMoviesType[]>([]);
    const [moviesListSelect, setMoviesListSelect] = useState<ListMoviesType[]>([]);
    const [categorieMovieList, setCategorieMovieList] = useState('top_rated');

    useEffect(() => {
        getPopularMovies()
            .then((response) => {
                setMovies([...response.data.results])
            })
    }, [])

    useEffect(() => {
        filterMovies(categorieMovieList)
            .then((response) => {
                setMoviesListSelect([...response.data.results])
            })
    }
        , [categorieMovieList])



    const handleClick = (string: string) => {
        switch (string) {
            case "upcoming":
                setCategorieMovieList(string)
                break;
            case "top_rated":
                setCategorieMovieList(string)
                break;
            case "now_playing":
                setCategorieMovieList(string)
                break;
        }
    }

    return (
        <S.BodyDiv>
            <S.ScreenContainer>
                <S.SideBarContainer>
                    <SideBar />
                </S.SideBarContainer>
                <S.ImageContainer>
                    <S.PrincipalMovieContainer>
                        <PricipalMovie movies={movies}></PricipalMovie>
                    </S.PrincipalMovieContainer>
                </S.ImageContainer>
                <S.SlidersContainer>
                    <S.PopularMoviesConteiner>
                        <S.ListContainer>
                            <ListMovies movies={movies} />
                        </S.ListContainer>
                    </S.PopularMoviesConteiner>
                    <S.FilterDiv>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '& > *': {
                                    m: 1,
                                },
                            }}
                        >
                            <ButtonGroup size="small" aria-label="small button group">
                                <Button sx={{color:'white'}} onClick={() => handleClick('now_playing')}>Em Cartaz</Button>,
                                <Button sx={{color:'white'}} onClick={() => handleClick('top_rated')}>Melhores Avaliados</Button>,
                                <Button sx={{color:'white'}} onClick={() => handleClick('upcoming')}>Em Breve no Cinemas</Button>,
                            </ButtonGroup>
                        </Box>
                        <S.ListContainer>
                            <ListMovies movies={moviesListSelect} />
                        </S.ListContainer>
                    </S.FilterDiv>
                </S.SlidersContainer>
            </S.ScreenContainer>
        </S.BodyDiv>

    )
}

export default Home;
