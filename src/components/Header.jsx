import React from 'react';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import profilePic from '../../static/logo/profile-pic.jpg';

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

const Pic = styled.img`
  position: relative;
  display: block;
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  top: 0px;
  left: 0px;
  width: 150px;
  height: 150px;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  border-radius: 50%;
  box-shadow: 2px 2px 4px;
`;

const PicWrapper = styled.div`
  position: relative;
  display: block;
`;

const StyP = styled.p`
  margin-left: auto;
  margin-rght: auto;
  margin-bottom: 0 !important;
  text-align: center;
  color: white;
  font-size: 2em;
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

const Subtitle = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  font-size: 1em;
  text-align: center;
  color: white;
`;

const Header = ({ children, title, job, cover }) => (
  <Wrapper>
    <PicWrapper>
      <Pic src={profilePic} alt="Grant Elmer" />
      <StyP>{title}</StyP>
      <Subtitle>{job}</Subtitle>
    </PicWrapper>
  </Wrapper>
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
