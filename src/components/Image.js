import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => (props.rounded ? '50%' : '0%')};
`;

export function RoundImage(props) {
  let { src, height = 50, width = 50, alt } = props;

  if (!src) {
    return console.error('no src is provided');
  }
  if (!alt) {
    alt = '';
  }

  return (
    <Image
      src={src}
      height={`${height}px`}
      width={`${width}px`}
      alt={alt}
      rounded
    />
  );
}
