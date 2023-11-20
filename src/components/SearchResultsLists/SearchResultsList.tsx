import { useEffect, useState } from 'react';
import * as S from './styles.js';
import { MoviesSearchType } from '../../types/MoviesSearch.js';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface SearchResultsListProps {
    resultSearch: MoviesSearchType[] | (() => MoviesSearchType[]);
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({ resultSearch }) => {
    const [moviesResult, setMoviesResult] = useState<MoviesSearchType[]>(resultSearch);

    useEffect(() => {
        setMoviesResult(resultSearch)
    }, [resultSearch])


    return (
        < S.DivList>
            {/* {moviesResult?.map((val, key) => {
                return <a href={'/movie-detail/' + val.id}><S.buttonMovie key={key}>{val.title}</S.buttonMovie></a>
            })} */}
            {moviesResult?.map((val, key) => {
                return <ListItem key={key} component="a" disablePadding href={'/movie-detail/' + val.id}>
                    <ListItemButton>
                        <ListItemText primary={val.title} primaryTypographyProps={{ fontSize: '10px', color: 'white' }} />
                    </ListItemButton>
                </ListItem>
            })}

        </S.DivList>
    )
}

