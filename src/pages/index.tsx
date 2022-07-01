import { PrismicLink } from "@prismicio/react";
import * as React from "react";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to the Gatsby, TS, Prismic starter project</h1>
      <PrismicLink href={"/blog"}>
        <p>Go to blog page</p>
      </PrismicLink>
    </>
  );
};

export default HomePage;
