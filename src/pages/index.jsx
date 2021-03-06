import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { css } from "emotion";
import styled from "react-emotion";
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";
import LeadText from "../components/LeadText/LeadText";
import LeadContacts from "../components/LeadContacts/LeadContacts";
import Config from "../../config";
import Talk from "../components/Talk";

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  margin-bottom: 20px;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }
`;

const TalksList = styled("div")`
  font-size: 0.9em;

  min-width: 50%;
  margin-top: 40px;

  h3 {
    margin-top: 0;
    margin-bottom: 20px;

    a {
      margin-left: 10px;
      font-size: 0.6em;
      vertical-align: middle;
      font-family: "Open Sans", "Helvetica Neue", serif;
    }
  }

  ul {
    list-style: none;
    margin: 0;
  }

  li:last-child {
    margin: 0;
  }
`;

const classes = {
  leadContacts: css`
    min-width: 250px;

    ${TABLET_MEDIA_QUERY} {
      width: 100%;
    }
  `,
  leadText: css`
    flex-grow: 0;
    margin-right: 60px;

    ${TABLET_MEDIA_QUERY} {
      margin-right: 0;
      margin-bottom: 20px;
    }
  `
};

class Index extends React.Component {
  render() {
    const talks = this.props.data.allTalksJson.edges.map(edge => edge.node);
    const posts = this.props.data.allMarkdownRemark.edges
      .map(edge => edge.node)
      .map(node => ({
        title: node.frontmatter.title,
        slug: node.fields.slug
      }));
    return (
      <div>
        <Helmet title={Config.siteTitle} />
        <Row justifyContent="space-between" style={{ marginBottom: 0 }}>
          <LeadText
            techs={Config.techInterestedIn}
            className={classes.leadText}
          />
          <LeadContacts
            links={Config.userLinks}
            className={classes.leadContacts}
          />
        </Row>
        <Row justifyContent="flex-start">
          <TalksList>
            <h3>
              Latest posts
              <Link className="animated" to="/blog">
                see all
              </Link>
            </h3>
            <ul>
              {posts.map(post => (
                <Link key={post.slug} to={post.slug}>
                  {post.title}
                </Link>
              ))}
            </ul>
          </TalksList>
          <TalksList>
            <h3>
              Latest Talks
              <Link className="animated" to="/talks">
                see all
              </Link>
            </h3>
            <ul>
              {talks.map(talk => (
                <li key={talk.title}>
                  <Talk talk={talk} />
                </li>
              ))}
            </ul>
          </TalksList>
        </Row>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    allTalksJson(limit: 3) {
      edges {
        node {
          title
          place
          date
          url
          video
          language
        }
      }
    }
  }
`;

export default Index;
