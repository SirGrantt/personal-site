import React from 'react';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import bannerPic from '../../static/logo/wine-comp-banner2.png';

const Wrapper = styled.header`
  -webkit-clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    -webkit-clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
    clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
  }
  background: ${props => props.theme.gradient.rightToLeft};
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 275px;
  }
  position: relative;
  overflow: hidden;
`;

const BannerWrapper = styled.div`
  width: 100%;
  display: block;
`;
const Banner = styled.img`
  width: 100%;
  display: block;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: relative;
  top: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  transform: translate(-50%, -50%);

  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  margin-bottom: 3rem;
  align-items: center;
`;



const Header = ({ children, title, job, cover }) => (
  <>
    <BannerWrapper>
      <Banner src={bannerPic} alt="banner" />
    </BannerWrapper>
  </>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  job: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
