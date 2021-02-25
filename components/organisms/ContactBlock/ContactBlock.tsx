import { ContactSection, Title, Subtitle } from './ContactBlock.styles';

export default function ContactBlock() {
  return (
    <ContactSection id="contact">
      <Title>Let's get in touch!</Title>
      <Subtitle>
        Feel free to say “hi” at{' '}
        <a href="mailto:hi@manuhdez.com?subject=Hi Manu!">hi@manuhdez.com</a>
      </Subtitle>
    </ContactSection>
  );
}
