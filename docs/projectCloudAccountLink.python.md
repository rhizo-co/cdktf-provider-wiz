# `projectCloudAccountLink` Submodule <a name="`projectCloudAccountLink` Submodule" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectCloudAccountLinkA <a name="ProjectCloudAccountLinkA" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link wiz_project_cloud_account_link}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project_cloud_account_link

projectCloudAccountLink.ProjectCloudAccountLinkA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  cloud_account_id: str = None,
  environment: str = None,
  external_cloud_account_id: str = None,
  resource_groups: typing.List[str] = None,
  resource_tags: typing.Union[IResolvable, typing.List[ProjectCloudAccountLinkResourceTagsA]] = None,
  shared: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The Wiz internal identifier of the Wiz project to link the cloud account to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.cloudAccountId">cloud_account_id</a></code> | <code>str</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.externalCloudAccountId">external_cloud_account_id</a></code> | <code>str</code> | The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>]]</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.projectId"></a>

- *Type:* str

The Wiz internal identifier of the Wiz project to link the cloud account to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#project_id ProjectCloudAccountLinkA#project_id}

---

##### `cloud_account_id`<sup>Optional</sup> <a name="cloud_account_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.cloudAccountId"></a>

- *Type:* str

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#cloud_account_id ProjectCloudAccountLinkA#cloud_account_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.environment"></a>

- *Type:* str

The environment.

* Allowed values:
  - PRODUCTION
  - STAGING
  - DEVELOPMENT
  - TESTING
  - OTHER

  * Defaults to `PRODUCTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#environment ProjectCloudAccountLinkA#environment}

---

##### `external_cloud_account_id`<sup>Optional</sup> <a name="external_cloud_account_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.externalCloudAccountId"></a>

- *Type:* str

The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#external_cloud_account_id ProjectCloudAccountLinkA#external_cloud_account_id}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_groups ProjectCloudAccountLinkA#resource_groups}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.resourceTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>]]

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_tags ProjectCloudAccountLinkA#resource_tags}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.shared"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#shared ProjectCloudAccountLinkA#shared}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags">put_resource_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetCloudAccountId">reset_cloud_account_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetExternalCloudAccountId">reset_external_cloud_account_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetShared">reset_shared</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resource_tags` <a name="put_resource_tags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags"></a>

```python
def put_resource_tags(
  value: typing.Union[IResolvable, typing.List[ProjectCloudAccountLinkResourceTagsA]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>]]

---

##### `reset_cloud_account_id` <a name="reset_cloud_account_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetCloudAccountId"></a>

```python
def reset_cloud_account_id() -> None
```

##### `reset_environment` <a name="reset_environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_external_cloud_account_id` <a name="reset_external_cloud_account_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetExternalCloudAccountId"></a>

```python
def reset_external_cloud_account_id() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_shared` <a name="reset_shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetShared"></a>

```python
def reset_shared() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectCloudAccountLinkA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import project_cloud_account_link

projectCloudAccountLink.ProjectCloudAccountLinkA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import project_cloud_account_link

projectCloudAccountLink.ProjectCloudAccountLinkA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import project_cloud_account_link

projectCloudAccountLink.ProjectCloudAccountLinkA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_wiz import project_cloud_account_link

projectCloudAccountLink.ProjectCloudAccountLinkA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectCloudAccountLinkA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectCloudAccountLinkA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectCloudAccountLinkA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectCloudAccountLinkA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTags">resource_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList">ProjectCloudAccountLinkResourceTagsAList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountIdInput">cloud_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountIdInput">external_cloud_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTagsInput">resource_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.sharedInput">shared_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountId">cloud_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountId">external_cloud_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTags"></a>

```python
resource_tags: ProjectCloudAccountLinkResourceTagsAList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList">ProjectCloudAccountLinkResourceTagsAList</a>

---

##### `cloud_account_id_input`<sup>Optional</sup> <a name="cloud_account_id_input" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountIdInput"></a>

```python
cloud_account_id_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `external_cloud_account_id_input`<sup>Optional</sup> <a name="external_cloud_account_id_input" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountIdInput"></a>

```python
external_cloud_account_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTagsInput"></a>

```python
resource_tags_input: typing.Union[IResolvable, typing.List[ProjectCloudAccountLinkResourceTagsA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>]]

---

##### `shared_input`<sup>Optional</sup> <a name="shared_input" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.sharedInput"></a>

```python
shared_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_account_id`<sup>Required</sup> <a name="cloud_account_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountId"></a>

```python
cloud_account_id: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `external_cloud_account_id`<sup>Required</sup> <a name="external_cloud_account_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountId"></a>

```python
external_cloud_account_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCloudAccountLinkAConfig <a name="ProjectCloudAccountLinkAConfig" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project_cloud_account_link

projectCloudAccountLink.ProjectCloudAccountLinkAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  cloud_account_id: str = None,
  environment: str = None,
  external_cloud_account_id: str = None,
  resource_groups: typing.List[str] = None,
  resource_tags: typing.Union[IResolvable, typing.List[ProjectCloudAccountLinkResourceTagsA]] = None,
  shared: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.projectId">project_id</a></code> | <code>str</code> | The Wiz internal identifier of the Wiz project to link the cloud account to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.cloudAccountId">cloud_account_id</a></code> | <code>str</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.environment">environment</a></code> | <code>str</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.externalCloudAccountId">external_cloud_account_id</a></code> | <code>str</code> | The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceTags">resource_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>]]</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The Wiz internal identifier of the Wiz project to link the cloud account to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#project_id ProjectCloudAccountLinkA#project_id}

---

##### `cloud_account_id`<sup>Optional</sup> <a name="cloud_account_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.cloudAccountId"></a>

```python
cloud_account_id: str
```

- *Type:* str

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#cloud_account_id ProjectCloudAccountLinkA#cloud_account_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The environment.

* Allowed values:
  - PRODUCTION
  - STAGING
  - DEVELOPMENT
  - TESTING
  - OTHER

  * Defaults to `PRODUCTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#environment ProjectCloudAccountLinkA#environment}

---

##### `external_cloud_account_id`<sup>Optional</sup> <a name="external_cloud_account_id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.externalCloudAccountId"></a>

```python
external_cloud_account_id: str
```

- *Type:* str

The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#external_cloud_account_id ProjectCloudAccountLinkA#external_cloud_account_id}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_groups ProjectCloudAccountLinkA#resource_groups}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceTags"></a>

```python
resource_tags: typing.Union[IResolvable, typing.List[ProjectCloudAccountLinkResourceTagsA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>]]

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_tags ProjectCloudAccountLinkA#resource_tags}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#shared ProjectCloudAccountLinkA#shared}

---

### ProjectCloudAccountLinkResourceTagsA <a name="ProjectCloudAccountLinkResourceTagsA" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project_cloud_account_link

projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#key ProjectCloudAccountLinkA#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#value ProjectCloudAccountLinkA#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#key ProjectCloudAccountLinkA#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#value ProjectCloudAccountLinkA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectCloudAccountLinkResourceTagsAList <a name="ProjectCloudAccountLinkResourceTagsAList" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project_cloud_account_link

projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectCloudAccountLinkResourceTagsAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectCloudAccountLinkResourceTagsA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>]]

---


### ProjectCloudAccountLinkResourceTagsAOutputReference <a name="ProjectCloudAccountLinkResourceTagsAOutputReference" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project_cloud_account_link

projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectCloudAccountLinkResourceTagsA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>]

---



