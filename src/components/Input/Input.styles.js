import styled from 'styled-components';
import styleSettings from '../../styleSettings';
import errorImage from '../../assets/images/icon-error.svg';

const {
  sizes, weights, colors,
} = styleSettings;

const Wrapper = styled.div`
  margin: ${sizes.medium} 0 0;
`;

const Label = styled.label`
  &.error {
    position: relative;
  }

  &.error:after {
    content: "";
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url(${errorImage}) center / contain no-repeat;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: ${sizes.medium};
  font-weight: ${weights.bold};
  text-transform: capitalize;
  border-radius: 5px;
  border: 1px solid ${colors.grayishBlue};

  :focus {
    outline: none;
  }

  &.error {
    border-color: ${colors.red};
  }
`;

export { Wrapper, StyledInput, Label };
