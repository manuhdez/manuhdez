import styled from 'styled-components';
import { Body } from 'styles/Typography';

export const BackToTopButtonText = styled(Body)`
  display: inline;
  margin-right: 0.5rem;
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 0.5s ease-out, transform 0.3s ease-out;

  @media (max-width: var(--mq-phone)) {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BackToTopButtonIcon = styled.span`
  font-size: 1.5rem;
  transition: opacity 0.5s ease-out, transform 0.3s ease-out;
`;

export const BackToTopButton = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border: none;
  font-size: 1rem;
  background: none;
  cursor: pointer;
  margin-left: auto;
  outline: none;
  overflow: hidden;

  &:hover ${BackToTopButtonText} {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: var(--mq-phone)) {
    margin-left: 0;
    margin-top: 2rem;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--pearl-white);
  }
`;
