import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  colors, sizes,
} = styleSettings;

const Text = styled.p`
  text-align: right;
  color: ${colors.red};
  font-size: ${sizes.small};
  font-style: italic;
  margin: 0;
`;

// eslint-disable-next-line import/prefer-default-export
export { Text };
