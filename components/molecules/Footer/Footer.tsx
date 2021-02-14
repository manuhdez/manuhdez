import BackToTop from 'components/atoms/BackToTop/BackToTop';
import { StyledFooter, Address } from './Footer.styles';

export default function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();

  return (
    <StyledFooter>
      <Address>
        {`© ${currentYear} - Designed and built by manuhdez with React and Next.js`}
        <BackToTop />
      </Address>
    </StyledFooter>
  );
}
