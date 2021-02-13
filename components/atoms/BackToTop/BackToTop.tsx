import {
  BackToTopButton,
  BackToTopButtonText,
  BackToTopButtonIcon,
} from './BackToTop.styles';

export default function BackToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <BackToTopButton onClick={handleClick}>
      <BackToTopButtonText>Back to top</BackToTopButtonText>
      <BackToTopButtonIcon>⬆️</BackToTopButtonIcon>
    </BackToTopButton>
  );
}
