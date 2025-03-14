# `integrationJira` Submodule <a name="`integrationJira` Submodule" id="rhizo-co-terraform-provider-wiz.integrationJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationJira <a name="IntegrationJira" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira wiz_integration_jira}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_jira

integrationJira.IntegrationJira(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  jira_url: str,
  name: str,
  jira_allow_insecure_tls: typing.Union[bool, IResolvable] = None,
  jira_client_certificate_and_private_key: str = None,
  jira_is_on_prem: typing.Union[bool, IResolvable] = None,
  jira_password: str = None,
  jira_pat: str = None,
  jira_server_ca: str = None,
  jira_server_type: str = None,
  jira_username: str = None,
  project_id: str = None,
  scope: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraUrl">jira_url</a></code> | <code>str</code> | Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraAllowInsecureTls">jira_allow_insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Jira integration TLS setting. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraClientCertificateAndPrivateKey">jira_client_certificate_and_private_key</a></code> | <code>str</code> | Jira PEM with client certificate and private key. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraIsOnPrem">jira_is_on_prem</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Jira instance is on prem     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraPassword">jira_password</a></code> | <code>str</code> | Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraPat">jira_pat</a></code> | <code>str</code> | Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraServerCa">jira_server_ca</a></code> | <code>str</code> | Jira server CA. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraServerType">jira_server_type</a></code> | <code>str</code> | Jira server type     - Defaults to `CLOUD`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraUsername">jira_username</a></code> | <code>str</code> | Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `jira_url`<sup>Required</sup> <a name="jira_url" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraUrl"></a>

- *Type:* str

Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_url IntegrationJira#jira_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.name"></a>

- *Type:* str

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#name IntegrationJira#name}

---

##### `jira_allow_insecure_tls`<sup>Optional</sup> <a name="jira_allow_insecure_tls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraAllowInsecureTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Jira integration TLS setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_allow_insecure_tls IntegrationJira#jira_allow_insecure_tls}

---

##### `jira_client_certificate_and_private_key`<sup>Optional</sup> <a name="jira_client_certificate_and_private_key" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraClientCertificateAndPrivateKey"></a>

- *Type:* str

Jira PEM with client certificate and private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_client_certificate_and_private_key IntegrationJira#jira_client_certificate_and_private_key}

---

##### `jira_is_on_prem`<sup>Optional</sup> <a name="jira_is_on_prem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraIsOnPrem"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Jira instance is on prem     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_is_on_prem IntegrationJira#jira_is_on_prem}

---

##### `jira_password`<sup>Optional</sup> <a name="jira_password" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraPassword"></a>

- *Type:* str

Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_password IntegrationJira#jira_password}

---

##### `jira_pat`<sup>Optional</sup> <a name="jira_pat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraPat"></a>

- *Type:* str

Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_pat IntegrationJira#jira_pat}

---

##### `jira_server_ca`<sup>Optional</sup> <a name="jira_server_ca" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraServerCa"></a>

- *Type:* str

Jira server CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_server_ca IntegrationJira#jira_server_ca}

---

##### `jira_server_type`<sup>Optional</sup> <a name="jira_server_type" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraServerType"></a>

- *Type:* str

Jira server type     - Defaults to `CLOUD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_server_type IntegrationJira#jira_server_type}

---

##### `jira_username`<sup>Optional</sup> <a name="jira_username" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraUsername"></a>

- *Type:* str

Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_username IntegrationJira#jira_username}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.projectId"></a>

- *Type:* str

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#project_id IntegrationJira#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#scope IntegrationJira#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraAllowInsecureTls">reset_jira_allow_insecure_tls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraClientCertificateAndPrivateKey">reset_jira_client_certificate_and_private_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraIsOnPrem">reset_jira_is_on_prem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPassword">reset_jira_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPat">reset_jira_pat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerCa">reset_jira_server_ca</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerType">reset_jira_server_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraUsername">reset_jira_username</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetScope">reset_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_jira_allow_insecure_tls` <a name="reset_jira_allow_insecure_tls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraAllowInsecureTls"></a>

```python
def reset_jira_allow_insecure_tls() -> None
```

##### `reset_jira_client_certificate_and_private_key` <a name="reset_jira_client_certificate_and_private_key" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraClientCertificateAndPrivateKey"></a>

```python
def reset_jira_client_certificate_and_private_key() -> None
```

##### `reset_jira_is_on_prem` <a name="reset_jira_is_on_prem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraIsOnPrem"></a>

```python
def reset_jira_is_on_prem() -> None
```

##### `reset_jira_password` <a name="reset_jira_password" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPassword"></a>

```python
def reset_jira_password() -> None
```

##### `reset_jira_pat` <a name="reset_jira_pat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPat"></a>

```python
def reset_jira_pat() -> None
```

##### `reset_jira_server_ca` <a name="reset_jira_server_ca" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerCa"></a>

```python
def reset_jira_server_ca() -> None
```

##### `reset_jira_server_type` <a name="reset_jira_server_type" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerType"></a>

```python
def reset_jira_server_type() -> None
```

##### `reset_jira_username` <a name="reset_jira_username" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraUsername"></a>

```python
def reset_jira_username() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_scope` <a name="reset_scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetScope"></a>

```python
def reset_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationJira resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_jira

integrationJira.IntegrationJira.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_jira

integrationJira.IntegrationJira.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_jira

integrationJira.IntegrationJira.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_jira

integrationJira.IntegrationJira.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationJira resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationJira to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationJira that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationJira to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTlsInput">jira_allow_insecure_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKeyInput">jira_client_certificate_and_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPremInput">jira_is_on_prem_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPasswordInput">jira_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPatInput">jira_pat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCaInput">jira_server_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerTypeInput">jira_server_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrlInput">jira_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsernameInput">jira_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTls">jira_allow_insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKey">jira_client_certificate_and_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPrem">jira_is_on_prem</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPassword">jira_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPat">jira_pat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCa">jira_server_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerType">jira_server_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrl">jira_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsername">jira_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `jira_allow_insecure_tls_input`<sup>Optional</sup> <a name="jira_allow_insecure_tls_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTlsInput"></a>

```python
jira_allow_insecure_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_client_certificate_and_private_key_input`<sup>Optional</sup> <a name="jira_client_certificate_and_private_key_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKeyInput"></a>

```python
jira_client_certificate_and_private_key_input: str
```

- *Type:* str

---

##### `jira_is_on_prem_input`<sup>Optional</sup> <a name="jira_is_on_prem_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPremInput"></a>

```python
jira_is_on_prem_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_password_input`<sup>Optional</sup> <a name="jira_password_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPasswordInput"></a>

```python
jira_password_input: str
```

- *Type:* str

---

##### `jira_pat_input`<sup>Optional</sup> <a name="jira_pat_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPatInput"></a>

```python
jira_pat_input: str
```

- *Type:* str

---

##### `jira_server_ca_input`<sup>Optional</sup> <a name="jira_server_ca_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCaInput"></a>

```python
jira_server_ca_input: str
```

- *Type:* str

---

##### `jira_server_type_input`<sup>Optional</sup> <a name="jira_server_type_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerTypeInput"></a>

```python
jira_server_type_input: str
```

- *Type:* str

---

##### `jira_url_input`<sup>Optional</sup> <a name="jira_url_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrlInput"></a>

```python
jira_url_input: str
```

- *Type:* str

---

##### `jira_username_input`<sup>Optional</sup> <a name="jira_username_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsernameInput"></a>

```python
jira_username_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `jira_allow_insecure_tls`<sup>Required</sup> <a name="jira_allow_insecure_tls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTls"></a>

```python
jira_allow_insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_client_certificate_and_private_key`<sup>Required</sup> <a name="jira_client_certificate_and_private_key" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKey"></a>

```python
jira_client_certificate_and_private_key: str
```

- *Type:* str

---

##### `jira_is_on_prem`<sup>Required</sup> <a name="jira_is_on_prem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPrem"></a>

```python
jira_is_on_prem: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_password`<sup>Required</sup> <a name="jira_password" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPassword"></a>

```python
jira_password: str
```

- *Type:* str

---

##### `jira_pat`<sup>Required</sup> <a name="jira_pat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPat"></a>

```python
jira_pat: str
```

- *Type:* str

---

##### `jira_server_ca`<sup>Required</sup> <a name="jira_server_ca" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCa"></a>

```python
jira_server_ca: str
```

- *Type:* str

---

##### `jira_server_type`<sup>Required</sup> <a name="jira_server_type" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerType"></a>

```python
jira_server_type: str
```

- *Type:* str

---

##### `jira_url`<sup>Required</sup> <a name="jira_url" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrl"></a>

```python
jira_url: str
```

- *Type:* str

---

##### `jira_username`<sup>Required</sup> <a name="jira_username" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsername"></a>

```python
jira_username: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationJiraConfig <a name="IntegrationJiraConfig" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_jira

integrationJira.IntegrationJiraConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  jira_url: str,
  name: str,
  jira_allow_insecure_tls: typing.Union[bool, IResolvable] = None,
  jira_client_certificate_and_private_key: str = None,
  jira_is_on_prem: typing.Union[bool, IResolvable] = None,
  jira_password: str = None,
  jira_pat: str = None,
  jira_server_ca: str = None,
  jira_server_type: str = None,
  jira_username: str = None,
  project_id: str = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUrl">jira_url</a></code> | <code>str</code> | Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.name">name</a></code> | <code>str</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraAllowInsecureTls">jira_allow_insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Jira integration TLS setting. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraClientCertificateAndPrivateKey">jira_client_certificate_and_private_key</a></code> | <code>str</code> | Jira PEM with client certificate and private key. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraIsOnPrem">jira_is_on_prem</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Jira instance is on prem     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPassword">jira_password</a></code> | <code>str</code> | Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPat">jira_pat</a></code> | <code>str</code> | Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerCa">jira_server_ca</a></code> | <code>str</code> | Jira server CA. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerType">jira_server_type</a></code> | <code>str</code> | Jira server type     - Defaults to `CLOUD`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUsername">jira_username</a></code> | <code>str</code> | Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.projectId">project_id</a></code> | <code>str</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.scope">scope</a></code> | <code>str</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `jira_url`<sup>Required</sup> <a name="jira_url" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUrl"></a>

```python
jira_url: str
```

- *Type:* str

Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_url IntegrationJira#jira_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#name IntegrationJira#name}

---

##### `jira_allow_insecure_tls`<sup>Optional</sup> <a name="jira_allow_insecure_tls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraAllowInsecureTls"></a>

```python
jira_allow_insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Jira integration TLS setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_allow_insecure_tls IntegrationJira#jira_allow_insecure_tls}

---

##### `jira_client_certificate_and_private_key`<sup>Optional</sup> <a name="jira_client_certificate_and_private_key" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraClientCertificateAndPrivateKey"></a>

```python
jira_client_certificate_and_private_key: str
```

- *Type:* str

Jira PEM with client certificate and private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_client_certificate_and_private_key IntegrationJira#jira_client_certificate_and_private_key}

---

##### `jira_is_on_prem`<sup>Optional</sup> <a name="jira_is_on_prem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraIsOnPrem"></a>

```python
jira_is_on_prem: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Jira instance is on prem     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_is_on_prem IntegrationJira#jira_is_on_prem}

---

##### `jira_password`<sup>Optional</sup> <a name="jira_password" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPassword"></a>

```python
jira_password: str
```

- *Type:* str

Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_password IntegrationJira#jira_password}

---

##### `jira_pat`<sup>Optional</sup> <a name="jira_pat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPat"></a>

```python
jira_pat: str
```

- *Type:* str

Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_pat IntegrationJira#jira_pat}

---

##### `jira_server_ca`<sup>Optional</sup> <a name="jira_server_ca" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerCa"></a>

```python
jira_server_ca: str
```

- *Type:* str

Jira server CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_server_ca IntegrationJira#jira_server_ca}

---

##### `jira_server_type`<sup>Optional</sup> <a name="jira_server_type" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerType"></a>

```python
jira_server_type: str
```

- *Type:* str

Jira server type     - Defaults to `CLOUD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_server_type IntegrationJira#jira_server_type}

---

##### `jira_username`<sup>Optional</sup> <a name="jira_username" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUsername"></a>

```python
jira_username: str
```

- *Type:* str

Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_username IntegrationJira#jira_username}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#project_id IntegrationJira#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.scope"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#scope IntegrationJira#scope}

---



