import { StyledFooter, Address, SocialLinks } from './Footer.styles';
import { socialLinks } from 'lib/social';

export default function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();

  return (
    <StyledFooter>
      <Address>
        {`© ${currentYear} - Designed and built by manuhdez with React and Next.js`}
      </Address>
      <SocialLinks>
        {socialLinks.map(({ label, link }) => (
          <a key={label} href={link} target="_blank" rel="noreferrer noopener">
            {label}
          </a>
        ))}
      </SocialLinks>
    </StyledFooter>
  );
}
