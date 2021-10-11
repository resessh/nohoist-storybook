export const generateHierarchy = (filepath) =>
  filepath.match(/.*?packages\/(.*?)\.story\.js/)[1].replace(/\/$/, '');
