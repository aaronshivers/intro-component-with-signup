import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  sizes, breakPoints, weights, colors,
} = styleSettings;

const Wrapper = styled.div`
  margin-bottom: ${sizes.medium};
  //padding: ${sizes.small};

  @media (min-width: ${breakPoints.desktop}) {
    margin-bottom: ${sizes.extraLarge};
  }
`;

const Body = styled.p`
  font-size: ${sizes.small};
  color: ${colors.grayishBlue};
  text-align: center;
  line-height: 2.5rem;
  font-weight: ${weights.medium};
`;

const Anchor = styled.a`
  // background-color: transparent;
  // border: none;
   color: ${colors.red};
  // padding: 20px 34px;
  // text-align: center;
  // text-decoration: none;
  // display: inline-block;
  // font-size: 20px;
  // margin: 4px 2px;
  // cursor: pointer;
`;

export { Wrapper, Body, Anchor };
