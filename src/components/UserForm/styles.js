import styled from 'styled-components';

export const Form = styled.form`
  padding: 16px 0;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  outline: 0;
  &[disabled]{
    opacity: .3;
  }
`;



export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
  color: #fff;
  background: red;
  padding: 1em;
  font-size: 12px;
  width: 100%;
  text-align: center;
`

