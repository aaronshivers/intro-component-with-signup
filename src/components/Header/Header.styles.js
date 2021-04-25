import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  colors, sizes, breakPoints, weights,
} = styleSettings;

const Wrapper = styled.div`
  margin-bottom: ${sizes.medium};
  padding: ${sizes.extraLarge} 0 0};
  
  @media (min-width: ${breakPoints.desktop}) {
    margin-bottom: ${sizes.extraLarge};
  }
`;

const Title = styled.h1`
  text-align: center;
  color: ${colors.white};
  font-size: ${sizes.extraLarge};
  font-weight: ${weights.bold};
`;

export { Wrapper, Title };
