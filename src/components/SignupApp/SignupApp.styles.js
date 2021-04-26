import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  sizes, breakPoints, weights, colors,
} = styleSettings;

const Section = styled.section`
  @media(min-width: ${breakPoints.desktop}) {
    width: 100%;
    padding: ${sizes.extraLarge};
  }
`;

export { Section };
