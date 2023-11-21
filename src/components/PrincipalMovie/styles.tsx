import { Link } from "react-router-dom"
import styled from "styled-components"

export const SlideItem = styled(Link)`
  display: flex;
  height: 250px;
  padding: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  text-align: justify;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 3px;
  border-radius: 15px;
`

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`

export const NameMovie = styled.p`
  font-size: 15px;
  letter-spacing: 0em;
  text-align: left;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
`

export const OverviewMovie = styled.p`
  font-size: 15px;
  letter-spacing: 0em;
  color: white;
  text-align: justify;
`

export const NameAndOverviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 10px;
  `