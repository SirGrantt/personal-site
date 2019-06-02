import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Header, PostList } from 'components';
import profilePic from '../../static/logo/profile-pic.jpg';
import { Layout } from 'layouts';

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

const Subtitle = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  font-size: 1em;
  text-align: center;
  color: white;
`;

const StyP = styled.p`
  margin-left: auto;
  margin-rght: auto;
  margin-bottom: 0 !important;
  text-align: center;
  color: white;
  font-size: 2em;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Grant Elmer'} />
      <Header title="Grant Elmer" job="Software Engineer">About Me</Header>
      <PicWrapper>
        <Pic src={profilePic} alt="Grant Elmer" />
        <StyP>Grant Elmer</StyP>
        <Subtitle>Software Engineer</Subtitle>
      </PicWrapper>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
