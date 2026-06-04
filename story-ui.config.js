const path = require("path");

module.exports = {
  "generatedStoriesPath": path.join(__dirname, "src/stories/generated"),
  "importPath": "copernicus-ds",
  "componentPrefix": "",
  "layoutRules": {
    "multiColumnWrapper": "Grid",
    "columnComponent": "Grid",
    "containerComponent": "div",
    "layoutExamples": {
      "twoColumn": "<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>\n  <div>Column 1 content</div>\n  <div>Column 2 content</div>\n</div>"
    },
    "prohibitedElements": []
  },
  "storybookFramework": "@storybook/react-vite",
  "componentsPath": path.join(__dirname, "src/components"),
  "storyPrefix": "Generated/",
  "defaultAuthor": "Story UI AI",
  "componentFramework": "react",
  "llmProvider": "claude",
  "_storyUIVersion": "unknown",
  "_lastUpdated": "2026-06-04T10:41:32.437Z"
};