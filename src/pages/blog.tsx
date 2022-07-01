import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { BlogPageQuery } from "../_generated/graphql-types";
import { PrismicLink } from "@prismicio/react";

const BlogPage = () => {
  const query = useStaticQuery<BlogPageQuery>(graphql`
    query BlogPage {
      allPrismicPost {
        nodes {
          data {
            blog_title {
              text
            }
          }
          url
          uid
          id
        }
      }
    }
  `);

  const posts = query.allPrismicPost;

  return (
    <>
      <h1>Blog Posts </h1>

      {posts.nodes.map((post) => {
        return (
          <div key={post.id}>
            <PrismicLink href={post.url}>
              <h2>{post.data.blog_title?.text}</h2>
            </PrismicLink>
          </div>
        );
      })}
    </>
  );
};

export default BlogPage;
