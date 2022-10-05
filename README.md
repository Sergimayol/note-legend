# Note Legend

This is a simple minimalistic markdown note viewer desktop application.

The application is designed to have as a cheat sheet the notes you have written in markdown, since the window display is configured so that it is always on top of any other tab. This way you can have your notes always visible while you are working on your computer. The application is also designed to be as minimalistic as possible, so that it does not take up too much space on your screen.

## Features

The markdown notes are rendered using [react-markdown](https://github.com/remarkjs/react-markdown) and the [remark-gfm](https://github.com/remarkjs/remark-gfm) plugin. The markdown styling is done using [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) dark theme.

- [x] Display notes in markdown
- [x] Always on top
- [x] Minimalistic design
- [x] Resizeable window

## Getting Started

1. Download the latest release from the [releases page](https://github.com/Sergimayol/note-legend/releases) or [build](#build-app) the application yourself.
2. Unzip the downloaded file.
3. Run the application.
4. Click on the "Open" button and select the markdown file you want to display.
5. Enjoy!

## Build App

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run build` to build the application. The build files will be in the `dist` folder.
4. Enjoy!

> **Note**: More info about the build in the nextron typescript template [build section](#build).

## Made with

This project uses the [`Nextron Typescript Template`](#nextron-typescript-template) template.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Nextron Typescript Template

## Description

### What is Nextron?

[Nextron](https://github.com/saltyshiomix/nextron) is a framework for building desktop applications with Electron and Next.js. With Nextron, you can use all the features of Next.js, such as server-side rendering and code splitting, in your Electron app. Nextron also provides a development environment that enables you to develop your app with hot reloading. It also provides a way to use [TypeScript](https://github.com/microsoft/TypeScript) in your app and an easy way to build your app for distribution.

For more information, see the official [Nextron documentation](https://github.com/saltyshiomix/nextron) and the [repository](https://github.com/saltyshiomix/nextron).

### What is this template?

This template is a boilerplate for building desktop applications with Nextron. It includes the following features:

- [TypeScript](https://github.com/microsoft/TypeScript) support.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [File Structure](#file-structure) already set up.
- [Electron Builder](https://www.electron.build/configuration/configuration) for building your app for distribution.
- [Next.js](https://nextjs.org/) for server-side rendering and code splitting.

> **Note**: The renderer (nextjs) file structure is configured for my personal preference. The initial structure is the same as the one created by nextron tailwindcss example.

### File Structure

```bash
.
├── main/       # Main process code
├── renderer/   # Renderer process code (Next.js)
└── resources/  # Resources for your app
```

## Development

### Install dependencies

```bash
# with npm
npm install

# with yarn
yarn
```

### Run development

```bash
# with npm
npm run dev

# with yarn
yarn dev
```

### Build

```bash
# with npm
npm run build

# with yarn
yarn build
```

> **Note**: For the build you can select the platform you want, all the options are in the [package.json](package.json) file.

## License

This project is licensed under the terms of the [MIT license](./LICENSE).
