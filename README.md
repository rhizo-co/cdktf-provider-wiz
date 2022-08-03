
# Terraform CDK databricks Provider ~> 1.0

This repo builds and publishes the Terraform databricks Provider bindings for [CDK for Terraform](https://cdk.tf).

## Available Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@cdktf/provider-databricks](https://www.npmjs.com/package/@cdktf/provider-databricks).

`npm install @cdktf/provider-databricks`

### PyPI

The PyPI package is available at [https://pypi.org/project/cdktf-cdktf-provider-databricks](https://pypi.org/project/cdktf-cdktf-provider-databricks).

`pipenv install cdktf-cdktf-provider-databricks`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Databricks](https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Databricks).

`dotnet add package HashiCorp.Cdktf.Providers.Databricks`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-databricks](https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-databricks).

```
<dependency>
    <groupId>com.hashicorp</groupId>
    <artifactId>cdktf-provider-databricks</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```


### Go

The go package is generated into the [`github.com/hashicorp/cdktf-provider-databricks-go`]https://github.com/hashicorp/cdktf-provider-databricks-go) package.

`go get github.com/hashicorp/cdktf-provider-databricks-go/databricks`

## Docs

Find auto-generated docs for this provider here: [./API.md](./API.md)
You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-databricks).

## Versioning

This project is explicitly not tracking the Terraform databricks Provider version 1:1. In fact, it always tracks `latest` of `~> 1.0` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by generating the [provider constructs manually](https://cdk.tf/imports).

These are the upstream dependencies:

- [Terraform CDK](https://cdk.tf)
- [Terraform databricks Provider](https://github.com/terraform-providers/terraform-provider-databricks)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

## Features / Issues / Bugs

Please report bugs and issues to the [terraform cdk](https://cdk.tf) project:

- [Create bug report](https://cdk.tf/bug)
- [Create feature request](https://cdk.tf/feature)

## Contributing

### projen

This is mostly based on [projen](https://github.com/eladb/projen), which takes care of generating the entire repository.

### cdktf-provider-project based on projen

There's a custom [project builder](https://github.com/hashicorp/cdktf-provider-project) which encapsulate the common settings for all `cdktf` providers.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).

### Repository Management

The repository is managed by [Repository Manager](https://github.com/hashicorp/cdktf-repository-manager/)
