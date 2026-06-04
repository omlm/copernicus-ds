// Story UI configuration.
// NOTE: Story UI loads this in a sandbox without require/path/__dirname.
// Use plain relative string paths — they are normalized to absolute,
// relative to this config file's location.
module.exports = {
  "generatedStoriesPath": "src/stories/generated",
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
  "componentsPath": "src/components",
  "storyPrefix": "Generated/",
  "defaultAuthor": "Story UI AI",
  "componentFramework": "react",
  "llmProvider": "claude"
};
