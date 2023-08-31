# `data_wiz_cloud_config_rules`

Refer to the Terraform Registory for docs: [`data_wiz_cloud_config_rules`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules).

# `dataWizCloudConfigRules` Submodule <a name="`dataWizCloudConfigRules` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizCloudConfigRules <a name="DataWizCloudConfigRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules wiz_cloud_config_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_config_rules

dataWizCloudConfigRules.DataWizCloudConfigRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_provider: typing.List[str] = None,
  created_by: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  first: typing.Union[int, float] = None,
  framework_category: typing.List[str] = None,
  function_as_control: typing.Union[bool, IResolvable] = None,
  has_auto_remediation: typing.Union[bool, IResolvable] = None,
  has_remediation: typing.Union[bool, IResolvable] = None,
  ids: typing.List[str] = None,
  is_opa_policy: typing.Union[bool, IResolvable] = None,
  matcher_type: typing.List[str] = None,
  project: typing.List[str] = None,
  risk_equals_all: typing.List[str] = None,
  risk_equals_any: typing.List[str] = None,
  scope_account_ids: typing.List[str] = None,
  search: str = None,
  service_type: typing.List[str] = None,
  severity: typing.List[str] = None,
  subject_entity_type: typing.List[str] = None,
  target_native_type: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.cloudProvider">cloud_provider</a></code> | <code>typing.List[str]</code> | Find CSPM rules related to cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.createdBy">created_by</a></code> | <code>typing.List[str]</code> | Search rules by user. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | CSPM Rule enabled status. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.first">first</a></code> | <code>typing.Union[int, float]</code> | How many results to return - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.frameworkCategory">framework_category</a></code> | <code>typing.List[str]</code> | Search rules by any of securityFramework \| securitySubCategory \| securityCategory. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.functionAsControl">function_as_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Search by function as control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.hasAutoRemediation">has_auto_remediation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Rule has auto remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.hasRemediation">has_remediation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Rule has remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.ids">ids</a></code> | <code>typing.List[str]</code> | GetSearch by IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.isOpaPolicy">is_opa_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Search by opaPolicy presence. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.matcherType">matcher_type</a></code> | <code>typing.List[str]</code> | Search rules by target native type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.project">project</a></code> | <code>typing.List[str]</code> | Search by project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.riskEqualsAll">risk_equals_all</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.riskEqualsAny">risk_equals_any</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scopeAccountIds">scope_account_ids</a></code> | <code>typing.List[str]</code> | Find CSPM rules applied on cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.search">search</a></code> | <code>str</code> | Free text search on CSPM name or resource ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.serviceType">service_type</a></code> | <code>typing.List[str]</code> | Find CSPM rules related to the service. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.severity">severity</a></code> | <code>typing.List[str]</code> | CSPM Rule severity. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.subjectEntityType">subject_entity_type</a></code> | <code>typing.List[str]</code> | Find rules by their entity type subject. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.targetNativeType">target_native_type</a></code> | <code>typing.List[str]</code> | Search rules by target native type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_provider`<sup>Optional</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.cloudProvider"></a>

- *Type:* typing.List[str]

Find CSPM rules related to cloud provider.

* Allowed values:

  * GCP
  * AWS
  * Azure
  * OCI
  * Alibaba
  * vSphere
  * OpenShift
  * Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#cloud_provider DataWizCloudConfigRules#cloud_provider}

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.createdBy"></a>

- *Type:* typing.List[str]

Search rules by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#created_by DataWizCloudConfigRules#created_by}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

CSPM Rule enabled status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#enabled DataWizCloudConfigRules#enabled}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.first"></a>

- *Type:* typing.Union[int, float]

How many results to return - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#first DataWizCloudConfigRules#first}

---

##### `framework_category`<sup>Optional</sup> <a name="framework_category" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.frameworkCategory"></a>

- *Type:* typing.List[str]

Search rules by any of securityFramework | securitySubCategory | securityCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#framework_category DataWizCloudConfigRules#framework_category}

---

##### `function_as_control`<sup>Optional</sup> <a name="function_as_control" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.functionAsControl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Search by function as control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#function_as_control DataWizCloudConfigRules#function_as_control}

---

##### `has_auto_remediation`<sup>Optional</sup> <a name="has_auto_remediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.hasAutoRemediation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Rule has auto remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#has_auto_remediation DataWizCloudConfigRules#has_auto_remediation}

---

##### `has_remediation`<sup>Optional</sup> <a name="has_remediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.hasRemediation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Rule has remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#has_remediation DataWizCloudConfigRules#has_remediation}

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.ids"></a>

- *Type:* typing.List[str]

GetSearch by IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#ids DataWizCloudConfigRules#ids}

---

##### `is_opa_policy`<sup>Optional</sup> <a name="is_opa_policy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.isOpaPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Search by opaPolicy presence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#is_opa_policy DataWizCloudConfigRules#is_opa_policy}

---

##### `matcher_type`<sup>Optional</sup> <a name="matcher_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.matcherType"></a>

- *Type:* typing.List[str]

Search rules by target native type.

* Allowed values:

  * CLOUD
  * TERRAFORM
  * CLOUD_FORMATION
  * KUBERNETES
  * AZURE_RESOURCE_MANAGER
  * DOCKER_FILE
  * ADMISSION_CONTROLLER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#matcher_type DataWizCloudConfigRules#matcher_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.project"></a>

- *Type:* typing.List[str]

Search by project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#project DataWizCloudConfigRules#project}

---

##### `risk_equals_all`<sup>Optional</sup> <a name="risk_equals_all" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.riskEqualsAll"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}.

---

##### `risk_equals_any`<sup>Optional</sup> <a name="risk_equals_any" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.riskEqualsAny"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}.

---

##### `scope_account_ids`<sup>Optional</sup> <a name="scope_account_ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scopeAccountIds"></a>

- *Type:* typing.List[str]

Find CSPM rules applied on cloud account IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#scope_account_ids DataWizCloudConfigRules#scope_account_ids}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.search"></a>

- *Type:* str

Free text search on CSPM name or resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#search DataWizCloudConfigRules#search}

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.serviceType"></a>

- *Type:* typing.List[str]

Find CSPM rules related to the service.

* Allowed values:

  * AWS
  * Azure
  * GCP
  * OCI
  * Alibaba
  * AKS
  * EKS
  * GKE
  * Kubernetes
  * OKE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#service_type DataWizCloudConfigRules#service_type}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.severity"></a>

- *Type:* typing.List[str]

CSPM Rule severity.

* Allowed values:

  * INFORMATIONAL
  * LOW
  * MEDIUM
  * HIGH
  * CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#severity DataWizCloudConfigRules#severity}

---

##### `subject_entity_type`<sup>Optional</sup> <a name="subject_entity_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.subjectEntityType"></a>

- *Type:* typing.List[str]

Find rules by their entity type subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#subject_entity_type DataWizCloudConfigRules#subject_entity_type}

---

##### `target_native_type`<sup>Optional</sup> <a name="target_native_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.targetNativeType"></a>

- *Type:* typing.List[str]

Search rules by target native type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#target_native_type DataWizCloudConfigRules#target_native_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCloudProvider">reset_cloud_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFrameworkCategory">reset_framework_category</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFunctionAsControl">reset_function_as_control</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasAutoRemediation">reset_has_auto_remediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasRemediation">reset_has_remediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIds">reset_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIsOpaPolicy">reset_is_opa_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetMatcherType">reset_matcher_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAll">reset_risk_equals_all</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAny">reset_risk_equals_any</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetScopeAccountIds">reset_scope_account_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetServiceType">reset_service_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSeverity">reset_severity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSubjectEntityType">reset_subject_entity_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetTargetNativeType">reset_target_native_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cloud_provider` <a name="reset_cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCloudProvider"></a>

```python
def reset_cloud_provider() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_first` <a name="reset_first" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_framework_category` <a name="reset_framework_category" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFrameworkCategory"></a>

```python
def reset_framework_category() -> None
```

##### `reset_function_as_control` <a name="reset_function_as_control" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFunctionAsControl"></a>

```python
def reset_function_as_control() -> None
```

##### `reset_has_auto_remediation` <a name="reset_has_auto_remediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasAutoRemediation"></a>

```python
def reset_has_auto_remediation() -> None
```

##### `reset_has_remediation` <a name="reset_has_remediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasRemediation"></a>

```python
def reset_has_remediation() -> None
```

##### `reset_ids` <a name="reset_ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIds"></a>

```python
def reset_ids() -> None
```

##### `reset_is_opa_policy` <a name="reset_is_opa_policy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIsOpaPolicy"></a>

```python
def reset_is_opa_policy() -> None
```

##### `reset_matcher_type` <a name="reset_matcher_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetMatcherType"></a>

```python
def reset_matcher_type() -> None
```

##### `reset_project` <a name="reset_project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_risk_equals_all` <a name="reset_risk_equals_all" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAll"></a>

```python
def reset_risk_equals_all() -> None
```

##### `reset_risk_equals_any` <a name="reset_risk_equals_any" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAny"></a>

```python
def reset_risk_equals_any() -> None
```

##### `reset_scope_account_ids` <a name="reset_scope_account_ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetScopeAccountIds"></a>

```python
def reset_scope_account_ids() -> None
```

##### `reset_search` <a name="reset_search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_service_type` <a name="reset_service_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetServiceType"></a>

```python
def reset_service_type() -> None
```

##### `reset_severity` <a name="reset_severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSeverity"></a>

```python
def reset_severity() -> None
```

##### `reset_subject_entity_type` <a name="reset_subject_entity_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSubjectEntityType"></a>

```python
def reset_subject_entity_type() -> None
```

##### `reset_target_native_type` <a name="reset_target_native_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetTargetNativeType"></a>

```python
def reset_target_native_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_config_rules

dataWizCloudConfigRules.DataWizCloudConfigRules.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_config_rules

dataWizCloudConfigRules.DataWizCloudConfigRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_config_rules

dataWizCloudConfigRules.DataWizCloudConfigRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudConfigurationRules">cloud_configuration_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList">DataWizCloudConfigRulesCloudConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProviderInput">cloud_provider_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdByInput">created_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategoryInput">framework_category_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControlInput">function_as_control_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediationInput">has_auto_remediation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediationInput">has_remediation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.idsInput">ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicyInput">is_opa_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherTypeInput">matcher_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.projectInput">project_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAllInput">risk_equals_all_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAnyInput">risk_equals_any_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIdsInput">scope_account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceTypeInput">service_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severityInput">severity_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityTypeInput">subject_entity_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeTypeInput">target_native_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProvider">cloud_provider</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdBy">created_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategory">framework_category</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControl">function_as_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediation">has_auto_remediation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediation">has_remediation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicy">is_opa_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherType">matcher_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.project">project</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAll">risk_equals_all</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAny">risk_equals_any</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIds">scope_account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceType">service_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severity">severity</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityType">subject_entity_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeType">target_native_type</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cloud_configuration_rules`<sup>Required</sup> <a name="cloud_configuration_rules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudConfigurationRules"></a>

```python
cloud_configuration_rules: DataWizCloudConfigRulesCloudConfigurationRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList">DataWizCloudConfigRulesCloudConfigurationRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `cloud_provider_input`<sup>Optional</sup> <a name="cloud_provider_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProviderInput"></a>

```python
cloud_provider_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdByInput"></a>

```python
created_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `framework_category_input`<sup>Optional</sup> <a name="framework_category_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategoryInput"></a>

```python
framework_category_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_as_control_input`<sup>Optional</sup> <a name="function_as_control_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControlInput"></a>

```python
function_as_control_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_auto_remediation_input`<sup>Optional</sup> <a name="has_auto_remediation_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediationInput"></a>

```python
has_auto_remediation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_remediation_input`<sup>Optional</sup> <a name="has_remediation_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediationInput"></a>

```python
has_remediation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ids_input`<sup>Optional</sup> <a name="ids_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.idsInput"></a>

```python
ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_opa_policy_input`<sup>Optional</sup> <a name="is_opa_policy_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicyInput"></a>

```python
is_opa_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `matcher_type_input`<sup>Optional</sup> <a name="matcher_type_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherTypeInput"></a>

```python
matcher_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.projectInput"></a>

```python
project_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `risk_equals_all_input`<sup>Optional</sup> <a name="risk_equals_all_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAllInput"></a>

```python
risk_equals_all_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `risk_equals_any_input`<sup>Optional</sup> <a name="risk_equals_any_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAnyInput"></a>

```python
risk_equals_any_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_account_ids_input`<sup>Optional</sup> <a name="scope_account_ids_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIdsInput"></a>

```python
scope_account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceTypeInput"></a>

```python
service_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severityInput"></a>

```python
severity_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_entity_type_input`<sup>Optional</sup> <a name="subject_entity_type_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityTypeInput"></a>

```python
subject_entity_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_native_type_input`<sup>Optional</sup> <a name="target_native_type_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeTypeInput"></a>

```python
target_native_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProvider"></a>

```python
cloud_provider: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdBy"></a>

```python
created_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `framework_category`<sup>Required</sup> <a name="framework_category" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategory"></a>

```python
framework_category: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_as_control`<sup>Required</sup> <a name="function_as_control" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControl"></a>

```python
function_as_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_auto_remediation`<sup>Required</sup> <a name="has_auto_remediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediation"></a>

```python
has_auto_remediation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_remediation`<sup>Required</sup> <a name="has_remediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediation"></a>

```python
has_remediation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ids`<sup>Required</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_opa_policy`<sup>Required</sup> <a name="is_opa_policy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicy"></a>

```python
is_opa_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `matcher_type`<sup>Required</sup> <a name="matcher_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherType"></a>

```python
matcher_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.project"></a>

```python
project: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `risk_equals_all`<sup>Required</sup> <a name="risk_equals_all" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAll"></a>

```python
risk_equals_all: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `risk_equals_any`<sup>Required</sup> <a name="risk_equals_any" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAny"></a>

```python
risk_equals_any: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_account_ids`<sup>Required</sup> <a name="scope_account_ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIds"></a>

```python
scope_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceType"></a>

```python
service_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severity"></a>

```python
severity: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_entity_type`<sup>Required</sup> <a name="subject_entity_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityType"></a>

```python
subject_entity_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_native_type`<sup>Required</sup> <a name="target_native_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeType"></a>

```python
target_native_type: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizCloudConfigRulesCloudConfigurationRules <a name="DataWizCloudConfigRulesCloudConfigurationRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_config_rules

dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules()
```


### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_config_rules

dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences()
```


### DataWizCloudConfigRulesConfig <a name="DataWizCloudConfigRulesConfig" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_config_rules

dataWizCloudConfigRules.DataWizCloudConfigRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_provider: typing.List[str] = None,
  created_by: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  first: typing.Union[int, float] = None,
  framework_category: typing.List[str] = None,
  function_as_control: typing.Union[bool, IResolvable] = None,
  has_auto_remediation: typing.Union[bool, IResolvable] = None,
  has_remediation: typing.Union[bool, IResolvable] = None,
  ids: typing.List[str] = None,
  is_opa_policy: typing.Union[bool, IResolvable] = None,
  matcher_type: typing.List[str] = None,
  project: typing.List[str] = None,
  risk_equals_all: typing.List[str] = None,
  risk_equals_any: typing.List[str] = None,
  scope_account_ids: typing.List[str] = None,
  search: str = None,
  service_type: typing.List[str] = None,
  severity: typing.List[str] = None,
  subject_entity_type: typing.List[str] = None,
  target_native_type: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.cloudProvider">cloud_provider</a></code> | <code>typing.List[str]</code> | Find CSPM rules related to cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.createdBy">created_by</a></code> | <code>typing.List[str]</code> | Search rules by user. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | CSPM Rule enabled status. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.first">first</a></code> | <code>typing.Union[int, float]</code> | How many results to return - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.frameworkCategory">framework_category</a></code> | <code>typing.List[str]</code> | Search rules by any of securityFramework \| securitySubCategory \| securityCategory. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.functionAsControl">function_as_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Search by function as control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasAutoRemediation">has_auto_remediation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Rule has auto remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasRemediation">has_remediation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Rule has remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.ids">ids</a></code> | <code>typing.List[str]</code> | GetSearch by IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.isOpaPolicy">is_opa_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Search by opaPolicy presence. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.matcherType">matcher_type</a></code> | <code>typing.List[str]</code> | Search rules by target native type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.project">project</a></code> | <code>typing.List[str]</code> | Search by project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAll">risk_equals_all</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAny">risk_equals_any</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.scopeAccountIds">scope_account_ids</a></code> | <code>typing.List[str]</code> | Find CSPM rules applied on cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.search">search</a></code> | <code>str</code> | Free text search on CSPM name or resource ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.serviceType">service_type</a></code> | <code>typing.List[str]</code> | Find CSPM rules related to the service. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.severity">severity</a></code> | <code>typing.List[str]</code> | CSPM Rule severity. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.subjectEntityType">subject_entity_type</a></code> | <code>typing.List[str]</code> | Find rules by their entity type subject. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.targetNativeType">target_native_type</a></code> | <code>typing.List[str]</code> | Search rules by target native type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_provider`<sup>Optional</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.cloudProvider"></a>

```python
cloud_provider: typing.List[str]
```

- *Type:* typing.List[str]

Find CSPM rules related to cloud provider.

* Allowed values:

  * GCP
  * AWS
  * Azure
  * OCI
  * Alibaba
  * vSphere
  * OpenShift
  * Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#cloud_provider DataWizCloudConfigRules#cloud_provider}

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.createdBy"></a>

```python
created_by: typing.List[str]
```

- *Type:* typing.List[str]

Search rules by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#created_by DataWizCloudConfigRules#created_by}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

CSPM Rule enabled status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#enabled DataWizCloudConfigRules#enabled}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many results to return - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#first DataWizCloudConfigRules#first}

---

##### `framework_category`<sup>Optional</sup> <a name="framework_category" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.frameworkCategory"></a>

```python
framework_category: typing.List[str]
```

- *Type:* typing.List[str]

Search rules by any of securityFramework | securitySubCategory | securityCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#framework_category DataWizCloudConfigRules#framework_category}

---

##### `function_as_control`<sup>Optional</sup> <a name="function_as_control" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.functionAsControl"></a>

```python
function_as_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Search by function as control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#function_as_control DataWizCloudConfigRules#function_as_control}

---

##### `has_auto_remediation`<sup>Optional</sup> <a name="has_auto_remediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasAutoRemediation"></a>

```python
has_auto_remediation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Rule has auto remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#has_auto_remediation DataWizCloudConfigRules#has_auto_remediation}

---

##### `has_remediation`<sup>Optional</sup> <a name="has_remediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasRemediation"></a>

```python
has_remediation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Rule has remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#has_remediation DataWizCloudConfigRules#has_remediation}

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

GetSearch by IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#ids DataWizCloudConfigRules#ids}

---

##### `is_opa_policy`<sup>Optional</sup> <a name="is_opa_policy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.isOpaPolicy"></a>

```python
is_opa_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Search by opaPolicy presence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#is_opa_policy DataWizCloudConfigRules#is_opa_policy}

---

##### `matcher_type`<sup>Optional</sup> <a name="matcher_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.matcherType"></a>

```python
matcher_type: typing.List[str]
```

- *Type:* typing.List[str]

Search rules by target native type.

* Allowed values:

  * CLOUD
  * TERRAFORM
  * CLOUD_FORMATION
  * KUBERNETES
  * AZURE_RESOURCE_MANAGER
  * DOCKER_FILE
  * ADMISSION_CONTROLLER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#matcher_type DataWizCloudConfigRules#matcher_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.project"></a>

```python
project: typing.List[str]
```

- *Type:* typing.List[str]

Search by project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#project DataWizCloudConfigRules#project}

---

##### `risk_equals_all`<sup>Optional</sup> <a name="risk_equals_all" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAll"></a>

```python
risk_equals_all: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}.

---

##### `risk_equals_any`<sup>Optional</sup> <a name="risk_equals_any" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAny"></a>

```python
risk_equals_any: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}.

---

##### `scope_account_ids`<sup>Optional</sup> <a name="scope_account_ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.scopeAccountIds"></a>

```python
scope_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

Find CSPM rules applied on cloud account IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#scope_account_ids DataWizCloudConfigRules#scope_account_ids}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Free text search on CSPM name or resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#search DataWizCloudConfigRules#search}

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.serviceType"></a>

```python
service_type: typing.List[str]
```

- *Type:* typing.List[str]

Find CSPM rules related to the service.

* Allowed values:

  * AWS
  * Azure
  * GCP
  * OCI
  * Alibaba
  * AKS
  * EKS
  * GKE
  * Kubernetes
  * OKE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#service_type DataWizCloudConfigRules#service_type}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.severity"></a>

```python
severity: typing.List[str]
```

- *Type:* typing.List[str]

CSPM Rule severity.

* Allowed values:

  * INFORMATIONAL
  * LOW
  * MEDIUM
  * HIGH
  * CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#severity DataWizCloudConfigRules#severity}

---

##### `subject_entity_type`<sup>Optional</sup> <a name="subject_entity_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.subjectEntityType"></a>

```python
subject_entity_type: typing.List[str]
```

- *Type:* typing.List[str]

Find rules by their entity type subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#subject_entity_type DataWizCloudConfigRules#subject_entity_type}

---

##### `target_native_type`<sup>Optional</sup> <a name="target_native_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.targetNativeType"></a>

```python
target_native_type: typing.List[str]
```

- *Type:* typing.List[str]

Search rules by target native type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#target_native_type DataWizCloudConfigRules#target_native_type}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_config_rules

dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_config_rules

dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.internalValue"></a>

```python
internal_value: DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences</a>

---


### DataWizCloudConfigRulesCloudConfigurationRulesList <a name="DataWizCloudConfigRulesCloudConfigurationRulesList" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_config_rules

dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataWizCloudConfigRulesCloudConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataWizCloudConfigRulesCloudConfigurationRulesOutputReference <a name="DataWizCloudConfigRulesCloudConfigurationRulesOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_config_rules

dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.builtin">builtin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.controlId">control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.externalReferences">external_references</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.functionAsControl">function_as_control</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.graphId">graph_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.hasAutoRemediation">has_auto_remediation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.iacMatcherIds">iac_matcher_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.opaPolicy">opa_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.remediationInstructions">remediation_instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.scopeAccounts">scope_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.securitySubCategoryIds">security_sub_category_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.shortId">short_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.subjectEntityType">subject_entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.supportsNrt">supports_nrt</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.targetNativeTypes">target_native_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules">DataWizCloudConfigRulesCloudConfigurationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `builtin`<sup>Required</sup> <a name="builtin" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.builtin"></a>

```python
builtin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `control_id`<sup>Required</sup> <a name="control_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.controlId"></a>

```python
control_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `external_references`<sup>Required</sup> <a name="external_references" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.externalReferences"></a>

```python
external_references: DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList</a>

---

##### `function_as_control`<sup>Required</sup> <a name="function_as_control" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.functionAsControl"></a>

```python
function_as_control: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `graph_id`<sup>Required</sup> <a name="graph_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.graphId"></a>

```python
graph_id: str
```

- *Type:* str

---

##### `has_auto_remediation`<sup>Required</sup> <a name="has_auto_remediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.hasAutoRemediation"></a>

```python
has_auto_remediation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `iac_matcher_ids`<sup>Required</sup> <a name="iac_matcher_ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.iacMatcherIds"></a>

```python
iac_matcher_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opa_policy`<sup>Required</sup> <a name="opa_policy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.opaPolicy"></a>

```python
opa_policy: str
```

- *Type:* str

---

##### `remediation_instructions`<sup>Required</sup> <a name="remediation_instructions" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.remediationInstructions"></a>

```python
remediation_instructions: str
```

- *Type:* str

---

##### `scope_accounts`<sup>Required</sup> <a name="scope_accounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.scopeAccounts"></a>

```python
scope_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_sub_category_ids`<sup>Required</sup> <a name="security_sub_category_ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.securitySubCategoryIds"></a>

```python
security_sub_category_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `short_id`<sup>Required</sup> <a name="short_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.shortId"></a>

```python
short_id: str
```

- *Type:* str

---

##### `subject_entity_type`<sup>Required</sup> <a name="subject_entity_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.subjectEntityType"></a>

```python
subject_entity_type: str
```

- *Type:* str

---

##### `supports_nrt`<sup>Required</sup> <a name="supports_nrt" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.supportsNrt"></a>

```python
supports_nrt: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `target_native_types`<sup>Required</sup> <a name="target_native_types" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.targetNativeTypes"></a>

```python
target_native_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataWizCloudConfigRulesCloudConfigurationRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules">DataWizCloudConfigRulesCloudConfigurationRules</a>

---



