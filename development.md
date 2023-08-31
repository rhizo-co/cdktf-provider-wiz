# How to generate code and bundle into an NPM package manually


1. Install yarn and node modules
```
npm i -g yarn
yarn install
```

2. Bump provider version in `.projenrc.js` eg.:
```js
...
const project = new CdktfProviderProject({
...
  - terraformProvider: "rhizo-co/wiz@~> 1.1.6",
  + terraformProvider: "rhizo-co/wiz@~> 1.1.7",
...
});
```

3. Generate new source files
- `yarn projen`: This will generate new package.json
- `yarn build-provider`: Will fetch the provider with cdktf, compile the typescript and generate docs
- `yarn package:js`: packages the generated TS into an NPM tarball in `dist/js/`. You can directly NPM publish or install this.


4. Commit all of the changes

Before pushing your changes, install hashicorp's copywrite tool and run it over the codebase. Commit the changes to your PR:

```
# install
brew tap hashicorp/tap
brew install hashicorp/tap/copywrite

# write copyright headers
copywrite headers
```

5. Open PR and merge to main


The [build](.github/workflows/build.yml) job will run all of the above steps and will fail the PR checks if you missed any files, so make sure to commit everything.


6. Publish

- `npm publish ./dist/js/rhizo-co-terraform-provider-wiz\@x.x.x.jsii.tgz`: publish to NPM, make sure to publish the correct version




