# How to generate code and bundle into an NPM package manually

This repo uses yarn so make sure to install:
```
npm i -g yarn
yarn install
```

- `yarn build`: This will generate documentation in `docs`, and generate the source code in `./src`. Ignore the sed error.

- `yarn package:js`: packages the generated TS into an NPM tarball in `dist/js/`. You can directly NPM publish or install this.




