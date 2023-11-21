import { styled } from "styled-components";
import TextField from '@mui/material/TextField';

export const button = styled.button`
  background-color: black;
  color: white;

  padding: 10px;
  margin-top: 10px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity:0.7;
`
export const div = styled.div`
  display: flex;
`

export const WhiteBorderTextField = styled(TextField)`
  /* & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
  & input {
    color: white;
  }
  position: absolute; */
  & input {
    color: white;
  }
  &.MuiTextField-root{
    .MuiInputBase-root{
      &.MuiOutlinedInput-root {
        border: none;
        & :not(:focus) {
          border: 1.5px solid white;
          border-radius: 4px;
          padding: 4px;
        }
      }
    }
  }
  & label.Mui-focused, label {
    color: white;
  }
`;
