# Custom UI Components

React library to implement reusable UI components to inject UI components at any react project.

## Story Book 
[link](https://627b9cf478ec3d004a435c58-weqpgjetun.chromatic.com/)

### Prerequisites and Setup

1. Run `npm install` to install the project dependencies.

2. Run `npm run build` to building our library with both `Commonjs` and `ES Modules`, This will allow our component to have more compatibility in projects with different JavaScript versions.

3. Run `npm run storybook` will open a new tab on your browser and render the component inside the Storybook view

### Configuration

Code quality is set up for you with `prettier`, `eslint`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

#### Rollup

[Rollup](https://rollupjs.org/guide/en/) is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application, it's very similar to [webpack](https://webpack.js.org/) in that it is a tool for bundling individual Javascript modules into a single source that a browser is better able to understand.

Though both tools can accomplish the same goal depending on configuration, typically webpack is used for bundling applications while rollup is particularly suited for bundling libraries (like ours). That's why we've chosen rollup.

#### TypeScript

`tsconfig.json`is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.
