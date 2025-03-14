# `integrationAwsSns` Submodule <a name="`integrationAwsSns` Submodule" id="rhizo-co-terraform-provider-wiz.integrationAwsSns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsSns <a name="IntegrationAwsSns" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns wiz_integration_aws_sns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_aws_sns

integrationAwsSns.IntegrationAwsSns(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_sns_access_method: str,
  name: str,
  aws_sns_connector_id: str = None,
  aws_sns_customer_role_arn: str = None,
  aws_sns_topic_arn: str = None,
  project_id: str = None,
  scope: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsAccessMethod">aws_sns_access_method</a></code> | <code>str</code> | The access method this integration should use. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsConnectorId">aws_sns_connector_id</a></code> | <code>str</code> | Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsCustomerRoleArn">aws_sns_customer_role_arn</a></code> | <code>str</code> | Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsTopicArn">aws_sns_topic_arn</a></code> | <code>str</code> | The SNS Topic Arn. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_sns_access_method`<sup>Required</sup> <a name="aws_sns_access_method" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsAccessMethod"></a>

- *Type:* str

The access method this integration should use.

* Allowed values:
  - ASSUME_CONNECTOR_ROLE
  - ASSUME_SPECIFIED_ROLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_access_method IntegrationAwsSns#aws_sns_access_method}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.name"></a>

- *Type:* str

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#name IntegrationAwsSns#name}

---

##### `aws_sns_connector_id`<sup>Optional</sup> <a name="aws_sns_connector_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsConnectorId"></a>

- *Type:* str

Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken.

* Conflicts with `[aws_sns_customer_role_arn]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_connector_id IntegrationAwsSns#aws_sns_connector_id}

---

##### `aws_sns_customer_role_arn`<sup>Optional</sup> <a name="aws_sns_customer_role_arn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsCustomerRoleArn"></a>

- *Type:* str

Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID).

* Conflicts with `[aws_sns_connector_id]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_customer_role_arn IntegrationAwsSns#aws_sns_customer_role_arn}

---

##### `aws_sns_topic_arn`<sup>Optional</sup> <a name="aws_sns_topic_arn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsTopicArn"></a>

- *Type:* str

The SNS Topic Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_topic_arn IntegrationAwsSns#aws_sns_topic_arn}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.projectId"></a>

- *Type:* str

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#project_id IntegrationAwsSns#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#scope IntegrationAwsSns#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsConnectorId">reset_aws_sns_connector_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsCustomerRoleArn">reset_aws_sns_customer_role_arn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsTopicArn">reset_aws_sns_topic_arn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetScope">reset_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_aws_sns_connector_id` <a name="reset_aws_sns_connector_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsConnectorId"></a>

```python
def reset_aws_sns_connector_id() -> None
```

##### `reset_aws_sns_customer_role_arn` <a name="reset_aws_sns_customer_role_arn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsCustomerRoleArn"></a>

```python
def reset_aws_sns_customer_role_arn() -> None
```

##### `reset_aws_sns_topic_arn` <a name="reset_aws_sns_topic_arn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsTopicArn"></a>

```python
def reset_aws_sns_topic_arn() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_scope` <a name="reset_scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetScope"></a>

```python
def reset_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationAwsSns resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_aws_sns

integrationAwsSns.IntegrationAwsSns.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_aws_sns

integrationAwsSns.IntegrationAwsSns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_aws_sns

integrationAwsSns.IntegrationAwsSns.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_aws_sns

integrationAwsSns.IntegrationAwsSns.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationAwsSns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationAwsSns to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationAwsSns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsSns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethodInput">aws_sns_access_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorIdInput">aws_sns_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArnInput">aws_sns_customer_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArnInput">aws_sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethod">aws_sns_access_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorId">aws_sns_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArn">aws_sns_customer_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArn">aws_sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `aws_sns_access_method_input`<sup>Optional</sup> <a name="aws_sns_access_method_input" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethodInput"></a>

```python
aws_sns_access_method_input: str
```

- *Type:* str

---

##### `aws_sns_connector_id_input`<sup>Optional</sup> <a name="aws_sns_connector_id_input" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorIdInput"></a>

```python
aws_sns_connector_id_input: str
```

- *Type:* str

---

##### `aws_sns_customer_role_arn_input`<sup>Optional</sup> <a name="aws_sns_customer_role_arn_input" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArnInput"></a>

```python
aws_sns_customer_role_arn_input: str
```

- *Type:* str

---

##### `aws_sns_topic_arn_input`<sup>Optional</sup> <a name="aws_sns_topic_arn_input" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArnInput"></a>

```python
aws_sns_topic_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `aws_sns_access_method`<sup>Required</sup> <a name="aws_sns_access_method" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethod"></a>

```python
aws_sns_access_method: str
```

- *Type:* str

---

##### `aws_sns_connector_id`<sup>Required</sup> <a name="aws_sns_connector_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorId"></a>

```python
aws_sns_connector_id: str
```

- *Type:* str

---

##### `aws_sns_customer_role_arn`<sup>Required</sup> <a name="aws_sns_customer_role_arn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArn"></a>

```python
aws_sns_customer_role_arn: str
```

- *Type:* str

---

##### `aws_sns_topic_arn`<sup>Required</sup> <a name="aws_sns_topic_arn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArn"></a>

```python
aws_sns_topic_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsSnsConfig <a name="IntegrationAwsSnsConfig" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import integration_aws_sns

integrationAwsSns.IntegrationAwsSnsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_sns_access_method: str,
  name: str,
  aws_sns_connector_id: str = None,
  aws_sns_customer_role_arn: str = None,
  aws_sns_topic_arn: str = None,
  project_id: str = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsAccessMethod">aws_sns_access_method</a></code> | <code>str</code> | The access method this integration should use. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.name">name</a></code> | <code>str</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsConnectorId">aws_sns_connector_id</a></code> | <code>str</code> | Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsCustomerRoleArn">aws_sns_customer_role_arn</a></code> | <code>str</code> | Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsTopicArn">aws_sns_topic_arn</a></code> | <code>str</code> | The SNS Topic Arn. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.projectId">project_id</a></code> | <code>str</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.scope">scope</a></code> | <code>str</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_sns_access_method`<sup>Required</sup> <a name="aws_sns_access_method" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsAccessMethod"></a>

```python
aws_sns_access_method: str
```

- *Type:* str

The access method this integration should use.

* Allowed values:
  - ASSUME_CONNECTOR_ROLE
  - ASSUME_SPECIFIED_ROLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_access_method IntegrationAwsSns#aws_sns_access_method}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#name IntegrationAwsSns#name}

---

##### `aws_sns_connector_id`<sup>Optional</sup> <a name="aws_sns_connector_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsConnectorId"></a>

```python
aws_sns_connector_id: str
```

- *Type:* str

Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken.

* Conflicts with `[aws_sns_customer_role_arn]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_connector_id IntegrationAwsSns#aws_sns_connector_id}

---

##### `aws_sns_customer_role_arn`<sup>Optional</sup> <a name="aws_sns_customer_role_arn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsCustomerRoleArn"></a>

```python
aws_sns_customer_role_arn: str
```

- *Type:* str

Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID).

* Conflicts with `[aws_sns_connector_id]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_customer_role_arn IntegrationAwsSns#aws_sns_customer_role_arn}

---

##### `aws_sns_topic_arn`<sup>Optional</sup> <a name="aws_sns_topic_arn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsTopicArn"></a>

```python
aws_sns_topic_arn: str
```

- *Type:* str

The SNS Topic Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_topic_arn IntegrationAwsSns#aws_sns_topic_arn}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#project_id IntegrationAwsSns#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.scope"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#scope IntegrationAwsSns#scope}

---



