import styled, { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import styleSettings from './styleSettings';
import mobileBG from './assets/images/bg-intro-mobile.png';

const { sizes, colors } = styleSettings;

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
    //background-position: center;
    background-color: ${colors.red};
    font-size: ${sizes.medium};
    font-family: 'Poppins', sans-serif;
    color: ${colors.white};
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }
`;

const Container = styled.div`
  //max-width: 60rem;
  margin: 0 auto;
  padding: ${sizes.extraLarge}
`;

const ButtonLink = styled.button`
  background: none;
  border: none;
  color: ${colors.primary};
  font-weight: 500;
  padding: 0;
`;

const Button = styled.button`
  background-color: ${colors.primary};
  border: none;
    //border-bottom: .6rem solid ${darken(0.1, colors.primary)};
  color: white;
  font-weight: 500;
  padding: ${sizes.small};
}
`;

export {
  GlobalStyle as default,
  Container,
  Button,
  ButtonLink,
};
