// EXAMPLE OF INDIVIDUAL SLICE SET UP
// import * as React from "react";
// import { graphql } from "gatsby";
// import { SliceComponentProps } from "@prismicio/react";
// import { PrismicPostDataBodyTextBox } from "../_generated/graphql-types";

// export type TextBox = PrismicPostDataBodyTextBox;

// export const TextBox = ({ slice }: SliceComponentProps<TextBox>) => (
//   <>
//     <p>{slice.primary.text_box?.text}</p>
//   </>
// );

// export const query = graphql`
//   fragment PostTextBox on PrismicPostDataBodyTextBox {
//     primary {
//       text_box {
//         text
//       }
//     }
//   }
// `;
