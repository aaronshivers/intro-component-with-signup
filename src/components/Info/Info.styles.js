import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  sizes, breakPoints, weights,
} = styleSettings;

const Wrapper = styled.div`
  margin: ${sizes.medium} 0 ${sizes.extraLarge};

  @media (min-width: ${breakPoints.desktop}) {
    margin-bottom: ${sizes.extraLarge};
  }
`;

const Body = styled.p`
  text-align: center;
  line-height: 2.5rem;
  font-weight: ${weights.medium};
`;

export { Wrapper, Body };
