import { Link } from "react-router-dom";
import { styled } from "styled-components";


export const div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: 10px;
  gap:8px;
  color: white;
  overflow: auto;
`

export const slideItem = styled(Link)`
  display: flex;
  height: 180px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration:none;
`

export const img = styled.img`
  display: flex;
  height: 140px;
  width: 100%;
  object-fit: cover;
  padding: 5px;
  border-radius: 25px;
`

export const title = styled.div`
  font-family: ui-serif;
  font-size: 12px;
  letter-spacing: 0px;
  word-spacing: 0px;
  color: #ffffff;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  line-break: none;
`