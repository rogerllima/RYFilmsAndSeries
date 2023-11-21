import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Swiper } from "swiper/react";

export const div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: 10px;
  gap:8px;
  color: white;
  overflow: auto;
  height: 250px;
`

export const slideItem = styled(Link)`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration:none;
`

export const img = styled.img`
  display: flex;
  height: 230px;
  width: 100%;
  object-fit: cover;
  padding: 5px;
  border-radius: 25px;
`

export const title = styled.div`
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
  min-height: 30px;
`