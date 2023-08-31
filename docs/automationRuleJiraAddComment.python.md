# `wiz_automation_rule_jira_add_comment`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_jira_add_comment`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment).

# `automationRuleJiraAddComment` Submodule <a name="`automationRuleJiraAddComment` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraAddComment <a name="AutomationRuleJiraAddComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment wiz_automation_rule_jira_add_comment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_add_comment

automationRuleJiraAddComment.AutomationRuleJiraAddComment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filters: str,
  integration_id: str,
  name: str,
  trigger_source: str,
  trigger_type: typing.List[str],
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  jira_add_issues_report: typing.Union[bool, IResolvable] = None,
  jira_comment: str = None,
  jira_project_key: str = None,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.filters">filters</a></code> | <code>str</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.integrationId">integration_id</a></code> | <code>str</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.triggerSource">trigger_source</a></code> | <code>str</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.jiraAddIssuesReport">jira_add_issues_report</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to attach a report on all open issues as an attachment to ticket, only relevant in CONTROL triggered actions - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.jiraComment">jira_comment</a></code> | <code>str</code> | Issue Jira comment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.jiraProjectKey">jira_project_key</a></code> | <code>str</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Wiz internal ID for a project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.filters"></a>

- *Type:* str

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#filters AutomationRuleJiraAddComment#filters}

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.integrationId"></a>

- *Type:* str

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#integration_id AutomationRuleJiraAddComment#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.name"></a>

- *Type:* str

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#name AutomationRuleJiraAddComment#name}

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.triggerSource"></a>

- *Type:* str

Trigger source.

* Allowed values:

  * ISSUES
  * CLOUD_EVENTS
  * CONTROL
  * CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#trigger_source AutomationRuleJiraAddComment#trigger_source}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.triggerType"></a>

- *Type:* typing.List[str]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_add_comment.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#trigger_type AutomationRuleJiraAddComment#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.description"></a>

- *Type:* str

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#description AutomationRuleJiraAddComment#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#enabled AutomationRuleJiraAddComment#enabled}

---

##### `jira_add_issues_report`<sup>Optional</sup> <a name="jira_add_issues_report" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.jiraAddIssuesReport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to attach a report on all open issues as an attachment to ticket, only relevant in CONTROL triggered actions - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#jira_add_issues_report AutomationRuleJiraAddComment#jira_add_issues_report}

---

##### `jira_comment`<sup>Optional</sup> <a name="jira_comment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.jiraComment"></a>

- *Type:* str

Issue Jira comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#jira_comment AutomationRuleJiraAddComment#jira_comment}

---

##### `jira_project_key`<sup>Optional</sup> <a name="jira_project_key" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.jiraProjectKey"></a>

- *Type:* str

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#jira_project_key AutomationRuleJiraAddComment#jira_project_key}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.projectId"></a>

- *Type:* str

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#project_id AutomationRuleJiraAddComment#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraAddIssuesReport">reset_jira_add_issues_report</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraComment">reset_jira_comment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraProjectKey">reset_jira_project_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_jira_add_issues_report` <a name="reset_jira_add_issues_report" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraAddIssuesReport"></a>

```python
def reset_jira_add_issues_report() -> None
```

##### `reset_jira_comment` <a name="reset_jira_comment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraComment"></a>

```python
def reset_jira_comment() -> None
```

##### `reset_jira_project_key` <a name="reset_jira_project_key" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraProjectKey"></a>

```python
def reset_jira_project_key() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_add_comment

automationRuleJiraAddComment.AutomationRuleJiraAddComment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_add_comment

automationRuleJiraAddComment.AutomationRuleJiraAddComment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_add_comment

automationRuleJiraAddComment.AutomationRuleJiraAddComment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filtersInput">filters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationIdInput">integration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReportInput">jira_add_issues_report_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraCommentInput">jira_comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKeyInput">jira_project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSourceInput">trigger_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerTypeInput">trigger_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filters">filters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReport">jira_add_issues_report</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraComment">jira_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKey">jira_project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSource">trigger_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filtersInput"></a>

```python
filters_input: str
```

- *Type:* str

---

##### `integration_id_input`<sup>Optional</sup> <a name="integration_id_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationIdInput"></a>

```python
integration_id_input: str
```

- *Type:* str

---

##### `jira_add_issues_report_input`<sup>Optional</sup> <a name="jira_add_issues_report_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReportInput"></a>

```python
jira_add_issues_report_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_comment_input`<sup>Optional</sup> <a name="jira_comment_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraCommentInput"></a>

```python
jira_comment_input: str
```

- *Type:* str

---

##### `jira_project_key_input`<sup>Optional</sup> <a name="jira_project_key_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKeyInput"></a>

```python
jira_project_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `trigger_source_input`<sup>Optional</sup> <a name="trigger_source_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSourceInput"></a>

```python
trigger_source_input: str
```

- *Type:* str

---

##### `trigger_type_input`<sup>Optional</sup> <a name="trigger_type_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerTypeInput"></a>

```python
trigger_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filters"></a>

```python
filters: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `jira_add_issues_report`<sup>Required</sup> <a name="jira_add_issues_report" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReport"></a>

```python
jira_add_issues_report: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_comment`<sup>Required</sup> <a name="jira_comment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraComment"></a>

```python
jira_comment: str
```

- *Type:* str

---

##### `jira_project_key`<sup>Required</sup> <a name="jira_project_key" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKey"></a>

```python
jira_project_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerType"></a>

```python
trigger_type: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraAddCommentConfig <a name="AutomationRuleJiraAddCommentConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_add_comment

automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filters: str,
  integration_id: str,
  name: str,
  trigger_source: str,
  trigger_type: typing.List[str],
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  jira_add_issues_report: typing.Union[bool, IResolvable] = None,
  jira_comment: str = None,
  jira_project_key: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.filters">filters</a></code> | <code>str</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.integrationId">integration_id</a></code> | <code>str</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.name">name</a></code> | <code>str</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerSource">trigger_source</a></code> | <code>str</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.description">description</a></code> | <code>str</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraAddIssuesReport">jira_add_issues_report</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to attach a report on all open issues as an attachment to ticket, only relevant in CONTROL triggered actions - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraComment">jira_comment</a></code> | <code>str</code> | Issue Jira comment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraProjectKey">jira_project_key</a></code> | <code>str</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.projectId">project_id</a></code> | <code>str</code> | Wiz internal ID for a project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.filters"></a>

```python
filters: str
```

- *Type:* str

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#filters AutomationRuleJiraAddComment#filters}

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#integration_id AutomationRuleJiraAddComment#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#name AutomationRuleJiraAddComment#name}

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#trigger_source AutomationRuleJiraAddComment#trigger_source}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerType"></a>

```python
trigger_type: typing.List[str]
```

- *Type:* typing.List[str]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_add_comment.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#trigger_type AutomationRuleJiraAddComment#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#description AutomationRuleJiraAddComment#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#enabled AutomationRuleJiraAddComment#enabled}

---

##### `jira_add_issues_report`<sup>Optional</sup> <a name="jira_add_issues_report" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraAddIssuesReport"></a>

```python
jira_add_issues_report: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to attach a report on all open issues as an attachment to ticket, only relevant in CONTROL triggered actions - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#jira_add_issues_report AutomationRuleJiraAddComment#jira_add_issues_report}

---

##### `jira_comment`<sup>Optional</sup> <a name="jira_comment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraComment"></a>

```python
jira_comment: str
```

- *Type:* str

Issue Jira comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#jira_comment AutomationRuleJiraAddComment#jira_comment}

---

##### `jira_project_key`<sup>Optional</sup> <a name="jira_project_key" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraProjectKey"></a>

```python
jira_project_key: str
```

- *Type:* str

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#jira_project_key AutomationRuleJiraAddComment#jira_project_key}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#project_id AutomationRuleJiraAddComment#project_id}

---



