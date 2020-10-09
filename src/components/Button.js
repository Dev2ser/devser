import styled from 'styled-components';

export const Button = styled.button`
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  font-size: 12px;
  color: ${(props) => props.color || 'black'};
  background: ${(props) => props.bgcolor};
  padding: 2px 10px;
  margin: 5px;
  margin-right: 0;
  border: 1px #000 solid;
  border-radius: 4px;
  &:hover {
    outline: none;
  }
`;
