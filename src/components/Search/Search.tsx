import { useState } from 'react';
import * as S from './styles.js';
import { searchMovies } from '../../services/MoviesService.js';
import { SearchResultsList } from '../SearchResultsLists/SearchResultsList.js';
import { MoviesSearchType } from '../../types/MoviesSearch.js';

const SearchBar = () => {
    const [searchResultVisible, setSearchResultVisible] = useState(false);
    const [word, setWord] = useState('');
    const [searchResult, setSearchResults] = useState<MoviesSearchType[]>();

    const showSearchResult = () => {
        if (word.length > 0) {
            setSearchResultVisible(word.trim().length > 0);
        }
    }

    const handleChange = async (value = '') => {
        setWord(value.toString());
        setSearchResults(await searchMovies(value.toString()));
        showSearchResult();
    }

    return (
        <div>
            <S.WhiteBorderTextField
                onChange={(e) => handleChange(e.target.value)}
                label="Titulos..."
                autoComplete='off'
                size='small'
                
            />
            {searchResultVisible && searchResult && searchResult?.length > 0 && <SearchResultsList resultSearch={searchResult}></SearchResultsList>}
        </div>
    );
}

export default SearchBar;
