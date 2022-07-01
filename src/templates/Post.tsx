import { SliceZone, SliceZoneComponents } from "@prismicio/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { PostQuery } from "../_generated/graphql-types";

const PostTemplate = () => {
  const staticData = useStaticQuery<PostQuery>(graphql`
    query Post($id: String) {
      prismicPost(id: { eq: $id }) {
        data {
          blog_title {
            text
          }
          # EXAMPLE OF HOW TO ADD SLICES TO QUERY - Fragment comes from the slice file itself
          # body {
          #   ... on PrismicSliceType {
          #     slice_type
          #   }
          #   ...PostTextBox
          # }
        }
      }
    }
  `);

  const data = staticData;

  return (
    <>
      <h1>{data.prismicPost?.data.blog_title?.text}</h1>

      {/* Example of how to add slices to a page
      <SliceZone
        slices={data.prismicPost?.data.body}
        components={components as SliceZoneComponents}
      /> */}
    </>
  );
};
export default PostTemplate;
