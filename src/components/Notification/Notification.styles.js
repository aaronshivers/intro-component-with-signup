import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  colors, sizes, breakPoints, weights,
} = styleSettings;

const Wrapper = styled.div`
  background-color: ${colors.blue};
  border-radius: 10px;
  margin: ${sizes.extraLarge} 0;
  padding: ${sizes.extraLarge} 4rem;

  @media (min-width: ${breakPoints.desktop}) {
    margin-bottom: ${sizes.extraLarge};
  }
`;

const Paragraph = styled.p`
  text-align: center;
  color: ${colors.white};
  font-size: ${sizes.medium};
  line-height: 2.5rem;
  margin: 0;
`;

const Bold = styled.span`
  font-weight: ${weights.bold};
`;

export { Wrapper, Paragraph, Bold };
