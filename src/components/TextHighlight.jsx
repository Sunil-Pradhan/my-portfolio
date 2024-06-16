import styled, { keyframes } from 'styled-components';

const highlight = keyframes`
 to {
      background-position: 0 0;
    }
`;

export const Mark = styled.mark`
  animation: 1.5s ${highlight} 1.5s 1 normal forwards;
  background-color: none;
  background: linear-gradient(90deg, #fff45c 50%, rgba(255, 255, 255, 0) 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
`;
