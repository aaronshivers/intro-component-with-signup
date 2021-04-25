import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  colors, sizes, breakPoints, weights,
} = styleSettings;

const Wrapper = styled.div`
  //margin: 0;
`;

const Text = styled.p`
  text-align: right;
  color: ${colors.red};
  font-size: ${sizes.small};
  font-style: italic;
  margin: 0;
`;

export { Wrapper, Text };
