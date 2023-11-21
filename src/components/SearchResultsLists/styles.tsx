import { styled } from "styled-components";
import ListItem from '@mui/material/ListItem';

export const DivList = styled(ListItem)`
  background-color: #141414;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
  display: none;
  }
  text-decoration: none;
`

