# `integrationServicenow` Submodule <a name="`integrationServicenow` Submodule" id="rhizo-co-terraform-provider-wiz.integrationServicenow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationServicenow <a name="IntegrationServicenow" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow wiz_integration_servicenow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_servicenow

integrationServicenow.IntegrationServicenow(
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
  servicenow_password: str,
  servicenow_url: str,
  servicenow_username: str,
  project_id: str = None,
  scope: str = None,
  servicenow_client_id: str = None,
  servicenow_client_secret: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowPassword">servicenow_password</a></code> | <code>str</code> | ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowUrl">servicenow_url</a></code> | <code>str</code> | ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowUsername">servicenow_username</a></code> | <code>str</code> | Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowClientId">servicenow_client_id</a></code> | <code>str</code> | ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowClientSecret">servicenow_client_secret</a></code> | <code>str</code> | ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.name"></a>

- *Type:* str

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#name IntegrationServicenow#name}

---

##### `servicenow_password`<sup>Required</sup> <a name="servicenow_password" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowPassword"></a>

- *Type:* str

ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_password IntegrationServicenow#servicenow_password}

---

##### `servicenow_url`<sup>Required</sup> <a name="servicenow_url" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowUrl"></a>

- *Type:* str

ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_url IntegrationServicenow#servicenow_url}

---

##### `servicenow_username`<sup>Required</sup> <a name="servicenow_username" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowUsername"></a>

- *Type:* str

Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_username IntegrationServicenow#servicenow_username}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.projectId"></a>

- *Type:* str

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#project_id IntegrationServicenow#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope"></a>

- *Type:* str

Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project.

Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles.
- Allowed values:
- Selected Project
- All Resources
- All Resources, Restrict this Integration to global roles only

```
- Defaults to `All Resources, Restrict this Integration to global roles only`.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#scope IntegrationServicenow#scope}

---

##### `servicenow_client_id`<sup>Optional</sup> <a name="servicenow_client_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowClientId"></a>

- *Type:* str

ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_id IntegrationServicenow#servicenow_client_id}

---

##### `servicenow_client_secret`<sup>Optional</sup> <a name="servicenow_client_secret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowClientSecret"></a>

- *Type:* str

ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_secret IntegrationServicenow#servicenow_client_secret}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientId">reset_servicenow_client_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientSecret">reset_servicenow_client_secret</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_scope` <a name="reset_scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_servicenow_client_id` <a name="reset_servicenow_client_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientId"></a>

```python
def reset_servicenow_client_id() -> None
```

##### `reset_servicenow_client_secret` <a name="reset_servicenow_client_secret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientSecret"></a>

```python
def reset_servicenow_client_secret() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationServicenow resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_servicenow

integrationServicenow.IntegrationServicenow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_servicenow

integrationServicenow.IntegrationServicenow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_servicenow

integrationServicenow.IntegrationServicenow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_servicenow

integrationServicenow.IntegrationServicenow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationServicenow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationServicenow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationServicenow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationServicenow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientIdInput">servicenow_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecretInput">servicenow_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPasswordInput">servicenow_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrlInput">servicenow_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsernameInput">servicenow_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientId">servicenow_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecret">servicenow_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPassword">servicenow_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrl">servicenow_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsername">servicenow_username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `servicenow_client_id_input`<sup>Optional</sup> <a name="servicenow_client_id_input" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientIdInput"></a>

```python
servicenow_client_id_input: str
```

- *Type:* str

---

##### `servicenow_client_secret_input`<sup>Optional</sup> <a name="servicenow_client_secret_input" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecretInput"></a>

```python
servicenow_client_secret_input: str
```

- *Type:* str

---

##### `servicenow_password_input`<sup>Optional</sup> <a name="servicenow_password_input" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPasswordInput"></a>

```python
servicenow_password_input: str
```

- *Type:* str

---

##### `servicenow_url_input`<sup>Optional</sup> <a name="servicenow_url_input" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrlInput"></a>

```python
servicenow_url_input: str
```

- *Type:* str

---

##### `servicenow_username_input`<sup>Optional</sup> <a name="servicenow_username_input" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsernameInput"></a>

```python
servicenow_username_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `servicenow_client_id`<sup>Required</sup> <a name="servicenow_client_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientId"></a>

```python
servicenow_client_id: str
```

- *Type:* str

---

##### `servicenow_client_secret`<sup>Required</sup> <a name="servicenow_client_secret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecret"></a>

```python
servicenow_client_secret: str
```

- *Type:* str

---

##### `servicenow_password`<sup>Required</sup> <a name="servicenow_password" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPassword"></a>

```python
servicenow_password: str
```

- *Type:* str

---

##### `servicenow_url`<sup>Required</sup> <a name="servicenow_url" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrl"></a>

```python
servicenow_url: str
```

- *Type:* str

---

##### `servicenow_username`<sup>Required</sup> <a name="servicenow_username" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsername"></a>

```python
servicenow_username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationServicenowConfig <a name="IntegrationServicenowConfig" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_servicenow

integrationServicenow.IntegrationServicenowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  servicenow_password: str,
  servicenow_url: str,
  servicenow_username: str,
  project_id: str = None,
  scope: str = None,
  servicenow_client_id: str = None,
  servicenow_client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.name">name</a></code> | <code>str</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowPassword">servicenow_password</a></code> | <code>str</code> | ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUrl">servicenow_url</a></code> | <code>str</code> | ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUsername">servicenow_username</a></code> | <code>str</code> | Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.projectId">project_id</a></code> | <code>str</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.scope">scope</a></code> | <code>str</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientId">servicenow_client_id</a></code> | <code>str</code> | ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientSecret">servicenow_client_secret</a></code> | <code>str</code> | ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#name IntegrationServicenow#name}

---

##### `servicenow_password`<sup>Required</sup> <a name="servicenow_password" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowPassword"></a>

```python
servicenow_password: str
```

- *Type:* str

ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_password IntegrationServicenow#servicenow_password}

---

##### `servicenow_url`<sup>Required</sup> <a name="servicenow_url" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUrl"></a>

```python
servicenow_url: str
```

- *Type:* str

ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_url IntegrationServicenow#servicenow_url}

---

##### `servicenow_username`<sup>Required</sup> <a name="servicenow_username" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUsername"></a>

```python
servicenow_username: str
```

- *Type:* str

Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_username IntegrationServicenow#servicenow_username}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#project_id IntegrationServicenow#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project.

Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles.
- Allowed values:
- Selected Project
- All Resources
- All Resources, Restrict this Integration to global roles only

```
- Defaults to `All Resources, Restrict this Integration to global roles only`.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#scope IntegrationServicenow#scope}

---

##### `servicenow_client_id`<sup>Optional</sup> <a name="servicenow_client_id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientId"></a>

```python
servicenow_client_id: str
```

- *Type:* str

ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_id IntegrationServicenow#servicenow_client_id}

---

##### `servicenow_client_secret`<sup>Optional</sup> <a name="servicenow_client_secret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientSecret"></a>

```python
servicenow_client_secret: str
```

- *Type:* str

ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_secret IntegrationServicenow#servicenow_client_secret}

---



