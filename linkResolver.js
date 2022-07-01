exports.linkResolver = (doc) => {
  if (doc.type === "post") {
    return `/blog/${doc.uid}`;
  }

  // Backup for all other types
  return "/";
};
