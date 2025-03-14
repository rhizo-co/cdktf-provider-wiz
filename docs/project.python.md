# `project` Submodule <a name="`project` Submodule" id="rhizo-co-terraform-provider-wiz.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="rhizo-co-terraform-provider-wiz.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project wiz_project}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.Project(
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
  archived: typing.Union[bool, IResolvable] = None,
  business_unit: str = None,
  cloud_account_link: typing.Union[IResolvable, typing.List[ProjectCloudAccountLink]] = None,
  cloud_organization_link: typing.Union[IResolvable, typing.List[ProjectCloudOrganizationLink]] = None,
  description: str = None,
  identifiers: typing.List[str] = None,
  is_folder: typing.Union[bool, IResolvable] = None,
  kubernetes_cluster_link: typing.Union[IResolvable, typing.List[ProjectKubernetesClusterLink]] = None,
  parent_project_id: str = None,
  project_owners: typing.List[str] = None,
  risk_profile: ProjectRiskProfile = None,
  security_champions: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.name">name</a></code> | <code>str</code> | The project name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the project is archived/inactive     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.businessUnit">business_unit</a></code> | <code>str</code> | The business unit to which the project belongs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.cloudAccountLink">cloud_account_link</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>]]</code> | cloud_account_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.cloudOrganizationLink">cloud_organization_link</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>]]</code> | cloud_organization_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.description">description</a></code> | <code>str</code> | The project description. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | Identifiers for the project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.isFolder">is_folder</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the project is a folder.     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.kubernetesClusterLink">kubernetes_cluster_link</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>]]</code> | kubernetes_cluster_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.parentProjectId">parent_project_id</a></code> | <code>str</code> | The parent project ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.projectOwners">project_owners</a></code> | <code>typing.List[str]</code> | A list of project owner IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.riskProfile">risk_profile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | risk_profile block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.securityChampions">security_champions</a></code> | <code>typing.List[str]</code> | A list of security champions IDs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.name"></a>

- *Type:* str

The project name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#name Project#name}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.archived"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the project is archived/inactive     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#archived Project#archived}

---

##### `business_unit`<sup>Optional</sup> <a name="business_unit" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.businessUnit"></a>

- *Type:* str

The business unit to which the project belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#business_unit Project#business_unit}

---

##### `cloud_account_link`<sup>Optional</sup> <a name="cloud_account_link" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.cloudAccountLink"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>]]

cloud_account_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_account_link Project#cloud_account_link}

---

##### `cloud_organization_link`<sup>Optional</sup> <a name="cloud_organization_link" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.cloudOrganizationLink"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>]]

cloud_organization_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_organization_link Project#cloud_organization_link}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.description"></a>

- *Type:* str

The project description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#description Project#description}

---

##### `identifiers`<sup>Optional</sup> <a name="identifiers" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.identifiers"></a>

- *Type:* typing.List[str]

Identifiers for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#identifiers Project#identifiers}

---

##### `is_folder`<sup>Optional</sup> <a name="is_folder" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.isFolder"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the project is a folder.     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_folder Project#is_folder}

---

##### `kubernetes_cluster_link`<sup>Optional</sup> <a name="kubernetes_cluster_link" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.kubernetesClusterLink"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>]]

kubernetes_cluster_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#kubernetes_cluster_link Project#kubernetes_cluster_link}

---

##### `parent_project_id`<sup>Optional</sup> <a name="parent_project_id" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.parentProjectId"></a>

- *Type:* str

The parent project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#parent_project_id Project#parent_project_id}

---

##### `project_owners`<sup>Optional</sup> <a name="project_owners" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.projectOwners"></a>

- *Type:* typing.List[str]

A list of project owner IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#project_owners Project#project_owners}

---

##### `risk_profile`<sup>Optional</sup> <a name="risk_profile" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.riskProfile"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

risk_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#risk_profile Project#risk_profile}

---

##### `security_champions`<sup>Optional</sup> <a name="security_champions" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.securityChampions"></a>

- *Type:* typing.List[str]

A list of security champions IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#security_champions Project#security_champions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink">put_cloud_account_link</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink">put_cloud_organization_link</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink">put_kubernetes_cluster_link</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile">put_risk_profile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetArchived">reset_archived</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetBusinessUnit">reset_business_unit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetCloudAccountLink">reset_cloud_account_link</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetCloudOrganizationLink">reset_cloud_organization_link</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetIdentifiers">reset_identifiers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetIsFolder">reset_is_folder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetKubernetesClusterLink">reset_kubernetes_cluster_link</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetParentProjectId">reset_parent_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetProjectOwners">reset_project_owners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetRiskProfile">reset_risk_profile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetSecurityChampions">reset_security_champions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.Project.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.project.Project.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-wiz.project.Project.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.project.Project.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.project.Project.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-wiz.project.Project.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-wiz.project.Project.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-wiz.project.Project.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.Project.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-wiz.project.Project.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-wiz.project.Project.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.Project.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-wiz.project.Project.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_account_link` <a name="put_cloud_account_link" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink"></a>

```python
def put_cloud_account_link(
  value: typing.Union[IResolvable, typing.List[ProjectCloudAccountLink]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>]]

---

##### `put_cloud_organization_link` <a name="put_cloud_organization_link" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink"></a>

```python
def put_cloud_organization_link(
  value: typing.Union[IResolvable, typing.List[ProjectCloudOrganizationLink]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>]]

---

##### `put_kubernetes_cluster_link` <a name="put_kubernetes_cluster_link" id="rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink"></a>

```python
def put_kubernetes_cluster_link(
  value: typing.Union[IResolvable, typing.List[ProjectKubernetesClusterLink]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>]]

---

##### `put_risk_profile` <a name="put_risk_profile" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile"></a>

```python
def put_risk_profile(
  business_impact: str = None,
  has_authentication: str = None,
  has_exposed_api: str = None,
  is_actively_developed: str = None,
  is_customer_facing: str = None,
  is_internet_facing: str = None,
  is_regulated: str = None,
  regulatory_standards: typing.List[str] = None,
  sensitive_data_types: typing.List[str] = None,
  stores_data: str = None
) -> None
```

###### `business_impact`<sup>Optional</sup> <a name="business_impact" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.businessImpact"></a>

- *Type:* str

Business impact.

* Allowed values:
  - LBI
  - MBI
  - HBI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#business_impact Project#business_impact}

---

###### `has_authentication`<sup>Optional</sup> <a name="has_authentication" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.hasAuthentication"></a>

- *Type:* str

Does the project require authentication?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#has_authentication Project#has_authentication}

---

###### `has_exposed_api`<sup>Optional</sup> <a name="has_exposed_api" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.hasExposedApi"></a>

- *Type:* str

Does the project expose an API?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#has_exposed_api Project#has_exposed_api}

---

###### `is_actively_developed`<sup>Optional</sup> <a name="is_actively_developed" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.isActivelyDeveloped"></a>

- *Type:* str

Is the project under active development?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_actively_developed Project#is_actively_developed}

---

###### `is_customer_facing`<sup>Optional</sup> <a name="is_customer_facing" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.isCustomerFacing"></a>

- *Type:* str

Is the project customer facing?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_customer_facing Project#is_customer_facing}

---

###### `is_internet_facing`<sup>Optional</sup> <a name="is_internet_facing" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.isInternetFacing"></a>

- *Type:* str

Is the project Internet facing?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_internet_facing Project#is_internet_facing}

---

###### `is_regulated`<sup>Optional</sup> <a name="is_regulated" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.isRegulated"></a>

- *Type:* str

Is the project regulated?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_regulated Project#is_regulated}

---

###### `regulatory_standards`<sup>Optional</sup> <a name="regulatory_standards" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.regulatoryStandards"></a>

- *Type:* typing.List[str]

Regulatory Standards.

* Allowed values:
  - ISO_20000_1_2011
  - ISO_22301
  - ISO_27001
  - ISO_27017
  - ISO_27018
  - ISO_27701
  - ISO_9001
  - SOC
  - FEDRAMP
  - NIST_800_171
  - NIST_CSF
  - HIPPA_HITECH
  - HITRUST
  - PCI_DSS
  - SEC_17A_4
  - SEC_REGULATION_SCI
  - SOX
  - GDPR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#regulatory_standards Project#regulatory_standards}

---

###### `sensitive_data_types`<sup>Optional</sup> <a name="sensitive_data_types" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.sensitiveDataTypes"></a>

- *Type:* typing.List[str]

Sensitive Data Types.

* Allowed values:
  - CLASSIFIED
  - HEALTH
  - PII
  - PCI
  - FINANCIAL
  - CUSTOMER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#sensitive_data_types Project#sensitive_data_types}

---

###### `stores_data`<sup>Optional</sup> <a name="stores_data" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.storesData"></a>

- *Type:* str

Does the project store data?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#stores_data Project#stores_data}

---

##### `reset_archived` <a name="reset_archived" id="rhizo-co-terraform-provider-wiz.project.Project.resetArchived"></a>

```python
def reset_archived() -> None
```

##### `reset_business_unit` <a name="reset_business_unit" id="rhizo-co-terraform-provider-wiz.project.Project.resetBusinessUnit"></a>

```python
def reset_business_unit() -> None
```

##### `reset_cloud_account_link` <a name="reset_cloud_account_link" id="rhizo-co-terraform-provider-wiz.project.Project.resetCloudAccountLink"></a>

```python
def reset_cloud_account_link() -> None
```

##### `reset_cloud_organization_link` <a name="reset_cloud_organization_link" id="rhizo-co-terraform-provider-wiz.project.Project.resetCloudOrganizationLink"></a>

```python
def reset_cloud_organization_link() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-wiz.project.Project.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_identifiers` <a name="reset_identifiers" id="rhizo-co-terraform-provider-wiz.project.Project.resetIdentifiers"></a>

```python
def reset_identifiers() -> None
```

##### `reset_is_folder` <a name="reset_is_folder" id="rhizo-co-terraform-provider-wiz.project.Project.resetIsFolder"></a>

```python
def reset_is_folder() -> None
```

##### `reset_kubernetes_cluster_link` <a name="reset_kubernetes_cluster_link" id="rhizo-co-terraform-provider-wiz.project.Project.resetKubernetesClusterLink"></a>

```python
def reset_kubernetes_cluster_link() -> None
```

##### `reset_parent_project_id` <a name="reset_parent_project_id" id="rhizo-co-terraform-provider-wiz.project.Project.resetParentProjectId"></a>

```python
def reset_parent_project_id() -> None
```

##### `reset_project_owners` <a name="reset_project_owners" id="rhizo-co-terraform-provider-wiz.project.Project.resetProjectOwners"></a>

```python
def reset_project_owners() -> None
```

##### `reset_risk_profile` <a name="reset_risk_profile" id="rhizo-co-terraform-provider-wiz.project.Project.resetRiskProfile"></a>

```python
def reset_risk_profile() -> None
```

##### `reset_security_champions` <a name="reset_security_champions" id="rhizo-co-terraform-provider-wiz.project.Project.resetSecurityChampions"></a>

```python
def reset_security_champions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.project.Project.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.Project.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.project.Project.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.Project.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.Project.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.Project.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Project to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLink">cloud_account_link</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList">ProjectCloudAccountLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLink">cloud_organization_link</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList">ProjectCloudOrganizationLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLink">kubernetes_cluster_link</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList">ProjectKubernetesClusterLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.riskProfile">risk_profile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference">ProjectRiskProfileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.slug">slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.archivedInput">archived_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.businessUnitInput">business_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLinkInput">cloud_account_link_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLinkInput">cloud_organization_link_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.identifiersInput">identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.isFolderInput">is_folder_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLinkInput">kubernetes_cluster_link_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectIdInput">parent_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.projectOwnersInput">project_owners_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.riskProfileInput">risk_profile_input</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.securityChampionsInput">security_champions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.businessUnit">business_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.isFolder">is_folder</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectId">parent_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.projectOwners">project_owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.securityChampions">security_champions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.project.Project.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.project.Project.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.Project.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.project.Project.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.project.Project.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.project.Project.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.project.Project.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.project.Project.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.project.Project.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.Project.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.project.Project.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_account_link`<sup>Required</sup> <a name="cloud_account_link" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLink"></a>

```python
cloud_account_link: ProjectCloudAccountLinkList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList">ProjectCloudAccountLinkList</a>

---

##### `cloud_organization_link`<sup>Required</sup> <a name="cloud_organization_link" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLink"></a>

```python
cloud_organization_link: ProjectCloudOrganizationLinkList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList">ProjectCloudOrganizationLinkList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_cluster_link`<sup>Required</sup> <a name="kubernetes_cluster_link" id="rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLink"></a>

```python
kubernetes_cluster_link: ProjectKubernetesClusterLinkList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList">ProjectKubernetesClusterLinkList</a>

---

##### `risk_profile`<sup>Required</sup> <a name="risk_profile" id="rhizo-co-terraform-provider-wiz.project.Project.property.riskProfile"></a>

```python
risk_profile: ProjectRiskProfileOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference">ProjectRiskProfileOutputReference</a>

---

##### `slug`<sup>Required</sup> <a name="slug" id="rhizo-co-terraform-provider-wiz.project.Project.property.slug"></a>

```python
slug: str
```

- *Type:* str

---

##### `archived_input`<sup>Optional</sup> <a name="archived_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.archivedInput"></a>

```python
archived_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `business_unit_input`<sup>Optional</sup> <a name="business_unit_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.businessUnitInput"></a>

```python
business_unit_input: str
```

- *Type:* str

---

##### `cloud_account_link_input`<sup>Optional</sup> <a name="cloud_account_link_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLinkInput"></a>

```python
cloud_account_link_input: typing.Union[IResolvable, typing.List[ProjectCloudAccountLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>]]

---

##### `cloud_organization_link_input`<sup>Optional</sup> <a name="cloud_organization_link_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLinkInput"></a>

```python
cloud_organization_link_input: typing.Union[IResolvable, typing.List[ProjectCloudOrganizationLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `identifiers_input`<sup>Optional</sup> <a name="identifiers_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.identifiersInput"></a>

```python
identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_folder_input`<sup>Optional</sup> <a name="is_folder_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.isFolderInput"></a>

```python
is_folder_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kubernetes_cluster_link_input`<sup>Optional</sup> <a name="kubernetes_cluster_link_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLinkInput"></a>

```python
kubernetes_cluster_link_input: typing.Union[IResolvable, typing.List[ProjectKubernetesClusterLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_project_id_input`<sup>Optional</sup> <a name="parent_project_id_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectIdInput"></a>

```python
parent_project_id_input: str
```

- *Type:* str

---

##### `project_owners_input`<sup>Optional</sup> <a name="project_owners_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.projectOwnersInput"></a>

```python
project_owners_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `risk_profile_input`<sup>Optional</sup> <a name="risk_profile_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.riskProfileInput"></a>

```python
risk_profile_input: ProjectRiskProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---

##### `security_champions_input`<sup>Optional</sup> <a name="security_champions_input" id="rhizo-co-terraform-provider-wiz.project.Project.property.securityChampionsInput"></a>

```python
security_champions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `archived`<sup>Required</sup> <a name="archived" id="rhizo-co-terraform-provider-wiz.project.Project.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `business_unit`<sup>Required</sup> <a name="business_unit" id="rhizo-co-terraform-provider-wiz.project.Project.property.businessUnit"></a>

```python
business_unit: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.project.Project.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="rhizo-co-terraform-provider-wiz.project.Project.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_folder`<sup>Required</sup> <a name="is_folder" id="rhizo-co-terraform-provider-wiz.project.Project.property.isFolder"></a>

```python
is_folder: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.project.Project.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_project_id`<sup>Required</sup> <a name="parent_project_id" id="rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectId"></a>

```python
parent_project_id: str
```

- *Type:* str

---

##### `project_owners`<sup>Required</sup> <a name="project_owners" id="rhizo-co-terraform-provider-wiz.project.Project.property.projectOwners"></a>

```python
project_owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_champions`<sup>Required</sup> <a name="security_champions" id="rhizo-co-terraform-provider-wiz.project.Project.property.securityChampions"></a>

```python
security_champions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.project.Project.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCloudAccountLink <a name="ProjectCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudAccountLink(
  cloud_account_id: str,
  environment: str = None,
  resource_groups: typing.List[str] = None,
  resource_tags: typing.Union[IResolvable, typing.List[ProjectCloudAccountLinkResourceTags]] = None,
  shared: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.cloudAccountId">cloud_account_id</a></code> | <code>str</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.environment">environment</a></code> | <code>str</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceTags">resource_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>]]</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `cloud_account_id`<sup>Required</sup> <a name="cloud_account_id" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.cloudAccountId"></a>

```python
cloud_account_id: str
```

- *Type:* str

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_account_id Project#cloud_account_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.environment"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_groups Project#resource_groups}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceTags"></a>

```python
resource_tags: typing.Union[IResolvable, typing.List[ProjectCloudAccountLinkResourceTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>]]

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_tags Project#resource_tags}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}

---

### ProjectCloudAccountLinkResourceTags <a name="ProjectCloudAccountLinkResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudAccountLinkResourceTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}.

---

### ProjectCloudOrganizationLink <a name="ProjectCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudOrganizationLink(
  cloud_organization: str,
  environment: str = None,
  resource_groups: typing.List[str] = None,
  resource_tags: typing.Union[IResolvable, typing.List[ProjectCloudOrganizationLinkResourceTags]] = None,
  shared: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.cloudOrganization">cloud_organization</a></code> | <code>str</code> | The Wiz internal identifier for the Organizational Unit. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.environment">environment</a></code> | <code>str</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Please provide a list of strings for filtering by resource groups. `shared` must be true to define resource_groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceTags">resource_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>]]</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `cloud_organization`<sup>Required</sup> <a name="cloud_organization" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.cloudOrganization"></a>

```python
cloud_organization: str
```

- *Type:* str

The Wiz internal identifier for the Organizational Unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_organization Project#cloud_organization}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.environment"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Please provide a list of strings for filtering by resource groups. `shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_groups Project#resource_groups}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceTags"></a>

```python
resource_tags: typing.Union[IResolvable, typing.List[ProjectCloudOrganizationLinkResourceTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>]]

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_tags Project#resource_tags}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}

---

### ProjectCloudOrganizationLinkResourceTags <a name="ProjectCloudOrganizationLinkResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudOrganizationLinkResourceTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}.

---

### ProjectConfig <a name="ProjectConfig" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  archived: typing.Union[bool, IResolvable] = None,
  business_unit: str = None,
  cloud_account_link: typing.Union[IResolvable, typing.List[ProjectCloudAccountLink]] = None,
  cloud_organization_link: typing.Union[IResolvable, typing.List[ProjectCloudOrganizationLink]] = None,
  description: str = None,
  identifiers: typing.List[str] = None,
  is_folder: typing.Union[bool, IResolvable] = None,
  kubernetes_cluster_link: typing.Union[IResolvable, typing.List[ProjectKubernetesClusterLink]] = None,
  parent_project_id: str = None,
  project_owners: typing.List[str] = None,
  risk_profile: ProjectRiskProfile = None,
  security_champions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.name">name</a></code> | <code>str</code> | The project name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the project is archived/inactive     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.businessUnit">business_unit</a></code> | <code>str</code> | The business unit to which the project belongs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudAccountLink">cloud_account_link</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>]]</code> | cloud_account_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudOrganizationLink">cloud_organization_link</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>]]</code> | cloud_organization_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.description">description</a></code> | <code>str</code> | The project description. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | Identifiers for the project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.isFolder">is_folder</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the project is a folder.     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.kubernetesClusterLink">kubernetes_cluster_link</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>]]</code> | kubernetes_cluster_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.parentProjectId">parent_project_id</a></code> | <code>str</code> | The parent project ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.projectOwners">project_owners</a></code> | <code>typing.List[str]</code> | A list of project owner IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.riskProfile">risk_profile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | risk_profile block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.securityChampions">security_champions</a></code> | <code>typing.List[str]</code> | A list of security champions IDs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The project name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#name Project#name}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the project is archived/inactive     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#archived Project#archived}

---

##### `business_unit`<sup>Optional</sup> <a name="business_unit" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.businessUnit"></a>

```python
business_unit: str
```

- *Type:* str

The business unit to which the project belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#business_unit Project#business_unit}

---

##### `cloud_account_link`<sup>Optional</sup> <a name="cloud_account_link" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudAccountLink"></a>

```python
cloud_account_link: typing.Union[IResolvable, typing.List[ProjectCloudAccountLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>]]

cloud_account_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_account_link Project#cloud_account_link}

---

##### `cloud_organization_link`<sup>Optional</sup> <a name="cloud_organization_link" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudOrganizationLink"></a>

```python
cloud_organization_link: typing.Union[IResolvable, typing.List[ProjectCloudOrganizationLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>]]

cloud_organization_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_organization_link Project#cloud_organization_link}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The project description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#description Project#description}

---

##### `identifiers`<sup>Optional</sup> <a name="identifiers" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

Identifiers for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#identifiers Project#identifiers}

---

##### `is_folder`<sup>Optional</sup> <a name="is_folder" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.isFolder"></a>

```python
is_folder: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the project is a folder.     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_folder Project#is_folder}

---

##### `kubernetes_cluster_link`<sup>Optional</sup> <a name="kubernetes_cluster_link" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.kubernetesClusterLink"></a>

```python
kubernetes_cluster_link: typing.Union[IResolvable, typing.List[ProjectKubernetesClusterLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>]]

kubernetes_cluster_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#kubernetes_cluster_link Project#kubernetes_cluster_link}

---

##### `parent_project_id`<sup>Optional</sup> <a name="parent_project_id" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.parentProjectId"></a>

```python
parent_project_id: str
```

- *Type:* str

The parent project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#parent_project_id Project#parent_project_id}

---

##### `project_owners`<sup>Optional</sup> <a name="project_owners" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.projectOwners"></a>

```python
project_owners: typing.List[str]
```

- *Type:* typing.List[str]

A list of project owner IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#project_owners Project#project_owners}

---

##### `risk_profile`<sup>Optional</sup> <a name="risk_profile" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.riskProfile"></a>

```python
risk_profile: ProjectRiskProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

risk_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#risk_profile Project#risk_profile}

---

##### `security_champions`<sup>Optional</sup> <a name="security_champions" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.securityChampions"></a>

```python
security_champions: typing.List[str]
```

- *Type:* typing.List[str]

A list of security champions IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#security_champions Project#security_champions}

---

### ProjectKubernetesClusterLink <a name="ProjectKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectKubernetesClusterLink(
  kubernetes_cluster: str,
  environment: str = None,
  namespaces: typing.List[str] = None,
  shared: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.kubernetesCluster">kubernetes_cluster</a></code> | <code>str</code> | The Wiz internal identifier for the kubernetes cluster. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.environment">environment</a></code> | <code>str</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | The kubernetes namespaces to link. `shared` must be set to `true` if namespaces are set. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Mark the kubernetes cluster as shared, in which case, specific namespaces can be linked. |

---

##### `kubernetes_cluster`<sup>Required</sup> <a name="kubernetes_cluster" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.kubernetesCluster"></a>

```python
kubernetes_cluster: str
```

- *Type:* str

The Wiz internal identifier for the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#kubernetes_cluster Project#kubernetes_cluster}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.environment"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

The kubernetes namespaces to link. `shared` must be set to `true` if namespaces are set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#namespaces Project#namespaces}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Mark the kubernetes cluster as shared, in which case, specific namespaces can be linked.

This needs to be set to `true` if `namespaces` are set.
- Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}

---

### ProjectRiskProfile <a name="ProjectRiskProfile" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectRiskProfile(
  business_impact: str = None,
  has_authentication: str = None,
  has_exposed_api: str = None,
  is_actively_developed: str = None,
  is_customer_facing: str = None,
  is_internet_facing: str = None,
  is_regulated: str = None,
  regulatory_standards: typing.List[str] = None,
  sensitive_data_types: typing.List[str] = None,
  stores_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.businessImpact">business_impact</a></code> | <code>str</code> | Business impact. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasAuthentication">has_authentication</a></code> | <code>str</code> | Does the project require authentication? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasExposedApi">has_exposed_api</a></code> | <code>str</code> | Does the project expose an API? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isActivelyDeveloped">is_actively_developed</a></code> | <code>str</code> | Is the project under active development? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isCustomerFacing">is_customer_facing</a></code> | <code>str</code> | Is the project customer facing? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isInternetFacing">is_internet_facing</a></code> | <code>str</code> | Is the project Internet facing? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isRegulated">is_regulated</a></code> | <code>str</code> | Is the project regulated? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.regulatoryStandards">regulatory_standards</a></code> | <code>typing.List[str]</code> | Regulatory Standards. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.sensitiveDataTypes">sensitive_data_types</a></code> | <code>typing.List[str]</code> | Sensitive Data Types. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.storesData">stores_data</a></code> | <code>str</code> | Does the project store data? |

---

##### `business_impact`<sup>Optional</sup> <a name="business_impact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.businessImpact"></a>

```python
business_impact: str
```

- *Type:* str

Business impact.

* Allowed values:
  - LBI
  - MBI
  - HBI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#business_impact Project#business_impact}

---

##### `has_authentication`<sup>Optional</sup> <a name="has_authentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasAuthentication"></a>

```python
has_authentication: str
```

- *Type:* str

Does the project require authentication?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#has_authentication Project#has_authentication}

---

##### `has_exposed_api`<sup>Optional</sup> <a name="has_exposed_api" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasExposedApi"></a>

```python
has_exposed_api: str
```

- *Type:* str

Does the project expose an API?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#has_exposed_api Project#has_exposed_api}

---

##### `is_actively_developed`<sup>Optional</sup> <a name="is_actively_developed" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isActivelyDeveloped"></a>

```python
is_actively_developed: str
```

- *Type:* str

Is the project under active development?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_actively_developed Project#is_actively_developed}

---

##### `is_customer_facing`<sup>Optional</sup> <a name="is_customer_facing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isCustomerFacing"></a>

```python
is_customer_facing: str
```

- *Type:* str

Is the project customer facing?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_customer_facing Project#is_customer_facing}

---

##### `is_internet_facing`<sup>Optional</sup> <a name="is_internet_facing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isInternetFacing"></a>

```python
is_internet_facing: str
```

- *Type:* str

Is the project Internet facing?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_internet_facing Project#is_internet_facing}

---

##### `is_regulated`<sup>Optional</sup> <a name="is_regulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isRegulated"></a>

```python
is_regulated: str
```

- *Type:* str

Is the project regulated?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_regulated Project#is_regulated}

---

##### `regulatory_standards`<sup>Optional</sup> <a name="regulatory_standards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.regulatoryStandards"></a>

```python
regulatory_standards: typing.List[str]
```

- *Type:* typing.List[str]

Regulatory Standards.

* Allowed values:
  - ISO_20000_1_2011
  - ISO_22301
  - ISO_27001
  - ISO_27017
  - ISO_27018
  - ISO_27701
  - ISO_9001
  - SOC
  - FEDRAMP
  - NIST_800_171
  - NIST_CSF
  - HIPPA_HITECH
  - HITRUST
  - PCI_DSS
  - SEC_17A_4
  - SEC_REGULATION_SCI
  - SOX
  - GDPR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#regulatory_standards Project#regulatory_standards}

---

##### `sensitive_data_types`<sup>Optional</sup> <a name="sensitive_data_types" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.sensitiveDataTypes"></a>

```python
sensitive_data_types: typing.List[str]
```

- *Type:* typing.List[str]

Sensitive Data Types.

* Allowed values:
  - CLASSIFIED
  - HEALTH
  - PII
  - PCI
  - FINANCIAL
  - CUSTOMER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#sensitive_data_types Project#sensitive_data_types}

---

##### `stores_data`<sup>Optional</sup> <a name="stores_data" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.storesData"></a>

```python
stores_data: str
```

- *Type:* str

Does the project store data?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#stores_data Project#stores_data}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectCloudAccountLinkList <a name="ProjectCloudAccountLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudAccountLinkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectCloudAccountLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectCloudAccountLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>]]

---


### ProjectCloudAccountLinkOutputReference <a name="ProjectCloudAccountLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudAccountLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags">put_resource_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetShared">reset_shared</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_tags` <a name="put_resource_tags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags"></a>

```python
def put_resource_tags(
  value: typing.Union[IResolvable, typing.List[ProjectCloudAccountLinkResourceTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>]]

---

##### `reset_environment` <a name="reset_environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_shared` <a name="reset_shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetShared"></a>

```python
def reset_shared() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTags">resource_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList">ProjectCloudAccountLinkResourceTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountIdInput">cloud_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTagsInput">resource_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.sharedInput">shared_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountId">cloud_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTags"></a>

```python
resource_tags: ProjectCloudAccountLinkResourceTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList">ProjectCloudAccountLinkResourceTagsList</a>

---

##### `cloud_account_id_input`<sup>Optional</sup> <a name="cloud_account_id_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountIdInput"></a>

```python
cloud_account_id_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTagsInput"></a>

```python
resource_tags_input: typing.Union[IResolvable, typing.List[ProjectCloudAccountLinkResourceTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>]]

---

##### `shared_input`<sup>Optional</sup> <a name="shared_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.sharedInput"></a>

```python
shared_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_account_id`<sup>Required</sup> <a name="cloud_account_id" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountId"></a>

```python
cloud_account_id: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectCloudAccountLink]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>]

---


### ProjectCloudAccountLinkResourceTagsList <a name="ProjectCloudAccountLinkResourceTagsList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudAccountLinkResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectCloudAccountLinkResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectCloudAccountLinkResourceTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>]]

---


### ProjectCloudAccountLinkResourceTagsOutputReference <a name="ProjectCloudAccountLinkResourceTagsOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudAccountLinkResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectCloudAccountLinkResourceTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>]

---


### ProjectCloudOrganizationLinkList <a name="ProjectCloudOrganizationLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudOrganizationLinkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectCloudOrganizationLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectCloudOrganizationLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>]]

---


### ProjectCloudOrganizationLinkOutputReference <a name="ProjectCloudOrganizationLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudOrganizationLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags">put_resource_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetShared">reset_shared</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_tags` <a name="put_resource_tags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags"></a>

```python
def put_resource_tags(
  value: typing.Union[IResolvable, typing.List[ProjectCloudOrganizationLinkResourceTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>]]

---

##### `reset_environment` <a name="reset_environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_shared` <a name="reset_shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetShared"></a>

```python
def reset_shared() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTags">resource_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList">ProjectCloudOrganizationLinkResourceTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganizationInput">cloud_organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTagsInput">resource_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.sharedInput">shared_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganization">cloud_organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTags"></a>

```python
resource_tags: ProjectCloudOrganizationLinkResourceTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList">ProjectCloudOrganizationLinkResourceTagsList</a>

---

##### `cloud_organization_input`<sup>Optional</sup> <a name="cloud_organization_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganizationInput"></a>

```python
cloud_organization_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTagsInput"></a>

```python
resource_tags_input: typing.Union[IResolvable, typing.List[ProjectCloudOrganizationLinkResourceTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>]]

---

##### `shared_input`<sup>Optional</sup> <a name="shared_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.sharedInput"></a>

```python
shared_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_organization`<sup>Required</sup> <a name="cloud_organization" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganization"></a>

```python
cloud_organization: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectCloudOrganizationLink]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>]

---


### ProjectCloudOrganizationLinkResourceTagsList <a name="ProjectCloudOrganizationLinkResourceTagsList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudOrganizationLinkResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectCloudOrganizationLinkResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectCloudOrganizationLinkResourceTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>]]

---


### ProjectCloudOrganizationLinkResourceTagsOutputReference <a name="ProjectCloudOrganizationLinkResourceTagsOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectCloudOrganizationLinkResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectCloudOrganizationLinkResourceTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>]

---


### ProjectKubernetesClusterLinkList <a name="ProjectKubernetesClusterLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectKubernetesClusterLinkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectKubernetesClusterLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectKubernetesClusterLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>]]

---


### ProjectKubernetesClusterLinkOutputReference <a name="ProjectKubernetesClusterLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectKubernetesClusterLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetNamespaces">reset_namespaces</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetShared">reset_shared</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment` <a name="reset_environment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_namespaces` <a name="reset_namespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetNamespaces"></a>

```python
def reset_namespaces() -> None
```

##### `reset_shared` <a name="reset_shared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetShared"></a>

```python
def reset_shared() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesClusterInput">kubernetes_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.sharedInput">shared_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesCluster">kubernetes_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `kubernetes_cluster_input`<sup>Optional</sup> <a name="kubernetes_cluster_input" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesClusterInput"></a>

```python
kubernetes_cluster_input: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_input`<sup>Optional</sup> <a name="shared_input" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.sharedInput"></a>

```python
shared_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `kubernetes_cluster`<sup>Required</sup> <a name="kubernetes_cluster" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesCluster"></a>

```python
kubernetes_cluster: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectKubernetesClusterLink]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>]

---


### ProjectRiskProfileOutputReference <a name="ProjectRiskProfileOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import project

project.ProjectRiskProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetBusinessImpact">reset_business_impact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasAuthentication">reset_has_authentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasExposedApi">reset_has_exposed_api</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsActivelyDeveloped">reset_is_actively_developed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsCustomerFacing">reset_is_customer_facing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsInternetFacing">reset_is_internet_facing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsRegulated">reset_is_regulated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetRegulatoryStandards">reset_regulatory_standards</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetSensitiveDataTypes">reset_sensitive_data_types</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetStoresData">reset_stores_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_business_impact` <a name="reset_business_impact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetBusinessImpact"></a>

```python
def reset_business_impact() -> None
```

##### `reset_has_authentication` <a name="reset_has_authentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasAuthentication"></a>

```python
def reset_has_authentication() -> None
```

##### `reset_has_exposed_api` <a name="reset_has_exposed_api" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasExposedApi"></a>

```python
def reset_has_exposed_api() -> None
```

##### `reset_is_actively_developed` <a name="reset_is_actively_developed" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsActivelyDeveloped"></a>

```python
def reset_is_actively_developed() -> None
```

##### `reset_is_customer_facing` <a name="reset_is_customer_facing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsCustomerFacing"></a>

```python
def reset_is_customer_facing() -> None
```

##### `reset_is_internet_facing` <a name="reset_is_internet_facing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsInternetFacing"></a>

```python
def reset_is_internet_facing() -> None
```

##### `reset_is_regulated` <a name="reset_is_regulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsRegulated"></a>

```python
def reset_is_regulated() -> None
```

##### `reset_regulatory_standards` <a name="reset_regulatory_standards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetRegulatoryStandards"></a>

```python
def reset_regulatory_standards() -> None
```

##### `reset_sensitive_data_types` <a name="reset_sensitive_data_types" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetSensitiveDataTypes"></a>

```python
def reset_sensitive_data_types() -> None
```

##### `reset_stores_data` <a name="reset_stores_data" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetStoresData"></a>

```python
def reset_stores_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpactInput">business_impact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthenticationInput">has_authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApiInput">has_exposed_api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDevelopedInput">is_actively_developed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacingInput">is_customer_facing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacingInput">is_internet_facing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulatedInput">is_regulated_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandardsInput">regulatory_standards_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypesInput">sensitive_data_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesDataInput">stores_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpact">business_impact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthentication">has_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApi">has_exposed_api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDeveloped">is_actively_developed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacing">is_customer_facing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacing">is_internet_facing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulated">is_regulated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandards">regulatory_standards</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypes">sensitive_data_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesData">stores_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `business_impact_input`<sup>Optional</sup> <a name="business_impact_input" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpactInput"></a>

```python
business_impact_input: str
```

- *Type:* str

---

##### `has_authentication_input`<sup>Optional</sup> <a name="has_authentication_input" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthenticationInput"></a>

```python
has_authentication_input: str
```

- *Type:* str

---

##### `has_exposed_api_input`<sup>Optional</sup> <a name="has_exposed_api_input" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApiInput"></a>

```python
has_exposed_api_input: str
```

- *Type:* str

---

##### `is_actively_developed_input`<sup>Optional</sup> <a name="is_actively_developed_input" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDevelopedInput"></a>

```python
is_actively_developed_input: str
```

- *Type:* str

---

##### `is_customer_facing_input`<sup>Optional</sup> <a name="is_customer_facing_input" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacingInput"></a>

```python
is_customer_facing_input: str
```

- *Type:* str

---

##### `is_internet_facing_input`<sup>Optional</sup> <a name="is_internet_facing_input" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacingInput"></a>

```python
is_internet_facing_input: str
```

- *Type:* str

---

##### `is_regulated_input`<sup>Optional</sup> <a name="is_regulated_input" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulatedInput"></a>

```python
is_regulated_input: str
```

- *Type:* str

---

##### `regulatory_standards_input`<sup>Optional</sup> <a name="regulatory_standards_input" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandardsInput"></a>

```python
regulatory_standards_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_data_types_input`<sup>Optional</sup> <a name="sensitive_data_types_input" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypesInput"></a>

```python
sensitive_data_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stores_data_input`<sup>Optional</sup> <a name="stores_data_input" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesDataInput"></a>

```python
stores_data_input: str
```

- *Type:* str

---

##### `business_impact`<sup>Required</sup> <a name="business_impact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpact"></a>

```python
business_impact: str
```

- *Type:* str

---

##### `has_authentication`<sup>Required</sup> <a name="has_authentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthentication"></a>

```python
has_authentication: str
```

- *Type:* str

---

##### `has_exposed_api`<sup>Required</sup> <a name="has_exposed_api" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApi"></a>

```python
has_exposed_api: str
```

- *Type:* str

---

##### `is_actively_developed`<sup>Required</sup> <a name="is_actively_developed" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDeveloped"></a>

```python
is_actively_developed: str
```

- *Type:* str

---

##### `is_customer_facing`<sup>Required</sup> <a name="is_customer_facing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacing"></a>

```python
is_customer_facing: str
```

- *Type:* str

---

##### `is_internet_facing`<sup>Required</sup> <a name="is_internet_facing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacing"></a>

```python
is_internet_facing: str
```

- *Type:* str

---

##### `is_regulated`<sup>Required</sup> <a name="is_regulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulated"></a>

```python
is_regulated: str
```

- *Type:* str

---

##### `regulatory_standards`<sup>Required</sup> <a name="regulatory_standards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandards"></a>

```python
regulatory_standards: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_data_types`<sup>Required</sup> <a name="sensitive_data_types" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypes"></a>

```python
sensitive_data_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stores_data`<sup>Required</sup> <a name="stores_data" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesData"></a>

```python
stores_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.internalValue"></a>

```python
internal_value: ProjectRiskProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---



