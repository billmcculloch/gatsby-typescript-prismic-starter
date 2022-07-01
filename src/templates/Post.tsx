import { SliceZone, SliceZoneComponents } from "@prismicio/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { components } from "../slices/SliceIndex";
import { PostQuery } from "../_generated/graphql-types";

const PostTemplate = () => {
  const staticData = useStaticQuery<PostQuery>(graphql`
    query Post($id: String) {
      prismicPost(id: { eq: $id }) {
        data {
          blog_title {
            text
          }
          body {
            ... on PrismicSliceType {
              slice_type
            }
            ...PostTextBox
          }
        }
      }
    }
  `);

  const data = staticData;

  return (
    <>
      <h1>{data.prismicPost?.data.blog_title?.text}</h1>
      <SliceZone
        slices={data.prismicPost?.data.body}
        components={components as SliceZoneComponents}
      />
    </>
  );
};
export default PostTemplate;
