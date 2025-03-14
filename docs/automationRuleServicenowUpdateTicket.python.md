# `automationRuleServicenowUpdateTicket` Submodule <a name="`automationRuleServicenowUpdateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleServicenowUpdateTicket <a name="AutomationRuleServicenowUpdateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket wiz_automation_rule_servicenow_update_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_servicenow_update_ticket

automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket(
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
  enabled: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  servicenow_attach_issues_report: typing.Union[bool, IResolvable] = None,
  servicenow_fields: str = None,
  servicenow_table_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.filters">filters</a></code> | <code>str</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.integrationId">integration_id</a></code> | <code>str</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.triggerSource">trigger_source</a></code> | <code>str</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabled?     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Wiz internal ID for a project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowAttachIssuesReport">servicenow_attach_issues_report</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowFields">servicenow_fields</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowTableName">servicenow_table_name</a></code> | <code>str</code> | Table name to which new tickets will be added to, e.g: 'incident'.     - Defaults to `incident`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.description"></a>

- *Type:* str

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#description AutomationRuleServicenowUpdateTicket#description}

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.filters"></a>

- *Type:* str

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#filters AutomationRuleServicenowUpdateTicket#filters}

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.integrationId"></a>

- *Type:* str

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#integration_id AutomationRuleServicenowUpdateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.name"></a>

- *Type:* str

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#name AutomationRuleServicenowUpdateTicket#name}

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.triggerSource"></a>

- *Type:* str

Trigger source.

* Allowed values:
  - ISSUES
  - CLOUD_EVENTS
  - CONTROL
  - CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#trigger_source AutomationRuleServicenowUpdateTicket#trigger_source}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.triggerType"></a>

- *Type:* typing.List[str]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_servicenow_update_ticket.
- Allowed values:
- CREATED
- UPDATED
- RESOLVED
- REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#trigger_type AutomationRuleServicenowUpdateTicket#trigger_type}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabled?     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#enabled AutomationRuleServicenowUpdateTicket#enabled}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.projectId"></a>

- *Type:* str

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#project_id AutomationRuleServicenowUpdateTicket#project_id}

---

##### `servicenow_attach_issues_report`<sup>Optional</sup> <a name="servicenow_attach_issues_report" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowAttachIssuesReport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_attach_issues_report AutomationRuleServicenowUpdateTicket#servicenow_attach_issues_report}

---

##### `servicenow_fields`<sup>Optional</sup> <a name="servicenow_fields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowFields"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}.

---

##### `servicenow_table_name`<sup>Optional</sup> <a name="servicenow_table_name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowTableName"></a>

- *Type:* str

Table name to which new tickets will be added to, e.g: 'incident'.     - Defaults to `incident`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_table_name AutomationRuleServicenowUpdateTicket#servicenow_table_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowAttachIssuesReport">reset_servicenow_attach_issues_report</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowFields">reset_servicenow_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowTableName">reset_servicenow_table_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_servicenow_attach_issues_report` <a name="reset_servicenow_attach_issues_report" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowAttachIssuesReport"></a>

```python
def reset_servicenow_attach_issues_report() -> None
```

##### `reset_servicenow_fields` <a name="reset_servicenow_fields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowFields"></a>

```python
def reset_servicenow_fields() -> None
```

##### `reset_servicenow_table_name` <a name="reset_servicenow_table_name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowTableName"></a>

```python
def reset_servicenow_table_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutomationRuleServicenowUpdateTicket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_servicenow_update_ticket

automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_servicenow_update_ticket

automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_servicenow_update_ticket

automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_servicenow_update_ticket

automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutomationRuleServicenowUpdateTicket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutomationRuleServicenowUpdateTicket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutomationRuleServicenowUpdateTicket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutomationRuleServicenowUpdateTicket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filtersInput">filters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationIdInput">integration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReportInput">servicenow_attach_issues_report_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFieldsInput">servicenow_fields_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableNameInput">servicenow_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSourceInput">trigger_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerTypeInput">trigger_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filters">filters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReport">servicenow_attach_issues_report</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFields">servicenow_fields</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableName">servicenow_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSource">trigger_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filtersInput"></a>

```python
filters_input: str
```

- *Type:* str

---

##### `integration_id_input`<sup>Optional</sup> <a name="integration_id_input" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationIdInput"></a>

```python
integration_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `servicenow_attach_issues_report_input`<sup>Optional</sup> <a name="servicenow_attach_issues_report_input" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReportInput"></a>

```python
servicenow_attach_issues_report_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `servicenow_fields_input`<sup>Optional</sup> <a name="servicenow_fields_input" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFieldsInput"></a>

```python
servicenow_fields_input: str
```

- *Type:* str

---

##### `servicenow_table_name_input`<sup>Optional</sup> <a name="servicenow_table_name_input" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableNameInput"></a>

```python
servicenow_table_name_input: str
```

- *Type:* str

---

##### `trigger_source_input`<sup>Optional</sup> <a name="trigger_source_input" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSourceInput"></a>

```python
trigger_source_input: str
```

- *Type:* str

---

##### `trigger_type_input`<sup>Optional</sup> <a name="trigger_type_input" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerTypeInput"></a>

```python
trigger_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filters"></a>

```python
filters: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `servicenow_attach_issues_report`<sup>Required</sup> <a name="servicenow_attach_issues_report" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReport"></a>

```python
servicenow_attach_issues_report: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `servicenow_fields`<sup>Required</sup> <a name="servicenow_fields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFields"></a>

```python
servicenow_fields: str
```

- *Type:* str

---

##### `servicenow_table_name`<sup>Required</sup> <a name="servicenow_table_name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableName"></a>

```python
servicenow_table_name: str
```

- *Type:* str

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerType"></a>

```python
trigger_type: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleServicenowUpdateTicketConfig <a name="AutomationRuleServicenowUpdateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_servicenow_update_ticket

automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig(
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
  enabled: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  servicenow_attach_issues_report: typing.Union[bool, IResolvable] = None,
  servicenow_fields: str = None,
  servicenow_table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.description">description</a></code> | <code>str</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.filters">filters</a></code> | <code>str</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.integrationId">integration_id</a></code> | <code>str</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.name">name</a></code> | <code>str</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerSource">trigger_source</a></code> | <code>str</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabled?     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.projectId">project_id</a></code> | <code>str</code> | Wiz internal ID for a project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowAttachIssuesReport">servicenow_attach_issues_report</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowFields">servicenow_fields</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowTableName">servicenow_table_name</a></code> | <code>str</code> | Table name to which new tickets will be added to, e.g: 'incident'.     - Defaults to `incident`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#description AutomationRuleServicenowUpdateTicket#description}

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.filters"></a>

```python
filters: str
```

- *Type:* str

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#filters AutomationRuleServicenowUpdateTicket#filters}

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#integration_id AutomationRuleServicenowUpdateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#name AutomationRuleServicenowUpdateTicket#name}

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

Trigger source.

* Allowed values:
  - ISSUES
  - CLOUD_EVENTS
  - CONTROL
  - CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#trigger_source AutomationRuleServicenowUpdateTicket#trigger_source}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerType"></a>

```python
trigger_type: typing.List[str]
```

- *Type:* typing.List[str]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_servicenow_update_ticket.
- Allowed values:
- CREATED
- UPDATED
- RESOLVED
- REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#trigger_type AutomationRuleServicenowUpdateTicket#trigger_type}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabled?     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#enabled AutomationRuleServicenowUpdateTicket#enabled}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#project_id AutomationRuleServicenowUpdateTicket#project_id}

---

##### `servicenow_attach_issues_report`<sup>Optional</sup> <a name="servicenow_attach_issues_report" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowAttachIssuesReport"></a>

```python
servicenow_attach_issues_report: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_attach_issues_report AutomationRuleServicenowUpdateTicket#servicenow_attach_issues_report}

---

##### `servicenow_fields`<sup>Optional</sup> <a name="servicenow_fields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowFields"></a>

```python
servicenow_fields: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}.

---

##### `servicenow_table_name`<sup>Optional</sup> <a name="servicenow_table_name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowTableName"></a>

```python
servicenow_table_name: str
```

- *Type:* str

Table name to which new tickets will be added to, e.g: 'incident'.     - Defaults to `incident`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_table_name AutomationRuleServicenowUpdateTicket#servicenow_table_name}

---



