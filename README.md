# RESS Desktop

Built on ES6, React, Electron and Babel with `npm`.

## Interfaces
1. School Registry
2. Accountant
3. Librarian
4. Tutor
5. Manager
6. Student

### How?

The Node and Electron binaries both take a parameter `-r` that automatically
requires a module before the rest of the code.  The `npm start` script is
modified using this, which registers Babel and loads the entry point `main.js`.

The renderer entry point `index.html` does basically the same, but loads the
`scripts/main.js` file, which renders the `views/main.jsx` component into the `body`.

## Installation

```bash
git clone https://github.com/b52/electron-es6-react.git
cd electron-es6-react
npm install
npm start
```

[ES6]: http://exploringjs.com/
[React]: https://facebook.github.io/react/
[Electron]: http://electron.atom.io/
[Babel]: http://babeljs.io

