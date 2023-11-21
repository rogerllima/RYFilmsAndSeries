import { useState } from "react";
import * as S from './styles.js';
import SearchBar from "../Search/Search.js";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const SideBar = () => {
    const [sideBarExpand, setSideBarExpand] = useState(true);

    return (
        <S.div sidebar={sideBarExpand.toString()} onClick={() => setSideBarExpand(!sideBarExpand)}>
            <ul>
                <S.li onClick={(e) => !sideBarExpand && e.stopPropagation()}>
                    {sideBarExpand && <SearchIcon />}
                    {!sideBarExpand && <SearchBar></SearchBar>}
                </S.li>
                <S.link to="/home">
                    <S.li onClick={(e) => e.stopPropagation()}>
                        <HomeIcon />
                        {!sideBarExpand && <span>Home</span>}
                    </S.li>
                </S.link>
                <S.link to="/my-profile">
                <S.li onClick={(e) => e.stopPropagation()}>
                    <FormatListBulletedIcon />
                    {!sideBarExpand && <span>Minha Lista</span>}
                </S.li>
                </S.link>
            </ul>
        </S.div>
    );
}

export default SideBar;
