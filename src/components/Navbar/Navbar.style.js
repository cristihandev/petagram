import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { fadeIn } from '../../styles/animation';

export const StyledNav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  cursor: pointer;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({ time: '1.5' })};
      content: '';
      position: absolute;
      bottom: 2px;
      border-radius: 50%;
      height: 6px;
      line-height: 20px;
      width: 6px;
      background: #000;
    }
  }
`;
