const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

type DeviceModifier = 'min' | 'max';

export const device = (modifier: DeviceModifier) => ({
  mobileS: `(${modifier}-width: ${size.mobileS})`,
  mobileM: `(${modifier}-width: ${size.mobileM})`,
  mobileL: `(${modifier}-width: ${size.mobileL})`,
  tablet: `(${modifier}-width: ${size.tablet})`,
  laptop: `(${modifier}-width: ${size.laptop})`,
  laptopL: `(${modifier}-width: ${size.laptopL})`,
  desktop: `(${modifier}-width: ${size.desktop})`,
  desktopL: `(${modifier}-width: ${size.desktop})`,
});

const themes = {
  light: 'light',
  dark: 'dark',
};

export const theme = {
  light: `(prefers-color-scheme: ${themes.light})`,
  dark: `(prefers-color-scheme: ${themes.dark})`,
};
