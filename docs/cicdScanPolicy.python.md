# `wiz_cicd_scan_policy`

Refer to the Terraform Registory for docs: [`wiz_cicd_scan_policy`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy).

# `cicdScanPolicy` Submodule <a name="`cicdScanPolicy` Submodule" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CicdScanPolicy <a name="CicdScanPolicy" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy wiz_cicd_scan_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  disk_secrets_params: CicdScanPolicyDiskSecretsParams = None,
  disk_vulnerabilities_params: CicdScanPolicyDiskVulnerabilitiesParams = None,
  iac_params: CicdScanPolicyIacParams = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.diskSecretsParams">disk_secrets_params</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | disk_secrets_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.diskVulnerabilitiesParams">disk_vulnerabilities_params</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | disk_vulnerabilities_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.iacParams">iac_params</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | iac_params block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#name CicdScanPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.description"></a>

- *Type:* str

Description of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#description CicdScanPolicy#description}

---

##### `disk_secrets_params`<sup>Optional</sup> <a name="disk_secrets_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.diskSecretsParams"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

disk_secrets_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#disk_secrets_params CicdScanPolicy#disk_secrets_params}

---

##### `disk_vulnerabilities_params`<sup>Optional</sup> <a name="disk_vulnerabilities_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.diskVulnerabilitiesParams"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

disk_vulnerabilities_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#disk_vulnerabilities_params CicdScanPolicy#disk_vulnerabilities_params}

---

##### `iac_params`<sup>Optional</sup> <a name="iac_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.iacParams"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

iac_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#iac_params CicdScanPolicy#iac_params}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams">put_disk_secrets_params</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams">put_disk_vulnerabilities_params</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams">put_iac_params</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskSecretsParams">reset_disk_secrets_params</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskVulnerabilitiesParams">reset_disk_vulnerabilities_params</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetIacParams">reset_iac_params</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_disk_secrets_params` <a name="put_disk_secrets_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams"></a>

```python
def put_disk_secrets_params(
  count_threshold: typing.Union[int, float],
  path_allow_list: typing.List[str] = None
) -> None
```

###### `count_threshold`<sup>Required</sup> <a name="count_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams.parameter.countThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

###### `path_allow_list`<sup>Optional</sup> <a name="path_allow_list" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams.parameter.pathAllowList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}.

---

##### `put_disk_vulnerabilities_params` <a name="put_disk_vulnerabilities_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams"></a>

```python
def put_disk_vulnerabilities_params(
  ignore_unfixed: typing.Union[bool, IResolvable],
  package_allow_list: typing.List[str],
  package_count_threshold: typing.Union[int, float],
  severity: str
) -> None
```

###### `ignore_unfixed`<sup>Required</sup> <a name="ignore_unfixed" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams.parameter.ignoreUnfixed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}.

---

###### `package_allow_list`<sup>Required</sup> <a name="package_allow_list" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams.parameter.packageAllowList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}.

---

###### `package_count_threshold`<sup>Required</sup> <a name="package_count_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams.parameter.packageCountThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}.

---

###### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams.parameter.severity"></a>

- *Type:* str

Severity.

* Allowed values:

  * INFORMATIONAL
  * LOW
  * MEDIUM
  * HIGH
  * CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#severity CicdScanPolicy#severity}

---

##### `put_iac_params` <a name="put_iac_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams"></a>

```python
def put_iac_params(
  count_threshold: typing.Union[int, float],
  severity_threshold: str,
  builtin_ignore_tags_enabled: typing.Union[bool, IResolvable] = None,
  custom_ignore_tags: typing.Union[IResolvable, typing.List[CicdScanPolicyIacParamsCustomIgnoreTags]] = None,
  ignored_rules: typing.List[str] = None,
  security_frameworks: typing.List[str] = None
) -> None
```

###### `count_threshold`<sup>Required</sup> <a name="count_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams.parameter.countThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

###### `severity_threshold`<sup>Required</sup> <a name="severity_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams.parameter.severityThreshold"></a>

- *Type:* str

Severity threshold.

* Allowed values:

  * INFORMATIONAL
  * LOW
  * MEDIUM
  * HIGH
  * CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#severity_threshold CicdScanPolicy#severity_threshold}

---

###### `builtin_ignore_tags_enabled`<sup>Optional</sup> <a name="builtin_ignore_tags_enabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams.parameter.builtinIgnoreTagsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}.

---

###### `custom_ignore_tags`<sup>Optional</sup> <a name="custom_ignore_tags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams.parameter.customIgnoreTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>]]

custom_ignore_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#custom_ignore_tags CicdScanPolicy#custom_ignore_tags}

---

###### `ignored_rules`<sup>Optional</sup> <a name="ignored_rules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams.parameter.ignoredRules"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}.

---

###### `security_frameworks`<sup>Optional</sup> <a name="security_frameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams.parameter.securityFrameworks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}.

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk_secrets_params` <a name="reset_disk_secrets_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskSecretsParams"></a>

```python
def reset_disk_secrets_params() -> None
```

##### `reset_disk_vulnerabilities_params` <a name="reset_disk_vulnerabilities_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskVulnerabilitiesParams"></a>

```python
def reset_disk_vulnerabilities_params() -> None
```

##### `reset_iac_params` <a name="reset_iac_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetIacParams"></a>

```python
def reset_iac_params() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.builtin">builtin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParams">disk_secrets_params</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference">CicdScanPolicyDiskSecretsParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParams">disk_vulnerabilities_params</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference">CicdScanPolicyDiskVulnerabilitiesParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParams">iac_params</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference">CicdScanPolicyIacParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParamsInput">disk_secrets_params_input</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParamsInput">disk_vulnerabilities_params_input</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParamsInput">iac_params_input</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `builtin`<sup>Required</sup> <a name="builtin" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.builtin"></a>

```python
builtin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disk_secrets_params`<sup>Required</sup> <a name="disk_secrets_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParams"></a>

```python
disk_secrets_params: CicdScanPolicyDiskSecretsParamsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference">CicdScanPolicyDiskSecretsParamsOutputReference</a>

---

##### `disk_vulnerabilities_params`<sup>Required</sup> <a name="disk_vulnerabilities_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParams"></a>

```python
disk_vulnerabilities_params: CicdScanPolicyDiskVulnerabilitiesParamsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference">CicdScanPolicyDiskVulnerabilitiesParamsOutputReference</a>

---

##### `iac_params`<sup>Required</sup> <a name="iac_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParams"></a>

```python
iac_params: CicdScanPolicyIacParamsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference">CicdScanPolicyIacParamsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_secrets_params_input`<sup>Optional</sup> <a name="disk_secrets_params_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParamsInput"></a>

```python
disk_secrets_params_input: CicdScanPolicyDiskSecretsParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---

##### `disk_vulnerabilities_params_input`<sup>Optional</sup> <a name="disk_vulnerabilities_params_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParamsInput"></a>

```python
disk_vulnerabilities_params_input: CicdScanPolicyDiskVulnerabilitiesParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---

##### `iac_params_input`<sup>Optional</sup> <a name="iac_params_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParamsInput"></a>

```python
iac_params_input: CicdScanPolicyIacParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CicdScanPolicyConfig <a name="CicdScanPolicyConfig" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  disk_secrets_params: CicdScanPolicyDiskSecretsParams = None,
  disk_vulnerabilities_params: CicdScanPolicyDiskVulnerabilitiesParams = None,
  iac_params: CicdScanPolicyIacParams = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.description">description</a></code> | <code>str</code> | Description of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskSecretsParams">disk_secrets_params</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | disk_secrets_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskVulnerabilitiesParams">disk_vulnerabilities_params</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | disk_vulnerabilities_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.iacParams">iac_params</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | iac_params block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#name CicdScanPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#description CicdScanPolicy#description}

---

##### `disk_secrets_params`<sup>Optional</sup> <a name="disk_secrets_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskSecretsParams"></a>

```python
disk_secrets_params: CicdScanPolicyDiskSecretsParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

disk_secrets_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#disk_secrets_params CicdScanPolicy#disk_secrets_params}

---

##### `disk_vulnerabilities_params`<sup>Optional</sup> <a name="disk_vulnerabilities_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskVulnerabilitiesParams"></a>

```python
disk_vulnerabilities_params: CicdScanPolicyDiskVulnerabilitiesParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

disk_vulnerabilities_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#disk_vulnerabilities_params CicdScanPolicy#disk_vulnerabilities_params}

---

##### `iac_params`<sup>Optional</sup> <a name="iac_params" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.iacParams"></a>

```python
iac_params: CicdScanPolicyIacParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

iac_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#iac_params CicdScanPolicy#iac_params}

---

### CicdScanPolicyDiskSecretsParams <a name="CicdScanPolicyDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicyDiskSecretsParams(
  count_threshold: typing.Union[int, float],
  path_allow_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.countThreshold">count_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.pathAllowList">path_allow_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}. |

---

##### `count_threshold`<sup>Required</sup> <a name="count_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.countThreshold"></a>

```python
count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

##### `path_allow_list`<sup>Optional</sup> <a name="path_allow_list" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.pathAllowList"></a>

```python
path_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}.

---

### CicdScanPolicyDiskVulnerabilitiesParams <a name="CicdScanPolicyDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams(
  ignore_unfixed: typing.Union[bool, IResolvable],
  package_allow_list: typing.List[str],
  package_count_threshold: typing.Union[int, float],
  severity: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.ignoreUnfixed">ignore_unfixed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageAllowList">package_allow_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageCountThreshold">package_count_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.severity">severity</a></code> | <code>str</code> | Severity. |

---

##### `ignore_unfixed`<sup>Required</sup> <a name="ignore_unfixed" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.ignoreUnfixed"></a>

```python
ignore_unfixed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}.

---

##### `package_allow_list`<sup>Required</sup> <a name="package_allow_list" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageAllowList"></a>

```python
package_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}.

---

##### `package_count_threshold`<sup>Required</sup> <a name="package_count_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageCountThreshold"></a>

```python
package_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.severity"></a>

```python
severity: str
```

- *Type:* str

Severity.

* Allowed values:

  * INFORMATIONAL
  * LOW
  * MEDIUM
  * HIGH
  * CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#severity CicdScanPolicy#severity}

---

### CicdScanPolicyIacParams <a name="CicdScanPolicyIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicyIacParams(
  count_threshold: typing.Union[int, float],
  severity_threshold: str,
  builtin_ignore_tags_enabled: typing.Union[bool, IResolvable] = None,
  custom_ignore_tags: typing.Union[IResolvable, typing.List[CicdScanPolicyIacParamsCustomIgnoreTags]] = None,
  ignored_rules: typing.List[str] = None,
  security_frameworks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.countThreshold">count_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.severityThreshold">severity_threshold</a></code> | <code>str</code> | Severity threshold. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.builtinIgnoreTagsEnabled">builtin_ignore_tags_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.customIgnoreTags">custom_ignore_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>]]</code> | custom_ignore_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.ignoredRules">ignored_rules</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.securityFrameworks">security_frameworks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}. |

---

##### `count_threshold`<sup>Required</sup> <a name="count_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.countThreshold"></a>

```python
count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

##### `severity_threshold`<sup>Required</sup> <a name="severity_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.severityThreshold"></a>

```python
severity_threshold: str
```

- *Type:* str

Severity threshold.

* Allowed values:

  * INFORMATIONAL
  * LOW
  * MEDIUM
  * HIGH
  * CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#severity_threshold CicdScanPolicy#severity_threshold}

---

##### `builtin_ignore_tags_enabled`<sup>Optional</sup> <a name="builtin_ignore_tags_enabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.builtinIgnoreTagsEnabled"></a>

```python
builtin_ignore_tags_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}.

---

##### `custom_ignore_tags`<sup>Optional</sup> <a name="custom_ignore_tags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.customIgnoreTags"></a>

```python
custom_ignore_tags: typing.Union[IResolvable, typing.List[CicdScanPolicyIacParamsCustomIgnoreTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>]]

custom_ignore_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#custom_ignore_tags CicdScanPolicy#custom_ignore_tags}

---

##### `ignored_rules`<sup>Optional</sup> <a name="ignored_rules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.ignoredRules"></a>

```python
ignored_rules: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}.

---

##### `security_frameworks`<sup>Optional</sup> <a name="security_frameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.securityFrameworks"></a>

```python
security_frameworks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}.

---

### CicdScanPolicyIacParamsCustomIgnoreTags <a name="CicdScanPolicyIacParamsCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags(
  key: str,
  value: str,
  ignore_all_rules: typing.Union[bool, IResolvable] = None,
  rule_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#key CicdScanPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#value CicdScanPolicy#value}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ignoreAllRules">ignore_all_rules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignore_all_rules CicdScanPolicy#ignore_all_rules}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ruleIds">rule_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#rule_ids CicdScanPolicy#rule_ids}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#key CicdScanPolicy#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#value CicdScanPolicy#value}.

---

##### `ignore_all_rules`<sup>Optional</sup> <a name="ignore_all_rules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ignoreAllRules"></a>

```python
ignore_all_rules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignore_all_rules CicdScanPolicy#ignore_all_rules}.

---

##### `rule_ids`<sup>Optional</sup> <a name="rule_ids" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ruleIds"></a>

```python
rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#rule_ids CicdScanPolicy#rule_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### CicdScanPolicyDiskSecretsParamsOutputReference <a name="CicdScanPolicyDiskSecretsParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resetPathAllowList">reset_path_allow_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path_allow_list` <a name="reset_path_allow_list" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resetPathAllowList"></a>

```python
def reset_path_allow_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThresholdInput">count_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowListInput">path_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThreshold">count_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowList">path_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_threshold_input`<sup>Optional</sup> <a name="count_threshold_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThresholdInput"></a>

```python
count_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_allow_list_input`<sup>Optional</sup> <a name="path_allow_list_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowListInput"></a>

```python
path_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count_threshold`<sup>Required</sup> <a name="count_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThreshold"></a>

```python
count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_allow_list`<sup>Required</sup> <a name="path_allow_list" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowList"></a>

```python
path_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.internalValue"></a>

```python
internal_value: CicdScanPolicyDiskSecretsParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---


### CicdScanPolicyDiskVulnerabilitiesParamsOutputReference <a name="CicdScanPolicyDiskVulnerabilitiesParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixedInput">ignore_unfixed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowListInput">package_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThresholdInput">package_count_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixed">ignore_unfixed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowList">package_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThreshold">package_count_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ignore_unfixed_input`<sup>Optional</sup> <a name="ignore_unfixed_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixedInput"></a>

```python
ignore_unfixed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `package_allow_list_input`<sup>Optional</sup> <a name="package_allow_list_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowListInput"></a>

```python
package_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `package_count_threshold_input`<sup>Optional</sup> <a name="package_count_threshold_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThresholdInput"></a>

```python
package_count_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `ignore_unfixed`<sup>Required</sup> <a name="ignore_unfixed" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixed"></a>

```python
ignore_unfixed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `package_allow_list`<sup>Required</sup> <a name="package_allow_list" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowList"></a>

```python
package_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `package_count_threshold`<sup>Required</sup> <a name="package_count_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThreshold"></a>

```python
package_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.internalValue"></a>

```python
internal_value: CicdScanPolicyDiskVulnerabilitiesParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---


### CicdScanPolicyIacParamsCustomIgnoreTagsList <a name="CicdScanPolicyIacParamsCustomIgnoreTagsList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CicdScanPolicyIacParamsCustomIgnoreTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>]]

---


### CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference <a name="CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetIgnoreAllRules">reset_ignore_all_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetRuleIds">reset_rule_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_all_rules` <a name="reset_ignore_all_rules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetIgnoreAllRules"></a>

```python
def reset_ignore_all_rules() -> None
```

##### `reset_rule_ids` <a name="reset_rule_ids" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetRuleIds"></a>

```python
def reset_rule_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRulesInput">ignore_all_rules_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIdsInput">rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRules">ignore_all_rules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIds">rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ignore_all_rules_input`<sup>Optional</sup> <a name="ignore_all_rules_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRulesInput"></a>

```python
ignore_all_rules_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `rule_ids_input`<sup>Optional</sup> <a name="rule_ids_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIdsInput"></a>

```python
rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `ignore_all_rules`<sup>Required</sup> <a name="ignore_all_rules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRules"></a>

```python
ignore_all_rules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `rule_ids`<sup>Required</sup> <a name="rule_ids" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIds"></a>

```python
rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CicdScanPolicyIacParamsCustomIgnoreTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>]

---


### CicdScanPolicyIacParamsOutputReference <a name="CicdScanPolicyIacParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cicd_scan_policy

cicdScanPolicy.CicdScanPolicyIacParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags">put_custom_ignore_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetBuiltinIgnoreTagsEnabled">reset_builtin_ignore_tags_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetCustomIgnoreTags">reset_custom_ignore_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetIgnoredRules">reset_ignored_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetSecurityFrameworks">reset_security_frameworks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_ignore_tags` <a name="put_custom_ignore_tags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags"></a>

```python
def put_custom_ignore_tags(
  value: typing.Union[IResolvable, typing.List[CicdScanPolicyIacParamsCustomIgnoreTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>]]

---

##### `reset_builtin_ignore_tags_enabled` <a name="reset_builtin_ignore_tags_enabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetBuiltinIgnoreTagsEnabled"></a>

```python
def reset_builtin_ignore_tags_enabled() -> None
```

##### `reset_custom_ignore_tags` <a name="reset_custom_ignore_tags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetCustomIgnoreTags"></a>

```python
def reset_custom_ignore_tags() -> None
```

##### `reset_ignored_rules` <a name="reset_ignored_rules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetIgnoredRules"></a>

```python
def reset_ignored_rules() -> None
```

##### `reset_security_frameworks` <a name="reset_security_frameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetSecurityFrameworks"></a>

```python
def reset_security_frameworks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTags">custom_ignore_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList">CicdScanPolicyIacParamsCustomIgnoreTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabledInput">builtin_ignore_tags_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThresholdInput">count_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTagsInput">custom_ignore_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRulesInput">ignored_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworksInput">security_frameworks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThresholdInput">severity_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabled">builtin_ignore_tags_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThreshold">count_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRules">ignored_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworks">security_frameworks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThreshold">severity_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_ignore_tags`<sup>Required</sup> <a name="custom_ignore_tags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTags"></a>

```python
custom_ignore_tags: CicdScanPolicyIacParamsCustomIgnoreTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList">CicdScanPolicyIacParamsCustomIgnoreTagsList</a>

---

##### `builtin_ignore_tags_enabled_input`<sup>Optional</sup> <a name="builtin_ignore_tags_enabled_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabledInput"></a>

```python
builtin_ignore_tags_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `count_threshold_input`<sup>Optional</sup> <a name="count_threshold_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThresholdInput"></a>

```python
count_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_ignore_tags_input`<sup>Optional</sup> <a name="custom_ignore_tags_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTagsInput"></a>

```python
custom_ignore_tags_input: typing.Union[IResolvable, typing.List[CicdScanPolicyIacParamsCustomIgnoreTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>]]

---

##### `ignored_rules_input`<sup>Optional</sup> <a name="ignored_rules_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRulesInput"></a>

```python
ignored_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_frameworks_input`<sup>Optional</sup> <a name="security_frameworks_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworksInput"></a>

```python
security_frameworks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severity_threshold_input`<sup>Optional</sup> <a name="severity_threshold_input" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThresholdInput"></a>

```python
severity_threshold_input: str
```

- *Type:* str

---

##### `builtin_ignore_tags_enabled`<sup>Required</sup> <a name="builtin_ignore_tags_enabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabled"></a>

```python
builtin_ignore_tags_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `count_threshold`<sup>Required</sup> <a name="count_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThreshold"></a>

```python
count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignored_rules`<sup>Required</sup> <a name="ignored_rules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRules"></a>

```python
ignored_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_frameworks`<sup>Required</sup> <a name="security_frameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworks"></a>

```python
security_frameworks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severity_threshold`<sup>Required</sup> <a name="severity_threshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThreshold"></a>

```python
severity_threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.internalValue"></a>

```python
internal_value: CicdScanPolicyIacParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---



