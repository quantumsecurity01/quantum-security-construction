import styled from 'styled-components';
import { AnimSpinner } from '../Animation';

const LoaderStyle = styled.span`
  /* loader default style */
  display: inline-flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => (props.loaderColor ? props.loaderColor : '#000000')};
  border-top-color: transparent !important;

  /* animation goes here */
  ${AnimSpinner}
`;

LoaderStyle.displayName = 'LoaderStyle';

export default LoaderStyle;
