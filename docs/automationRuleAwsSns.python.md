# `wiz_automation_rule_aws_sns`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_aws_sns`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns).

# `automationRuleAwsSns` Submodule <a name="`automationRuleAwsSns` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleAwsSns <a name="AutomationRuleAwsSns" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns wiz_automation_rule_aws_sns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_aws_sns

automationRuleAwsSns.AutomationRuleAwsSns(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  filters: str,
  integration_id: str,
  name: str,
  trigger_source: str,
  trigger_type: typing.List[str],
  aws_sns_body: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.filters">filters</a></code> | <code>str</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.integrationId">integration_id</a></code> | <code>str</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.triggerSource">trigger_source</a></code> | <code>str</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.awsSnsBody">aws_sns_body</a></code> | <code>str</code> | AWS SNS body. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Wiz internal ID for a project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.description"></a>

- *Type:* str

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#description AutomationRuleAwsSns#description}

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.filters"></a>

- *Type:* str

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#filters AutomationRuleAwsSns#filters}

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.integrationId"></a>

- *Type:* str

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#integration_id AutomationRuleAwsSns#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.name"></a>

- *Type:* str

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#name AutomationRuleAwsSns#name}

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.triggerSource"></a>

- *Type:* str

Trigger source.

* Allowed values:

  * ISSUES
  * CLOUD_EVENTS
  * CONTROL
  * CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#trigger_source AutomationRuleAwsSns#trigger_source}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.triggerType"></a>

- *Type:* typing.List[str]

Trigger type.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#trigger_type AutomationRuleAwsSns#trigger_type}

---

##### `aws_sns_body`<sup>Optional</sup> <a name="aws_sns_body" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.awsSnsBody"></a>

- *Type:* str

AWS SNS body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#aws_sns_body AutomationRuleAwsSns#aws_sns_body}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#enabled AutomationRuleAwsSns#enabled}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.Initializer.parameter.projectId"></a>

- *Type:* str

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#project_id AutomationRuleAwsSns#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.resetAwsSnsBody">reset_aws_sns_body</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_aws_sns_body` <a name="reset_aws_sns_body" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.resetAwsSnsBody"></a>

```python
def reset_aws_sns_body() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_aws_sns

automationRuleAwsSns.AutomationRuleAwsSns.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_aws_sns

automationRuleAwsSns.AutomationRuleAwsSns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_aws_sns

automationRuleAwsSns.AutomationRuleAwsSns.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.awsSnsBodyInput">aws_sns_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.filtersInput">filters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.integrationIdInput">integration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.triggerSourceInput">trigger_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.triggerTypeInput">trigger_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.awsSnsBody">aws_sns_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.filters">filters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.triggerSource">trigger_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `aws_sns_body_input`<sup>Optional</sup> <a name="aws_sns_body_input" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.awsSnsBodyInput"></a>

```python
aws_sns_body_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.filtersInput"></a>

```python
filters_input: str
```

- *Type:* str

---

##### `integration_id_input`<sup>Optional</sup> <a name="integration_id_input" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.integrationIdInput"></a>

```python
integration_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `trigger_source_input`<sup>Optional</sup> <a name="trigger_source_input" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.triggerSourceInput"></a>

```python
trigger_source_input: str
```

- *Type:* str

---

##### `trigger_type_input`<sup>Optional</sup> <a name="trigger_type_input" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.triggerTypeInput"></a>

```python
trigger_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `aws_sns_body`<sup>Required</sup> <a name="aws_sns_body" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.awsSnsBody"></a>

```python
aws_sns_body: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.filters"></a>

```python
filters: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.triggerType"></a>

```python
trigger_type: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleAwsSnsConfig <a name="AutomationRuleAwsSnsConfig" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_aws_sns

automationRuleAwsSns.AutomationRuleAwsSnsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  filters: str,
  integration_id: str,
  name: str,
  trigger_source: str,
  trigger_type: typing.List[str],
  aws_sns_body: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.description">description</a></code> | <code>str</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.filters">filters</a></code> | <code>str</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.integrationId">integration_id</a></code> | <code>str</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.name">name</a></code> | <code>str</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.triggerSource">trigger_source</a></code> | <code>str</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.awsSnsBody">aws_sns_body</a></code> | <code>str</code> | AWS SNS body. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.projectId">project_id</a></code> | <code>str</code> | Wiz internal ID for a project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#description AutomationRuleAwsSns#description}

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.filters"></a>

```python
filters: str
```

- *Type:* str

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#filters AutomationRuleAwsSns#filters}

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#integration_id AutomationRuleAwsSns#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#name AutomationRuleAwsSns#name}

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

Trigger source.

* Allowed values:

  * ISSUES
  * CLOUD_EVENTS
  * CONTROL
  * CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#trigger_source AutomationRuleAwsSns#trigger_source}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.triggerType"></a>

```python
trigger_type: typing.List[str]
```

- *Type:* typing.List[str]

Trigger type.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#trigger_type AutomationRuleAwsSns#trigger_type}

---

##### `aws_sns_body`<sup>Optional</sup> <a name="aws_sns_body" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.awsSnsBody"></a>

```python
aws_sns_body: str
```

- *Type:* str

AWS SNS body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#aws_sns_body AutomationRuleAwsSns#aws_sns_body}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#enabled AutomationRuleAwsSns#enabled}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleAwsSns.AutomationRuleAwsSnsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_aws_sns#project_id AutomationRuleAwsSns#project_id}

---



