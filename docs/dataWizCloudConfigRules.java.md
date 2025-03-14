# `dataWizCloudConfigRules` Submodule <a name="`dataWizCloudConfigRules` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizCloudConfigRules <a name="DataWizCloudConfigRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules wiz_cloud_config_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRules;

DataWizCloudConfigRules.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .cloudProvider(java.util.List<java.lang.String>)
//  .createdBy(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .first(java.lang.Number)
//  .frameworkCategory(java.util.List<java.lang.String>)
//  .functionAsControl(java.lang.Boolean)
//  .functionAsControl(IResolvable)
//  .hasAutoRemediation(java.lang.Boolean)
//  .hasAutoRemediation(IResolvable)
//  .hasRemediation(java.lang.Boolean)
//  .hasRemediation(IResolvable)
//  .ids(java.util.List<java.lang.String>)
//  .isOpaPolicy(java.lang.Boolean)
//  .isOpaPolicy(IResolvable)
//  .matcherType(java.util.List<java.lang.String>)
//  .project(java.util.List<java.lang.String>)
//  .riskEqualsAll(java.util.List<java.lang.String>)
//  .riskEqualsAny(java.util.List<java.lang.String>)
//  .scopeAccountIds(java.util.List<java.lang.String>)
//  .search(java.lang.String)
//  .serviceType(java.util.List<java.lang.String>)
//  .severity(java.util.List<java.lang.String>)
//  .subjectEntityType(java.util.List<java.lang.String>)
//  .targetNativeType(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.cloudProvider">cloudProvider</a></code> | <code>java.util.List<java.lang.String></code> | Find CSPM rules related to cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.createdBy">createdBy</a></code> | <code>java.util.List<java.lang.String></code> | Search rules by user. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | CSPM Rule enabled status. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.first">first</a></code> | <code>java.lang.Number</code> | How many results to return     - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.frameworkCategory">frameworkCategory</a></code> | <code>java.util.List<java.lang.String></code> | Search rules by any of securityFramework \| securitySubCategory \| securityCategory. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.functionAsControl">functionAsControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Search by function as control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.hasAutoRemediation">hasAutoRemediation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Rule has auto remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.hasRemediation">hasRemediation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Rule has remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | GetSearch by IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.isOpaPolicy">isOpaPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Search by opaPolicy presence. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.matcherType">matcherType</a></code> | <code>java.util.List<java.lang.String></code> | Search rules by target native type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.project">project</a></code> | <code>java.util.List<java.lang.String></code> | Search by project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.riskEqualsAll">riskEqualsAll</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.riskEqualsAny">riskEqualsAny</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scopeAccountIds">scopeAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | Find CSPM rules applied on cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Free text search on CSPM name or resource ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.serviceType">serviceType</a></code> | <code>java.util.List<java.lang.String></code> | Find CSPM rules related to the service. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.severity">severity</a></code> | <code>java.util.List<java.lang.String></code> | CSPM Rule severity. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.subjectEntityType">subjectEntityType</a></code> | <code>java.util.List<java.lang.String></code> | Find rules by their entity type subject. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.targetNativeType">targetNativeType</a></code> | <code>java.util.List<java.lang.String></code> | Search rules by target native type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.cloudProvider"></a>

- *Type:* java.util.List<java.lang.String>

Find CSPM rules related to cloud provider.

* Allowed values:
  - GCP
  - AWS
  - Azure
  - OCI
  - Alibaba
  - vSphere
  - OpenShift
  - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#cloud_provider DataWizCloudConfigRules#cloud_provider}

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.createdBy"></a>

- *Type:* java.util.List<java.lang.String>

Search rules by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#created_by DataWizCloudConfigRules#created_by}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

CSPM Rule enabled status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#enabled DataWizCloudConfigRules#enabled}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.first"></a>

- *Type:* java.lang.Number

How many results to return     - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#first DataWizCloudConfigRules#first}

---

##### `frameworkCategory`<sup>Optional</sup> <a name="frameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.frameworkCategory"></a>

- *Type:* java.util.List<java.lang.String>

Search rules by any of securityFramework | securitySubCategory | securityCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#framework_category DataWizCloudConfigRules#framework_category}

---

##### `functionAsControl`<sup>Optional</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.functionAsControl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Search by function as control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#function_as_control DataWizCloudConfigRules#function_as_control}

---

##### `hasAutoRemediation`<sup>Optional</sup> <a name="hasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.hasAutoRemediation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Rule has auto remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#has_auto_remediation DataWizCloudConfigRules#has_auto_remediation}

---

##### `hasRemediation`<sup>Optional</sup> <a name="hasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.hasRemediation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Rule has remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#has_remediation DataWizCloudConfigRules#has_remediation}

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.ids"></a>

- *Type:* java.util.List<java.lang.String>

GetSearch by IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#ids DataWizCloudConfigRules#ids}

---

##### `isOpaPolicy`<sup>Optional</sup> <a name="isOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.isOpaPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Search by opaPolicy presence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#is_opa_policy DataWizCloudConfigRules#is_opa_policy}

---

##### `matcherType`<sup>Optional</sup> <a name="matcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.matcherType"></a>

- *Type:* java.util.List<java.lang.String>

Search rules by target native type.

* Allowed values:
  - CLOUD
  - TERRAFORM
  - CLOUD_FORMATION
  - KUBERNETES
  - AZURE_RESOURCE_MANAGER
  - DOCKER_FILE
  - ADMISSION_CONTROLLER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#matcher_type DataWizCloudConfigRules#matcher_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.project"></a>

- *Type:* java.util.List<java.lang.String>

Search by project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#project DataWizCloudConfigRules#project}

---

##### `riskEqualsAll`<sup>Optional</sup> <a name="riskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.riskEqualsAll"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}.

---

##### `riskEqualsAny`<sup>Optional</sup> <a name="riskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.riskEqualsAny"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}.

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="scopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scopeAccountIds"></a>

- *Type:* java.util.List<java.lang.String>

Find CSPM rules applied on cloud account IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#scope_account_ids DataWizCloudConfigRules#scope_account_ids}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Free text search on CSPM name or resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#search DataWizCloudConfigRules#search}

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.serviceType"></a>

- *Type:* java.util.List<java.lang.String>

Find CSPM rules related to the service.

* Allowed values:
  - AWS
  - Azure
  - GCP
  - OCI
  - Alibaba
  - AKS
  - EKS
  - GKE
  - Kubernetes
  - OKE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#service_type DataWizCloudConfigRules#service_type}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.severity"></a>

- *Type:* java.util.List<java.lang.String>

CSPM Rule severity.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#severity DataWizCloudConfigRules#severity}

---

##### `subjectEntityType`<sup>Optional</sup> <a name="subjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.subjectEntityType"></a>

- *Type:* java.util.List<java.lang.String>

Find rules by their entity type subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#subject_entity_type DataWizCloudConfigRules#subject_entity_type}

---

##### `targetNativeType`<sup>Optional</sup> <a name="targetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.targetNativeType"></a>

- *Type:* java.util.List<java.lang.String>

Search rules by target native type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#target_native_type DataWizCloudConfigRules#target_native_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCloudProvider">resetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFrameworkCategory">resetFrameworkCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFunctionAsControl">resetFunctionAsControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasAutoRemediation">resetHasAutoRemediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasRemediation">resetHasRemediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIds">resetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIsOpaPolicy">resetIsOpaPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetMatcherType">resetMatcherType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAll">resetRiskEqualsAll</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAny">resetRiskEqualsAny</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetScopeAccountIds">resetScopeAccountIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSubjectEntityType">resetSubjectEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetTargetNativeType">resetTargetNativeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCloudProvider` <a name="resetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCloudProvider"></a>

```java
public void resetCloudProvider()
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFirst` <a name="resetFirst" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetFrameworkCategory` <a name="resetFrameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFrameworkCategory"></a>

```java
public void resetFrameworkCategory()
```

##### `resetFunctionAsControl` <a name="resetFunctionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFunctionAsControl"></a>

```java
public void resetFunctionAsControl()
```

##### `resetHasAutoRemediation` <a name="resetHasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasAutoRemediation"></a>

```java
public void resetHasAutoRemediation()
```

##### `resetHasRemediation` <a name="resetHasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasRemediation"></a>

```java
public void resetHasRemediation()
```

##### `resetIds` <a name="resetIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIds"></a>

```java
public void resetIds()
```

##### `resetIsOpaPolicy` <a name="resetIsOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIsOpaPolicy"></a>

```java
public void resetIsOpaPolicy()
```

##### `resetMatcherType` <a name="resetMatcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetMatcherType"></a>

```java
public void resetMatcherType()
```

##### `resetProject` <a name="resetProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetProject"></a>

```java
public void resetProject()
```

##### `resetRiskEqualsAll` <a name="resetRiskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAll"></a>

```java
public void resetRiskEqualsAll()
```

##### `resetRiskEqualsAny` <a name="resetRiskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAny"></a>

```java
public void resetRiskEqualsAny()
```

##### `resetScopeAccountIds` <a name="resetScopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetScopeAccountIds"></a>

```java
public void resetScopeAccountIds()
```

##### `resetSearch` <a name="resetSearch" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetServiceType` <a name="resetServiceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetServiceType"></a>

```java
public void resetServiceType()
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetSubjectEntityType` <a name="resetSubjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSubjectEntityType"></a>

```java
public void resetSubjectEntityType()
```

##### `resetTargetNativeType` <a name="resetTargetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetTargetNativeType"></a>

```java
public void resetTargetNativeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataWizCloudConfigRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRules;

DataWizCloudConfigRules.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRules;

DataWizCloudConfigRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRules;

DataWizCloudConfigRules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRules;

DataWizCloudConfigRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataWizCloudConfigRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataWizCloudConfigRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataWizCloudConfigRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataWizCloudConfigRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataWizCloudConfigRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudConfigurationRules">cloudConfigurationRules</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList">DataWizCloudConfigRulesCloudConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProviderInput">cloudProviderInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdByInput">createdByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategoryInput">frameworkCategoryInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControlInput">functionAsControlInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediationInput">hasAutoRemediationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediationInput">hasRemediationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.idsInput">idsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicyInput">isOpaPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherTypeInput">matcherTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.projectInput">projectInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAllInput">riskEqualsAllInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAnyInput">riskEqualsAnyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIdsInput">scopeAccountIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severityInput">severityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityTypeInput">subjectEntityTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeTypeInput">targetNativeTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProvider">cloudProvider</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdBy">createdBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategory">frameworkCategory</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControl">functionAsControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediation">hasAutoRemediation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediation">hasRemediation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicy">isOpaPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherType">matcherType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.project">project</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAll">riskEqualsAll</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAny">riskEqualsAny</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIds">scopeAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceType">serviceType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severity">severity</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityType">subjectEntityType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeType">targetNativeType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `cloudConfigurationRules`<sup>Required</sup> <a name="cloudConfigurationRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudConfigurationRules"></a>

```java
public DataWizCloudConfigRulesCloudConfigurationRulesList getCloudConfigurationRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList">DataWizCloudConfigRulesCloudConfigurationRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProviderInput"></a>

```java
public java.util.List<java.lang.String> getCloudProviderInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdByInput"></a>

```java
public java.util.List<java.lang.String> getCreatedByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `frameworkCategoryInput`<sup>Optional</sup> <a name="frameworkCategoryInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategoryInput"></a>

```java
public java.util.List<java.lang.String> getFrameworkCategoryInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionAsControlInput`<sup>Optional</sup> <a name="functionAsControlInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControlInput"></a>

```java
public java.lang.Object getFunctionAsControlInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasAutoRemediationInput`<sup>Optional</sup> <a name="hasAutoRemediationInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediationInput"></a>

```java
public java.lang.Object getHasAutoRemediationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasRemediationInput`<sup>Optional</sup> <a name="hasRemediationInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediationInput"></a>

```java
public java.lang.Object getHasRemediationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.idsInput"></a>

```java
public java.util.List<java.lang.String> getIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isOpaPolicyInput`<sup>Optional</sup> <a name="isOpaPolicyInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicyInput"></a>

```java
public java.lang.Object getIsOpaPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `matcherTypeInput`<sup>Optional</sup> <a name="matcherTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherTypeInput"></a>

```java
public java.util.List<java.lang.String> getMatcherTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.projectInput"></a>

```java
public java.util.List<java.lang.String> getProjectInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `riskEqualsAllInput`<sup>Optional</sup> <a name="riskEqualsAllInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAllInput"></a>

```java
public java.util.List<java.lang.String> getRiskEqualsAllInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `riskEqualsAnyInput`<sup>Optional</sup> <a name="riskEqualsAnyInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAnyInput"></a>

```java
public java.util.List<java.lang.String> getRiskEqualsAnyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopeAccountIdsInput`<sup>Optional</sup> <a name="scopeAccountIdsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIdsInput"></a>

```java
public java.util.List<java.lang.String> getScopeAccountIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceTypeInput"></a>

```java
public java.util.List<java.lang.String> getServiceTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severityInput"></a>

```java
public java.util.List<java.lang.String> getSeverityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subjectEntityTypeInput`<sup>Optional</sup> <a name="subjectEntityTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityTypeInput"></a>

```java
public java.util.List<java.lang.String> getSubjectEntityTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetNativeTypeInput`<sup>Optional</sup> <a name="targetNativeTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeTypeInput"></a>

```java
public java.util.List<java.lang.String> getTargetNativeTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProvider"></a>

```java
public java.util.List<java.lang.String> getCloudProvider();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdBy"></a>

```java
public java.util.List<java.lang.String> getCreatedBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `frameworkCategory`<sup>Required</sup> <a name="frameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategory"></a>

```java
public java.util.List<java.lang.String> getFrameworkCategory();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionAsControl`<sup>Required</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControl"></a>

```java
public java.lang.Object getFunctionAsControl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasAutoRemediation`<sup>Required</sup> <a name="hasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediation"></a>

```java
public java.lang.Object getHasAutoRemediation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasRemediation`<sup>Required</sup> <a name="hasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediation"></a>

```java
public java.lang.Object getHasRemediation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ids`<sup>Required</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isOpaPolicy`<sup>Required</sup> <a name="isOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicy"></a>

```java
public java.lang.Object getIsOpaPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `matcherType`<sup>Required</sup> <a name="matcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherType"></a>

```java
public java.util.List<java.lang.String> getMatcherType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.project"></a>

```java
public java.util.List<java.lang.String> getProject();
```

- *Type:* java.util.List<java.lang.String>

---

##### `riskEqualsAll`<sup>Required</sup> <a name="riskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAll"></a>

```java
public java.util.List<java.lang.String> getRiskEqualsAll();
```

- *Type:* java.util.List<java.lang.String>

---

##### `riskEqualsAny`<sup>Required</sup> <a name="riskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAny"></a>

```java
public java.util.List<java.lang.String> getRiskEqualsAny();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopeAccountIds`<sup>Required</sup> <a name="scopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIds"></a>

```java
public java.util.List<java.lang.String> getScopeAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceType"></a>

```java
public java.util.List<java.lang.String> getServiceType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severity"></a>

```java
public java.util.List<java.lang.String> getSeverity();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subjectEntityType`<sup>Required</sup> <a name="subjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityType"></a>

```java
public java.util.List<java.lang.String> getSubjectEntityType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetNativeType`<sup>Required</sup> <a name="targetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeType"></a>

```java
public java.util.List<java.lang.String> getTargetNativeType();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizCloudConfigRulesCloudConfigurationRules <a name="DataWizCloudConfigRulesCloudConfigurationRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRulesCloudConfigurationRules;

DataWizCloudConfigRulesCloudConfigurationRules.builder()
    .build();
```


### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences;

DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences.builder()
    .build();
```


### DataWizCloudConfigRulesConfig <a name="DataWizCloudConfigRulesConfig" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRulesConfig;

DataWizCloudConfigRulesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .cloudProvider(java.util.List<java.lang.String>)
//  .createdBy(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .first(java.lang.Number)
//  .frameworkCategory(java.util.List<java.lang.String>)
//  .functionAsControl(java.lang.Boolean)
//  .functionAsControl(IResolvable)
//  .hasAutoRemediation(java.lang.Boolean)
//  .hasAutoRemediation(IResolvable)
//  .hasRemediation(java.lang.Boolean)
//  .hasRemediation(IResolvable)
//  .ids(java.util.List<java.lang.String>)
//  .isOpaPolicy(java.lang.Boolean)
//  .isOpaPolicy(IResolvable)
//  .matcherType(java.util.List<java.lang.String>)
//  .project(java.util.List<java.lang.String>)
//  .riskEqualsAll(java.util.List<java.lang.String>)
//  .riskEqualsAny(java.util.List<java.lang.String>)
//  .scopeAccountIds(java.util.List<java.lang.String>)
//  .search(java.lang.String)
//  .serviceType(java.util.List<java.lang.String>)
//  .severity(java.util.List<java.lang.String>)
//  .subjectEntityType(java.util.List<java.lang.String>)
//  .targetNativeType(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.cloudProvider">cloudProvider</a></code> | <code>java.util.List<java.lang.String></code> | Find CSPM rules related to cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.createdBy">createdBy</a></code> | <code>java.util.List<java.lang.String></code> | Search rules by user. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | CSPM Rule enabled status. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.first">first</a></code> | <code>java.lang.Number</code> | How many results to return     - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.frameworkCategory">frameworkCategory</a></code> | <code>java.util.List<java.lang.String></code> | Search rules by any of securityFramework \| securitySubCategory \| securityCategory. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.functionAsControl">functionAsControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Search by function as control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasAutoRemediation">hasAutoRemediation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Rule has auto remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasRemediation">hasRemediation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Rule has remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | GetSearch by IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.isOpaPolicy">isOpaPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Search by opaPolicy presence. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.matcherType">matcherType</a></code> | <code>java.util.List<java.lang.String></code> | Search rules by target native type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.project">project</a></code> | <code>java.util.List<java.lang.String></code> | Search by project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAll">riskEqualsAll</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAny">riskEqualsAny</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.scopeAccountIds">scopeAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | Find CSPM rules applied on cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.search">search</a></code> | <code>java.lang.String</code> | Free text search on CSPM name or resource ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.serviceType">serviceType</a></code> | <code>java.util.List<java.lang.String></code> | Find CSPM rules related to the service. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.severity">severity</a></code> | <code>java.util.List<java.lang.String></code> | CSPM Rule severity. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.subjectEntityType">subjectEntityType</a></code> | <code>java.util.List<java.lang.String></code> | Find rules by their entity type subject. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.targetNativeType">targetNativeType</a></code> | <code>java.util.List<java.lang.String></code> | Search rules by target native type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.cloudProvider"></a>

```java
public java.util.List<java.lang.String> getCloudProvider();
```

- *Type:* java.util.List<java.lang.String>

Find CSPM rules related to cloud provider.

* Allowed values:
  - GCP
  - AWS
  - Azure
  - OCI
  - Alibaba
  - vSphere
  - OpenShift
  - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#cloud_provider DataWizCloudConfigRules#cloud_provider}

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.createdBy"></a>

```java
public java.util.List<java.lang.String> getCreatedBy();
```

- *Type:* java.util.List<java.lang.String>

Search rules by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#created_by DataWizCloudConfigRules#created_by}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

CSPM Rule enabled status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#enabled DataWizCloudConfigRules#enabled}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

How many results to return     - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#first DataWizCloudConfigRules#first}

---

##### `frameworkCategory`<sup>Optional</sup> <a name="frameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.frameworkCategory"></a>

```java
public java.util.List<java.lang.String> getFrameworkCategory();
```

- *Type:* java.util.List<java.lang.String>

Search rules by any of securityFramework | securitySubCategory | securityCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#framework_category DataWizCloudConfigRules#framework_category}

---

##### `functionAsControl`<sup>Optional</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.functionAsControl"></a>

```java
public java.lang.Object getFunctionAsControl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Search by function as control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#function_as_control DataWizCloudConfigRules#function_as_control}

---

##### `hasAutoRemediation`<sup>Optional</sup> <a name="hasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasAutoRemediation"></a>

```java
public java.lang.Object getHasAutoRemediation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Rule has auto remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#has_auto_remediation DataWizCloudConfigRules#has_auto_remediation}

---

##### `hasRemediation`<sup>Optional</sup> <a name="hasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasRemediation"></a>

```java
public java.lang.Object getHasRemediation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Rule has remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#has_remediation DataWizCloudConfigRules#has_remediation}

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

GetSearch by IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#ids DataWizCloudConfigRules#ids}

---

##### `isOpaPolicy`<sup>Optional</sup> <a name="isOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.isOpaPolicy"></a>

```java
public java.lang.Object getIsOpaPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Search by opaPolicy presence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#is_opa_policy DataWizCloudConfigRules#is_opa_policy}

---

##### `matcherType`<sup>Optional</sup> <a name="matcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.matcherType"></a>

```java
public java.util.List<java.lang.String> getMatcherType();
```

- *Type:* java.util.List<java.lang.String>

Search rules by target native type.

* Allowed values:
  - CLOUD
  - TERRAFORM
  - CLOUD_FORMATION
  - KUBERNETES
  - AZURE_RESOURCE_MANAGER
  - DOCKER_FILE
  - ADMISSION_CONTROLLER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#matcher_type DataWizCloudConfigRules#matcher_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.project"></a>

```java
public java.util.List<java.lang.String> getProject();
```

- *Type:* java.util.List<java.lang.String>

Search by project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#project DataWizCloudConfigRules#project}

---

##### `riskEqualsAll`<sup>Optional</sup> <a name="riskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAll"></a>

```java
public java.util.List<java.lang.String> getRiskEqualsAll();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}.

---

##### `riskEqualsAny`<sup>Optional</sup> <a name="riskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAny"></a>

```java
public java.util.List<java.lang.String> getRiskEqualsAny();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}.

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="scopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.scopeAccountIds"></a>

```java
public java.util.List<java.lang.String> getScopeAccountIds();
```

- *Type:* java.util.List<java.lang.String>

Find CSPM rules applied on cloud account IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#scope_account_ids DataWizCloudConfigRules#scope_account_ids}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Free text search on CSPM name or resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#search DataWizCloudConfigRules#search}

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.serviceType"></a>

```java
public java.util.List<java.lang.String> getServiceType();
```

- *Type:* java.util.List<java.lang.String>

Find CSPM rules related to the service.

* Allowed values:
  - AWS
  - Azure
  - GCP
  - OCI
  - Alibaba
  - AKS
  - EKS
  - GKE
  - Kubernetes
  - OKE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#service_type DataWizCloudConfigRules#service_type}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.severity"></a>

```java
public java.util.List<java.lang.String> getSeverity();
```

- *Type:* java.util.List<java.lang.String>

CSPM Rule severity.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#severity DataWizCloudConfigRules#severity}

---

##### `subjectEntityType`<sup>Optional</sup> <a name="subjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.subjectEntityType"></a>

```java
public java.util.List<java.lang.String> getSubjectEntityType();
```

- *Type:* java.util.List<java.lang.String>

Find rules by their entity type subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#subject_entity_type DataWizCloudConfigRules#subject_entity_type}

---

##### `targetNativeType`<sup>Optional</sup> <a name="targetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.targetNativeType"></a>

```java
public java.util.List<java.lang.String> getTargetNativeType();
```

- *Type:* java.util.List<java.lang.String>

Search rules by target native type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#target_native_type DataWizCloudConfigRules#target_native_type}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList;

new DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get"></a>

```java
public DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference;

new DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.internalValue"></a>

```java
public DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences</a>

---


### DataWizCloudConfigRulesCloudConfigurationRulesList <a name="DataWizCloudConfigRulesCloudConfigurationRulesList" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRulesCloudConfigurationRulesList;

new DataWizCloudConfigRulesCloudConfigurationRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get"></a>

```java
public DataWizCloudConfigRulesCloudConfigurationRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataWizCloudConfigRulesCloudConfigurationRulesOutputReference <a name="DataWizCloudConfigRulesCloudConfigurationRulesOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_config_rules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference;

new DataWizCloudConfigRulesCloudConfigurationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.builtin">builtin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.controlId">controlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.externalReferences">externalReferences</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.functionAsControl">functionAsControl</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.graphId">graphId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.hasAutoRemediation">hasAutoRemediation</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.iacMatcherIds">iacMatcherIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.opaPolicy">opaPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.remediationInstructions">remediationInstructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.scopeAccounts">scopeAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.securitySubCategoryIds">securitySubCategoryIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.shortId">shortId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.subjectEntityType">subjectEntityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.supportsNrt">supportsNrt</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.targetNativeTypes">targetNativeTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules">DataWizCloudConfigRulesCloudConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `builtin`<sup>Required</sup> <a name="builtin" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.builtin"></a>

```java
public IResolvable getBuiltin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.controlId"></a>

```java
public java.lang.String getControlId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `externalReferences`<sup>Required</sup> <a name="externalReferences" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.externalReferences"></a>

```java
public DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList getExternalReferences();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList</a>

---

##### `functionAsControl`<sup>Required</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.functionAsControl"></a>

```java
public IResolvable getFunctionAsControl();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `graphId`<sup>Required</sup> <a name="graphId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.graphId"></a>

```java
public java.lang.String getGraphId();
```

- *Type:* java.lang.String

---

##### `hasAutoRemediation`<sup>Required</sup> <a name="hasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.hasAutoRemediation"></a>

```java
public IResolvable getHasAutoRemediation();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `iacMatcherIds`<sup>Required</sup> <a name="iacMatcherIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.iacMatcherIds"></a>

```java
public java.util.List<java.lang.String> getIacMatcherIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `opaPolicy`<sup>Required</sup> <a name="opaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.opaPolicy"></a>

```java
public java.lang.String getOpaPolicy();
```

- *Type:* java.lang.String

---

##### `remediationInstructions`<sup>Required</sup> <a name="remediationInstructions" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.remediationInstructions"></a>

```java
public java.lang.String getRemediationInstructions();
```

- *Type:* java.lang.String

---

##### `scopeAccounts`<sup>Required</sup> <a name="scopeAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.scopeAccounts"></a>

```java
public java.util.List<java.lang.String> getScopeAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securitySubCategoryIds`<sup>Required</sup> <a name="securitySubCategoryIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.securitySubCategoryIds"></a>

```java
public java.util.List<java.lang.String> getSecuritySubCategoryIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `shortId`<sup>Required</sup> <a name="shortId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.shortId"></a>

```java
public java.lang.String getShortId();
```

- *Type:* java.lang.String

---

##### `subjectEntityType`<sup>Required</sup> <a name="subjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.subjectEntityType"></a>

```java
public java.lang.String getSubjectEntityType();
```

- *Type:* java.lang.String

---

##### `supportsNrt`<sup>Required</sup> <a name="supportsNrt" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.supportsNrt"></a>

```java
public IResolvable getSupportsNrt();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `targetNativeTypes`<sup>Required</sup> <a name="targetNativeTypes" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.targetNativeTypes"></a>

```java
public java.util.List<java.lang.String> getTargetNativeTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.internalValue"></a>

```java
public DataWizCloudConfigRulesCloudConfigurationRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules">DataWizCloudConfigRulesCloudConfigurationRules</a>

---



