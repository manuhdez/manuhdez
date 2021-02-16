import styled from 'styled-components';
import { device } from 'styles/MediaQueries';
import { H3, Body } from 'styles/Typography';

interface ItemProps {
  size: string;
}

export const Cover = styled.picture`
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    object-fit: cover;
    transition: transform 1.5s ease-in-out;
  }
`;

export const Data = styled.div`
  width: 100%;
  padding: 3rem 2rem 1.5rem 2rem;
  z-index: 1;
  color: var(--pearl-white);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  pointer-events: none;

  ${H3} {
    margin-bottom: 0.5rem;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  ${Body} {
    transition: opacity 1s ease-out, transform 0.8s ease-in-out;
  }

  @media ${device('min').tablet} {
    ${H3}, ${Body} {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`;

export const Item = styled.article<ItemProps>`
  display: flex;
  align-items: flex-end;

  height: 100%;

  position: relative;
  overflow: hidden;

  border-radius: var(--small-radius);
  box-shadow: var(--card-shadow-dark);
  transition: transform 0.5s ease-in-out;

  ${({ size }) => size === 'tall' && 'grid-row-end: span 2;'}
  ${({ size }) => size === 'wide' && 'grid-column-end: span 2;'}

  @media ${device('min').tablet} {
    &:hover {
      transform: scale(1.025);

      ${H3}, ${Body} {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;
