/**
 * Styled components theme
 */

const theme = {
  breakpoints: {
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200,
  },
  colors: {
    alert: '#E04A4A',
    primary: '#2D99C4',
    gray: {
      lightest: '#EFEFEF',
      lighter: '#A1A1A1',
      light: '#A69FAD',
      middle: '#847E89',
      dark: '#5D5960',
      darker: '#38353A',
      darkest: '#181719',
    },
    green: '#2DC464',
  },
  fontSize: {
    medium: '1rem',
    large: '2rem',
    xlarge: '3rem',
  },
  name: 'default',
  spacing: {
    medium: '1rem',
    large: '2rem',
    xlarge: '4rem',
    xxlarge: '4rem',
  },
};

export default theme;
