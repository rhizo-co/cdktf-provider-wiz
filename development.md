# How to generate code and bundle into an NPM package manually

This repo uses yarn so make sure to install:
```
npm i -g yarn
yarn install
```

- `yarn build`: This will generate documentation in `docs`, and generate the source code in `./src`. Ignore the sed error.

- `yarn package:js`: packages the generated TS into an NPM tarball in `dist/js/`. You can directly NPM publish or install this.


Before pushing your changes, install hashicorp's copywrite tool and run it over the codebase. Commit the changes to your PR:

```
# install
brew tap hashicorp/tap
brew install hashicorp/tap/copywrite

# write copyright headers
copywrite headers
```


This is necessary to pass the [build](.github/workflows/build.yml) workflow
