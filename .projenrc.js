/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  authorName: 'rhizo-co',
  packageName: 'rhizo-co-terraform-provider-wiz',
  githubNamespace: 'rhizo-co',
  useCustomGithubRunner: false,
  terraformProvider: "AxtonGrams/wiz@~> 1.2.5",
  cdktfVersion: "^0.20.0",
  constructsVersion: "^10.3.0",
  minNodeVersion: "18.12.0",
  jsiiVersion: "~5.5.0",
  typescriptVersion: "~5.5.0", // NOTE: this should be the same major/minor version as JSII
  devDeps: ["@cdktf/provider-project@^0.6.44"],
});


project.synth();
