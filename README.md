Basic starter project using Gatsby. Set up with Typescript, SCSS, GraphQL Codegen and Prismic CMS 

Start by running yarn to install all packages. Then set up the Prismic connection:

1. Clone and install the starter
2. Register an account on Prismic
3. Create a new Repo
4. Store your Repo Name as an ENV variable and remove .example from the end of the file
5. In Custom Types, create a new repeatable Custom Type called 'Post' 
6. Give the Post a 'UID' and a 'Title' with a field name of 'Blog Title'
7. In Settings, go to the Custom Types API tab and generate a token. Store this as an ENV variable
8. Go to your Documents, and create a new Post, enter a UID (this will be the page url extension) and a Blog Title. 
9. Publish the page

Start the development server by running 'yarn dev'

Note: this repo includes an example of how to add Slices. These have been commented out and will need to be customised (names etc) based on how you set them up in Prismic. 
