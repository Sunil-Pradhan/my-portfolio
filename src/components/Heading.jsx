import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 6.5rem;
  font-weight: 500;
  color: #121314;
  margin-bottom: 30px;

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 16rem;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const H2 = styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  color: #121314;

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 31rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
