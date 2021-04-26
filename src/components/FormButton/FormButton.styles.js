import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  sizes, weights, colors,
} = styleSettings;

const Wrapper = styled.div`
  margin: ${sizes.medium} 0;
`;

const Button = styled.button`
  font-size: ${sizes.medium};
  background-color: ${colors.green};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  padding: ${sizes.medium};
  width: 100%;
  text-align: center;
  line-height: 2.5rem;
  font-weight: ${weights.bold};
`;

export { Wrapper, Button };
