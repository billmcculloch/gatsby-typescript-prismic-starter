const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Query all Pages with their ID and UID
  const posts = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            uid
            id
          }
        }
      }
    }
  `);

  const postTemplate = path.resolve("./src/templates/Post.tsx");

  // Create pages for each Post in Prismic.
  posts.data.allPrismicPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.uid}`,
      component: postTemplate,
      context: {
        ...edge.node,
      },
    });
  });
};
