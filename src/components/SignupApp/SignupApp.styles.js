import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  sizes, breakPoints,
} = styleSettings;

const Section = styled.section`
  @media (min-width: ${breakPoints.desktop}) {
    width: 100%;
    padding: ${sizes.extraLarge};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Section };
