import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  sizes, breakPoints, colors,
} = styleSettings;

const Wrapper = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  margin-bottom: ${sizes.medium};
  padding: ${sizes.large};

  @media (min-width: ${breakPoints.desktop}) {
    margin-bottom: ${sizes.extraLarge};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
