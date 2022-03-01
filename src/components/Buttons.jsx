import styled from 'styled-components';

export const CustomButton = styled.button`
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

export const Button = styled.button`
  display: 'inline-flex';
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.bgColor};
  border-width: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  &:hover {
    filter: brightness(90%);
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

export const OutlinedButton = styled.button`
  display: inline-flex;
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.bgColor};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: 1px ${(props) => props.borderColor} solid;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBgColor};
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
