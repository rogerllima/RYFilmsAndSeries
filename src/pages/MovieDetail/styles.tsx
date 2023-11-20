import { styled } from "styled-components";
import { createTheme } from '@mui/material/styles';

export const SideBarContainer = styled.div`
  opacity: 1;
  transition: all .3s ease-in-out 0s;
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
export const SeachContainer = styled.div`
  position: absolute;
  margin-top: 5px;
  left: 200px;
`
export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
`

export const DescriptionContainer = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: column;
  margin-left: 80px;
  gap:10px;
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

export const ImageMovie = styled.img`
  height: 250px;
  object-fit: contain;
  border-radius: 15px;
`
export const OverviewMovie = styled.p`
  font-family: Roboto;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: 0em;
  color: white;
  text-align: justify;
`
export const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between; 
  gap:10px;
  `

export const NameAndVoteDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  gap: 10px;
`

export const NameMovie = styled.p`
  font-family: Mulish;
  font-size: 20px;
  letter-spacing: 0em;
  text-align: left;
`

export const VoteMovieDiv = styled.div`
  display: flex;
  letter-spacing: 0em;
  text-align: left;
  width: 25px;
  height: 25px;
  background-color: #9C8080;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`

export const VoteMovieNumber = styled.p`
font-family: Roboto;
font-size: 12px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
`

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});
