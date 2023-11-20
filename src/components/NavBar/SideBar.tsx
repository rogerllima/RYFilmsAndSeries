import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import * as S from './styles.js';
import SearchBar from "../Search/Search.js";

const SideBar = () => {
    const [sideBarExpand, setSideBarExpand] = useState(true);

    return (
        <S.div sidebar={sideBarExpand.toString()} onClick={() => setSideBarExpand(!sideBarExpand)}>
            <ul>
                <S.li onClick={(e) => !sideBarExpand && e.stopPropagation()}>
                    {sideBarExpand && <IoSearch />}
                    {!sideBarExpand && <SearchBar></SearchBar>}
                </S.li>
                <S.link to="/home">
                    <S.li>
                        <IoHomeSharp />
                        {!sideBarExpand && <span>Home</span>}
                    </S.li>
                </S.link>
                <S.li>
                    <FaPlus />
                    {!sideBarExpand && <span>Minha Lista</span>}
                </S.li>
            </ul>
        </S.div>
    );
}

export default SideBar;
