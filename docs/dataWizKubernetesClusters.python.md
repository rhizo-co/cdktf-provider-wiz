# `dataWizKubernetesClusters` Submodule <a name="`dataWizKubernetesClusters` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizKubernetesClusters <a name="DataWizKubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters wiz_kubernetes_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClusters(
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
  external_ids: typing.List[str] = None,
  first: typing.Union[int, float] = None,
  kind: typing.List[str] = None,
  max_pages: typing.Union[int, float] = None,
  search: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.cloudProvider">cloud_provider</a></code> | <code>typing.List[str]</code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.externalIds">external_ids</a></code> | <code>typing.List[str]</code> | The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.first">first</a></code> | <code>typing.Union[int, float]</code> | How many matches to return, maximum is `500` per page.     - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.kind">kind</a></code> | <code>typing.List[str]</code> | Query Kubernetes Cluster of specific kind(s) or cloud provider(s). |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.maxPages">max_pages</a></code> | <code>typing.Union[int, float]</code> | How many pages to return. 0 means all pages.     - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.search">search</a></code> | <code>str</code> | Free text search. Specify empty string to return all kubernetes clusters. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_provider`<sup>Optional</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.cloudProvider"></a>

- *Type:* typing.List[str]

Query cloud accounts of specific cloud provider.

* Allowed values:
  - GCP
  - AWS
  - Azure
  - OCI
  - Alibaba
  - vSphere
  - OpenShift
  - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#cloud_provider DataWizKubernetesClusters#cloud_provider}

---

##### `external_ids`<sup>Optional</sup> <a name="external_ids" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.externalIds"></a>

- *Type:* typing.List[str]

The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#external_ids DataWizKubernetesClusters#external_ids}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.first"></a>

- *Type:* typing.Union[int, float]

How many matches to return, maximum is `500` per page.     - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#first DataWizKubernetesClusters#first}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.kind"></a>

- *Type:* typing.List[str]

Query Kubernetes Cluster of specific kind(s) or cloud provider(s).

* Allowed values:
  - EKS
  - GKE
  - AKS
  - OKE
  - OPEN_SHIFT
  - SELF_HOSTED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#kind DataWizKubernetesClusters#kind}

---

##### `max_pages`<sup>Optional</sup> <a name="max_pages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.maxPages"></a>

- *Type:* typing.Union[int, float]

How many pages to return. 0 means all pages.     - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#max_pages DataWizKubernetesClusters#max_pages}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.search"></a>

- *Type:* str

Free text search. Specify empty string to return all kubernetes clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#search DataWizKubernetesClusters#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetCloudProvider">reset_cloud_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetExternalIds">reset_external_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetMaxPages">reset_max_pages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetSearch">reset_search</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cloud_provider` <a name="reset_cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetCloudProvider"></a>

```python
def reset_cloud_provider() -> None
```

##### `reset_external_ids` <a name="reset_external_ids" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetExternalIds"></a>

```python
def reset_external_ids() -> None
```

##### `reset_first` <a name="reset_first" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_kind` <a name="reset_kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_max_pages` <a name="reset_max_pages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetMaxPages"></a>

```python
def reset_max_pages() -> None
```

##### `reset_search` <a name="reset_search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetSearch"></a>

```python
def reset_search() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataWizKubernetesClusters resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClusters.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClusters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClusters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClusters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataWizKubernetesClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataWizKubernetesClusters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataWizKubernetesClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataWizKubernetesClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kubernetesClusters">kubernetes_clusters</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList">DataWizKubernetesClustersKubernetesClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProviderInput">cloud_provider_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIdsInput">external_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kindInput">kind_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPagesInput">max_pages_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProvider">cloud_provider</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIds">external_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kind">kind</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPages">max_pages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.search">search</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_clusters`<sup>Required</sup> <a name="kubernetes_clusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kubernetesClusters"></a>

```python
kubernetes_clusters: DataWizKubernetesClustersKubernetesClustersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList">DataWizKubernetesClustersKubernetesClustersList</a>

---

##### `cloud_provider_input`<sup>Optional</sup> <a name="cloud_provider_input" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProviderInput"></a>

```python
cloud_provider_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_ids_input`<sup>Optional</sup> <a name="external_ids_input" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIdsInput"></a>

```python
external_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kindInput"></a>

```python
kind_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_pages_input`<sup>Optional</sup> <a name="max_pages_input" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPagesInput"></a>

```python
max_pages_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProvider"></a>

```python
cloud_provider: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_ids`<sup>Required</sup> <a name="external_ids" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIds"></a>

```python
external_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kind"></a>

```python
kind: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_pages`<sup>Required</sup> <a name="max_pages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPages"></a>

```python
max_pages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.search"></a>

```python
search: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizKubernetesClustersConfig <a name="DataWizKubernetesClustersConfig" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClustersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_provider: typing.List[str] = None,
  external_ids: typing.List[str] = None,
  first: typing.Union[int, float] = None,
  kind: typing.List[str] = None,
  max_pages: typing.Union[int, float] = None,
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.cloudProvider">cloud_provider</a></code> | <code>typing.List[str]</code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.externalIds">external_ids</a></code> | <code>typing.List[str]</code> | The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.first">first</a></code> | <code>typing.Union[int, float]</code> | How many matches to return, maximum is `500` per page.     - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.kind">kind</a></code> | <code>typing.List[str]</code> | Query Kubernetes Cluster of specific kind(s) or cloud provider(s). |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.maxPages">max_pages</a></code> | <code>typing.Union[int, float]</code> | How many pages to return. 0 means all pages.     - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.search">search</a></code> | <code>str</code> | Free text search. Specify empty string to return all kubernetes clusters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_provider`<sup>Optional</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.cloudProvider"></a>

```python
cloud_provider: typing.List[str]
```

- *Type:* typing.List[str]

Query cloud accounts of specific cloud provider.

* Allowed values:
  - GCP
  - AWS
  - Azure
  - OCI
  - Alibaba
  - vSphere
  - OpenShift
  - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#cloud_provider DataWizKubernetesClusters#cloud_provider}

---

##### `external_ids`<sup>Optional</sup> <a name="external_ids" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.externalIds"></a>

```python
external_ids: typing.List[str]
```

- *Type:* typing.List[str]

The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#external_ids DataWizKubernetesClusters#external_ids}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many matches to return, maximum is `500` per page.     - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#first DataWizKubernetesClusters#first}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.kind"></a>

```python
kind: typing.List[str]
```

- *Type:* typing.List[str]

Query Kubernetes Cluster of specific kind(s) or cloud provider(s).

* Allowed values:
  - EKS
  - GKE
  - AKS
  - OKE
  - OPEN_SHIFT
  - SELF_HOSTED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#kind DataWizKubernetesClusters#kind}

---

##### `max_pages`<sup>Optional</sup> <a name="max_pages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.maxPages"></a>

```python
max_pages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many pages to return. 0 means all pages.     - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#max_pages DataWizKubernetesClusters#max_pages}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Free text search. Specify empty string to return all kubernetes clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#search DataWizKubernetesClusters#search}

---

### DataWizKubernetesClustersKubernetesClusters <a name="DataWizKubernetesClustersKubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters()
```


### DataWizKubernetesClustersKubernetesClustersCloudAccount <a name="DataWizKubernetesClustersKubernetesClustersCloudAccount" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount()
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizKubernetesClustersKubernetesClustersCloudAccountList <a name="DataWizKubernetesClustersKubernetesClustersCloudAccountList" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference <a name="DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount">DataWizKubernetesClustersKubernetesClustersCloudAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.internalValue"></a>

```python
internal_value: DataWizKubernetesClustersKubernetesClustersCloudAccount
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount">DataWizKubernetesClustersKubernetesClustersCloudAccount</a>

---


### DataWizKubernetesClustersKubernetesClustersList <a name="DataWizKubernetesClustersKubernetesClustersList" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataWizKubernetesClustersKubernetesClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataWizKubernetesClustersKubernetesClustersOutputReference <a name="DataWizKubernetesClustersKubernetesClustersOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_kubernetes_clusters

dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.cloudAccount">cloud_account</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList">DataWizKubernetesClustersKubernetesClustersCloudAccountList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters">DataWizKubernetesClustersKubernetesClusters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_account`<sup>Required</sup> <a name="cloud_account" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.cloudAccount"></a>

```python
cloud_account: DataWizKubernetesClustersKubernetesClustersCloudAccountList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList">DataWizKubernetesClustersKubernetesClustersCloudAccountList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.internalValue"></a>

```python
internal_value: DataWizKubernetesClustersKubernetesClusters
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters">DataWizKubernetesClustersKubernetesClusters</a>

---



