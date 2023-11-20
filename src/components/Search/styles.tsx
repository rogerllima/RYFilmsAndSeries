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
  border-radius:'5px';
  border-color: white;
  & label.Mui-focused {
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
`;
