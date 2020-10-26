import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border: none;
  outline: 0;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &[disabled]{
    opacity: .3;
  }
`;