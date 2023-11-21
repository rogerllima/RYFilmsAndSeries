import { useEffect, useState } from 'react';
import * as S from './styles'
import SideBar from '../../components/NavBar/SideBar';
import ListMovies from '../../components/ListMovies/ListMovies';
import { ListMoviesType } from '../../types/ListMovies';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { getMovieDetail } from '../../services/MoviesService';
import { filterByMostRecentDate, sortMoviesByName } from '../../services/MyProfileService';
import { AccountDetailType } from '../../types/AccountDetail';
import { getDetailsAccount } from '../../services/AccountService';

const MyProfile = () => {
    const [movies, setMovies] = useState<ListMoviesType[]>([]);
    const [detailAccount, setDetailAccount] = useState<AccountDetailType>();

    const storedMovieIds = JSON.parse(localStorage.getItem('movieIds') || '[]') as number[];
    const storedMovieIdsAndDates = JSON.parse(localStorage.getItem('movieIdsAndDate') || '[]') as [{ id: string, saveDate: string }];

    useEffect(() => {
        const getMoviesDetailsResult = async () => {
            const promises = storedMovieIds.map(async (movieId) => {
                const response = await getMovieDetail(movieId)
                return { ...response.data };
            });
            const moviesDetails = await Promise.all(promises);
            setMovies(moviesDetails);

        };
        getMoviesDetailsResult()
    }, []);

    useEffect(() => {
        getDetailsAccount()
            .then((response) => {
                setDetailAccount(response.data)
            })
    }, [])

    const handleFilterList = (string: string) => {
        switch (string) {
            case "asc":
                setMovies(sortMoviesByName(movies, string))
                break;

            case "desc":
                setMovies(sortMoviesByName(movies, string))
                break;

            case "recent":
                setMovies(filterByMostRecentDate(movies, storedMovieIdsAndDates))
                break;
        }
    }

    return detailAccount && (
        <S.BodyDiv>
            <S.ScreenContainer>
                <S.SideBarContainer>
                    <SideBar />
                </S.SideBarContainer>
                <S.AvatarContainer
                    sx={{ width: '150px', height: '150px', objectFit: 'contain' }}
                />
                <S.NameUser> {detailAccount?.name}</S.NameUser>
                <S.LinhaDiv></S.LinhaDiv>
                <S.MyListName>Minha Lista</S.MyListName>
                <S.SlidersContainer>
                    <S.FilterDiv>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '& > *': {
                                    m: 1,
                                },
                                fontSize: '20px',
                                color: 'white'
                            }}
                        > Ordernar por:
                            <ButtonGroup size="small" aria-label="small button group">
                                <Button sx={{ color: 'white' }} onClick={() => { handleFilterList('recent') }}>Recentes</Button>,
                                <Button sx={{ color: 'white' }} onClick={() => { handleFilterList('asc') }}>A-Z</Button>,
                                <Button sx={{ color: 'white' }} onClick={() => { handleFilterList('desc') }}>Z-A</Button>,
                            </ButtonGroup>
                        </Box>
                        <S.ListContainer>
                            <ListMovies movies={movies} />
                        </S.ListContainer>
                    </S.FilterDiv>
                </S.SlidersContainer>
            </S.ScreenContainer>
        </S.BodyDiv>
    )
}

export default MyProfile;
