import styled, { createGlobalStyle } from 'styled-components';
import styleSettings from './styleSettings';
import mobileBG from './assets/images/bg-intro-mobile.png';
import desktopBG from './assets/images/bg-intro-desktop.png';

const { sizes, colors, breakPoints } = styleSettings;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background-image: url(${mobileBG});
    background-color: ${colors.red};
    font-size: ${sizes.medium};
    font-family: 'Poppins', sans-serif;
    color: ${colors.white};

    @media(min-width: ${breakPoints.desktop}) {
      background-image: url(${desktopBG});
    }
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: ${sizes.extraLarge};

  @media(min-width: ${breakPoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;

export {
  GlobalStyle as default,
  Container,
};
