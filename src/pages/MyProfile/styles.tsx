import { styled } from "styled-components";
import Avatar from '@mui/material/Avatar';

export const AvatarContainer = styled(Avatar)`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`
export const ScreenContainer = styled.div`
  height: 85vh;
  display: flex;
  width: 100vw;
  padding-left: 85px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const BannerContainer = styled.div`
  height: 95vh;
  display: flex;
  width: 100vw;
  padding-left: 85px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
`

export const SideBarContainer = styled.div`
  opacity: 1;
  transition: all .3s ease-in-out 0s;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 100;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`


export const BodyDiv = styled.div`
  background-color: #141414;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`

export const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`

export const SeachContainer = styled.div`
  position: absolute;
  margin-top: 5px;
  left: 200px;
`

export const SlidersContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FilterDiv = styled.div`
  height: 30vh;
  width: 120vw;
  margin-top: 10px;
  margin-left: 8px;
  margin-right: 8px;
`
export const NameUser = styled.h3`
  color: white;
`

export const MyListName = styled.h1`
  color: white;
`
