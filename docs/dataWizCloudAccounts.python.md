# `data_wiz_cloud_accounts`

Refer to the Terraform Registory for docs: [`data_wiz_cloud_accounts`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts).

# `dataWizCloudAccounts` Submodule <a name="`dataWizCloudAccounts` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizCloudAccounts <a name="DataWizCloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts wiz_cloud_accounts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_accounts

dataWizCloudAccounts.DataWizCloudAccounts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assigned_to_project: typing.Union[bool, IResolvable] = None,
  cloud_provider: typing.List[str] = None,
  connector_id: typing.List[str] = None,
  connector_issue_id: typing.List[str] = None,
  first: typing.Union[int, float] = None,
  has_multiple_connector_sources: typing.Union[bool, IResolvable] = None,
  ids: typing.List[str] = None,
  max_pages: typing.Union[int, float] = None,
  project_id: str = None,
  search: typing.List[str] = None,
  status: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.assignedToProject">assigned_to_project</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.cloudProvider">cloud_provider</a></code> | <code>typing.List[str]</code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connectorId">connector_id</a></code> | <code>typing.List[str]</code> | Query cloud accounts by specific connector ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connectorIssueId">connector_issue_id</a></code> | <code>typing.List[str]</code> | Query cloud accounts by specific connector issue ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.first">first</a></code> | <code>typing.Union[int, float]</code> | How many results to return, maximum is `500` is per page. - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.hasMultipleConnectorSources">has_multiple_connector_sources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.ids">ids</a></code> | <code>typing.List[str]</code> | Get specific Cloud Accounts by their IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.maxPages">max_pages</a></code> | <code>typing.Union[int, float]</code> | How many pages to return. 0 means all pages. - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Query cloud accounts of a specific linked project, given its id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.search">search</a></code> | <code>typing.List[str]</code> | Free text search on cloud account name or tags or external-id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.status">status</a></code> | <code>typing.List[str]</code> | Query cloud accounts by status. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assigned_to_project`<sup>Optional</sup> <a name="assigned_to_project" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.assignedToProject"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#assigned_to_project DataWizCloudAccounts#assigned_to_project}

---

##### `cloud_provider`<sup>Optional</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.cloudProvider"></a>

- *Type:* typing.List[str]

Query cloud accounts of specific cloud provider.

* Allowed values:

  * GCP
  * AWS
  * Azure
  * OCI
  * Alibaba
  * vSphere
  * OpenShift
  * Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#cloud_provider DataWizCloudAccounts#cloud_provider}

---

##### `connector_id`<sup>Optional</sup> <a name="connector_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connectorId"></a>

- *Type:* typing.List[str]

Query cloud accounts by specific connector ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#connector_id DataWizCloudAccounts#connector_id}

---

##### `connector_issue_id`<sup>Optional</sup> <a name="connector_issue_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connectorIssueId"></a>

- *Type:* typing.List[str]

Query cloud accounts by specific connector issue ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#connector_issue_id DataWizCloudAccounts#connector_issue_id}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.first"></a>

- *Type:* typing.Union[int, float]

How many results to return, maximum is `500` is per page. - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#first DataWizCloudAccounts#first}

---

##### `has_multiple_connector_sources`<sup>Optional</sup> <a name="has_multiple_connector_sources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.hasMultipleConnectorSources"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#has_multiple_connector_sources DataWizCloudAccounts#has_multiple_connector_sources}

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.ids"></a>

- *Type:* typing.List[str]

Get specific Cloud Accounts by their IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#ids DataWizCloudAccounts#ids}

---

##### `max_pages`<sup>Optional</sup> <a name="max_pages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.maxPages"></a>

- *Type:* typing.Union[int, float]

How many pages to return. 0 means all pages. - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#max_pages DataWizCloudAccounts#max_pages}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.projectId"></a>

- *Type:* str

Query cloud accounts of a specific linked project, given its id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#project_id DataWizCloudAccounts#project_id}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.search"></a>

- *Type:* typing.List[str]

Free text search on cloud account name or tags or external-id.

Specify list of empty string to return all cloud accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#search DataWizCloudAccounts#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.status"></a>

- *Type:* typing.List[str]

Query cloud accounts by status.

* Allowed values:

  * CONNECTED
  * ERROR
  * DISABLED
  * INITIAL_SCANNING
  * PARTIALLY_CONNECTED
  * DISCONNECTED
  * DISCOVERED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#status DataWizCloudAccounts#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetAssignedToProject">reset_assigned_to_project</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetCloudProvider">reset_cloud_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorId">reset_connector_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorIssueId">reset_connector_issue_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetHasMultipleConnectorSources">reset_has_multiple_connector_sources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetIds">reset_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetMaxPages">reset_max_pages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_assigned_to_project` <a name="reset_assigned_to_project" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetAssignedToProject"></a>

```python
def reset_assigned_to_project() -> None
```

##### `reset_cloud_provider` <a name="reset_cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetCloudProvider"></a>

```python
def reset_cloud_provider() -> None
```

##### `reset_connector_id` <a name="reset_connector_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorId"></a>

```python
def reset_connector_id() -> None
```

##### `reset_connector_issue_id` <a name="reset_connector_issue_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorIssueId"></a>

```python
def reset_connector_issue_id() -> None
```

##### `reset_first` <a name="reset_first" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_has_multiple_connector_sources` <a name="reset_has_multiple_connector_sources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetHasMultipleConnectorSources"></a>

```python
def reset_has_multiple_connector_sources() -> None
```

##### `reset_ids` <a name="reset_ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetIds"></a>

```python
def reset_ids() -> None
```

##### `reset_max_pages` <a name="reset_max_pages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetMaxPages"></a>

```python
def reset_max_pages() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_search` <a name="reset_search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_accounts

dataWizCloudAccounts.DataWizCloudAccounts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_accounts

dataWizCloudAccounts.DataWizCloudAccounts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_accounts

dataWizCloudAccounts.DataWizCloudAccounts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudAccounts">cloud_accounts</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList">DataWizCloudAccountsCloudAccountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProjectInput">assigned_to_project_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProviderInput">cloud_provider_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIdInput">connector_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueIdInput">connector_issue_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSourcesInput">has_multiple_connector_sources_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.idsInput">ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPagesInput">max_pages_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.searchInput">search_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.statusInput">status_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProject">assigned_to_project</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProvider">cloud_provider</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorId">connector_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueId">connector_issue_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSources">has_multiple_connector_sources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPages">max_pages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.search">search</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.status">status</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cloud_accounts`<sup>Required</sup> <a name="cloud_accounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudAccounts"></a>

```python
cloud_accounts: DataWizCloudAccountsCloudAccountsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList">DataWizCloudAccountsCloudAccountsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `assigned_to_project_input`<sup>Optional</sup> <a name="assigned_to_project_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProjectInput"></a>

```python
assigned_to_project_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_provider_input`<sup>Optional</sup> <a name="cloud_provider_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProviderInput"></a>

```python
cloud_provider_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connector_id_input`<sup>Optional</sup> <a name="connector_id_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIdInput"></a>

```python
connector_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connector_issue_id_input`<sup>Optional</sup> <a name="connector_issue_id_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueIdInput"></a>

```python
connector_issue_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `has_multiple_connector_sources_input`<sup>Optional</sup> <a name="has_multiple_connector_sources_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSourcesInput"></a>

```python
has_multiple_connector_sources_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ids_input`<sup>Optional</sup> <a name="ids_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.idsInput"></a>

```python
ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_pages_input`<sup>Optional</sup> <a name="max_pages_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPagesInput"></a>

```python
max_pages_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.searchInput"></a>

```python
search_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.statusInput"></a>

```python
status_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assigned_to_project`<sup>Required</sup> <a name="assigned_to_project" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProject"></a>

```python
assigned_to_project: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProvider"></a>

```python
cloud_provider: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorId"></a>

```python
connector_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connector_issue_id`<sup>Required</sup> <a name="connector_issue_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueId"></a>

```python
connector_issue_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `has_multiple_connector_sources`<sup>Required</sup> <a name="has_multiple_connector_sources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSources"></a>

```python
has_multiple_connector_sources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ids`<sup>Required</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_pages`<sup>Required</sup> <a name="max_pages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPages"></a>

```python
max_pages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.search"></a>

```python
search: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizCloudAccountsCloudAccounts <a name="DataWizCloudAccountsCloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_accounts

dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts()
```


### DataWizCloudAccountsConfig <a name="DataWizCloudAccountsConfig" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_accounts

dataWizCloudAccounts.DataWizCloudAccountsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assigned_to_project: typing.Union[bool, IResolvable] = None,
  cloud_provider: typing.List[str] = None,
  connector_id: typing.List[str] = None,
  connector_issue_id: typing.List[str] = None,
  first: typing.Union[int, float] = None,
  has_multiple_connector_sources: typing.Union[bool, IResolvable] = None,
  ids: typing.List[str] = None,
  max_pages: typing.Union[int, float] = None,
  project_id: str = None,
  search: typing.List[str] = None,
  status: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.assignedToProject">assigned_to_project</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.cloudProvider">cloud_provider</a></code> | <code>typing.List[str]</code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorId">connector_id</a></code> | <code>typing.List[str]</code> | Query cloud accounts by specific connector ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorIssueId">connector_issue_id</a></code> | <code>typing.List[str]</code> | Query cloud accounts by specific connector issue ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.first">first</a></code> | <code>typing.Union[int, float]</code> | How many results to return, maximum is `500` is per page. - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.hasMultipleConnectorSources">has_multiple_connector_sources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.ids">ids</a></code> | <code>typing.List[str]</code> | Get specific Cloud Accounts by their IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.maxPages">max_pages</a></code> | <code>typing.Union[int, float]</code> | How many pages to return. 0 means all pages. - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.projectId">project_id</a></code> | <code>str</code> | Query cloud accounts of a specific linked project, given its id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.search">search</a></code> | <code>typing.List[str]</code> | Free text search on cloud account name or tags or external-id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.status">status</a></code> | <code>typing.List[str]</code> | Query cloud accounts by status. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assigned_to_project`<sup>Optional</sup> <a name="assigned_to_project" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.assignedToProject"></a>

```python
assigned_to_project: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#assigned_to_project DataWizCloudAccounts#assigned_to_project}

---

##### `cloud_provider`<sup>Optional</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.cloudProvider"></a>

```python
cloud_provider: typing.List[str]
```

- *Type:* typing.List[str]

Query cloud accounts of specific cloud provider.

* Allowed values:

  * GCP
  * AWS
  * Azure
  * OCI
  * Alibaba
  * vSphere
  * OpenShift
  * Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#cloud_provider DataWizCloudAccounts#cloud_provider}

---

##### `connector_id`<sup>Optional</sup> <a name="connector_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorId"></a>

```python
connector_id: typing.List[str]
```

- *Type:* typing.List[str]

Query cloud accounts by specific connector ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#connector_id DataWizCloudAccounts#connector_id}

---

##### `connector_issue_id`<sup>Optional</sup> <a name="connector_issue_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorIssueId"></a>

```python
connector_issue_id: typing.List[str]
```

- *Type:* typing.List[str]

Query cloud accounts by specific connector issue ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#connector_issue_id DataWizCloudAccounts#connector_issue_id}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many results to return, maximum is `500` is per page. - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#first DataWizCloudAccounts#first}

---

##### `has_multiple_connector_sources`<sup>Optional</sup> <a name="has_multiple_connector_sources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.hasMultipleConnectorSources"></a>

```python
has_multiple_connector_sources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#has_multiple_connector_sources DataWizCloudAccounts#has_multiple_connector_sources}

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

Get specific Cloud Accounts by their IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#ids DataWizCloudAccounts#ids}

---

##### `max_pages`<sup>Optional</sup> <a name="max_pages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.maxPages"></a>

```python
max_pages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many pages to return. 0 means all pages. - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#max_pages DataWizCloudAccounts#max_pages}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Query cloud accounts of a specific linked project, given its id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#project_id DataWizCloudAccounts#project_id}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.search"></a>

```python
search: typing.List[str]
```

- *Type:* typing.List[str]

Free text search on cloud account name or tags or external-id.

Specify list of empty string to return all cloud accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#search DataWizCloudAccounts#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

Query cloud accounts by status.

* Allowed values:

  * CONNECTED
  * ERROR
  * DISABLED
  * INITIAL_SCANNING
  * PARTIALLY_CONNECTED
  * DISCONNECTED
  * DISCOVERED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#status DataWizCloudAccounts#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizCloudAccountsCloudAccountsList <a name="DataWizCloudAccountsCloudAccountsList" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_accounts

dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataWizCloudAccountsCloudAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataWizCloudAccountsCloudAccountsOutputReference <a name="DataWizCloudAccountsCloudAccountsOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_cloud_accounts

dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.linkedProjectIds">linked_project_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.sourceConnectorIds">source_connector_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts">DataWizCloudAccountsCloudAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_project_ids`<sup>Required</sup> <a name="linked_project_ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.linkedProjectIds"></a>

```python
linked_project_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_connector_ids`<sup>Required</sup> <a name="source_connector_ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.sourceConnectorIds"></a>

```python
source_connector_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.internalValue"></a>

```python
internal_value: DataWizCloudAccountsCloudAccounts
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts">DataWizCloudAccountsCloudAccounts</a>

---



