import { styled } from "styled-components";
import { createTheme } from "@mui/material/styles";

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
  display: flex;
  align-items: center;

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
  align-items: center;
  gap:10px;
`

export const BannerContainer = styled.div`
  height: 100vh;
  display: flex;
  width: 100vw;
  padding-left: 85px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const ImageMovie = styled.img`
  height:  300px;
  object-fit: contain;
  border-radius: 15px;
`
export const OverviewMovie = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: white;
  text-align: justify;
  padding: 5px;
`
export const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
  gap:10px;
  padding: 5px;
  `

export const NameAndVoteDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  gap: 10px;
`

export const NameMovie = styled.p`
  font-size: 30px;
  letter-spacing: 0em;
  text-align: left;
`

export const VoteMovieDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`

export const VoteMovieNumber = styled.p`
font-size: 18px;
`
export const GenresContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 5px;
`
export const GenresItem = styled.div`
  color: white;
  font-size: 20px;
`
