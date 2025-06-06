/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    "d3-array": "<rootDir>/node_modules/d3-array/dist/d3-array.js",
    "d3-color": "<rootDir>/node_modules/d3-color/dist/d3-color.js",
    "d3-interpolate": "<rootDir>/node_modules/d3-interpolate/dist/d3-interpolate.js",
    "d3-hierarchy": "<rootDir>/node_modules/d3-hierarchy/dist/d3-hierarchy.js",
    "d3-selection": "<rootDir>/node_modules/d3-selection/dist/d3-selection.js",
    "d3-transition": "<rootDir>/node_modules/d3-transition/dist/d3-transition.js",
  },
};
