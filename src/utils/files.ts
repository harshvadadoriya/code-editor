type TFileType = {
  name: string;
  language: string;
};

const files: Record<string, TFileType> = {
  "index.html": {
    name: "index.html",
    language: "html",
  },
  "style.css": {
    name: "style.css",
    language: "css",
  },
  "script.js": {
    name: "script.js",
    language: "javascript",
  },
  "app.js": {
    name: "app.js",
    language: "javascript",
  },
};

export default files;
