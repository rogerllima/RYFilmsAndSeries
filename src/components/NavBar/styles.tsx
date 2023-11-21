import { Link } from "react-router-dom";
import { styled } from "styled-components";

export interface SideBar {
  sidebar: string
}

export const div = styled.div<SideBar>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${p => p.sidebar === 'true' ? '100px' : '250px'};
  background-color: #0C0B0B;
`

export const li = styled.li`
  display: flex;
  gap: 10px;
  color: #FDF7F7;
  list-style-type: none;
  padding: 10px;
  align-items: center;
  cursor: pointer;
`

export const link = styled(Link)`
  text-decoration:none;
  color: white;
`
