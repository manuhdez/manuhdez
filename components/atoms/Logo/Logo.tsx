import Link from 'next/link';

interface LogoProps {
  theme?: 'dark' | 'light';
}

export default function Logo(props: LogoProps) {
  const { theme = 'light' } = props;

  const small = `/assets/images/logo/${theme}/24w.svg`;
  const medium = `/assets/images/logo/${theme}/77w.svg`;
  const large = `/assets/images/logo/${theme}/121w.svg`;

  return (
    <Link href="/">
      <a>
        <picture>
          <img
            srcSet={`${small} 24w, ${medium} 77w, ${large} 121w`}
            sizes="(max-width: 480px) 12px, (max-width: 768px) 30px, 120px"
            src="/assets/images/logo/simbolo/light.png"
            height="35px"
            alt="logo"
          />
        </picture>
      </a>
    </Link>
  );
}
