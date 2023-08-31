# `wiz_automation_rule_jira_transition_ticket`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_jira_transition_ticket`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket).

# `automationRuleJiraTransitionTicket` Submodule <a name="`automationRuleJiraTransitionTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraTransitionTicket <a name="AutomationRuleJiraTransitionTicket" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket wiz_automation_rule_jira_transition_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_transition_ticket

automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket(
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
  jira_advanced_fields: str = None,
  jira_attach_evidence_csv: typing.Union[bool, IResolvable] = None,
  jira_comment: str = None,
  jira_comment_on_transition: typing.Union[bool, IResolvable] = None,
  jira_project: str = None,
  jira_transition_id: str = None,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.filters">filters</a></code> | <code>str</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.integrationId">integration_id</a></code> | <code>str</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.triggerSource">trigger_source</a></code> | <code>str</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraAdvancedFields">jira_advanced_fields</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraAttachEvidenceCsv">jira_attach_evidence_csv</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraComment">jira_comment</a></code> | <code>str</code> | Issue Jira comment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraCommentOnTransition">jira_comment_on_transition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraProject">jira_project</a></code> | <code>str</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraTransitionId">jira_transition_id</a></code> | <code>str</code> | Issue transition ID or Name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Wiz internal ID for a project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.filters"></a>

- *Type:* str

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#filters AutomationRuleJiraTransitionTicket#filters}

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.integrationId"></a>

- *Type:* str

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#integration_id AutomationRuleJiraTransitionTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.name"></a>

- *Type:* str

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#name AutomationRuleJiraTransitionTicket#name}

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.triggerSource"></a>

- *Type:* str

Trigger source.

* Allowed values:

  * ISSUES
  * CLOUD_EVENTS
  * CONTROL
  * CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#trigger_source AutomationRuleJiraTransitionTicket#trigger_source}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.triggerType"></a>

- *Type:* typing.List[str]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_transition_ticket.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#trigger_type AutomationRuleJiraTransitionTicket#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.description"></a>

- *Type:* str

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#description AutomationRuleJiraTransitionTicket#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#enabled AutomationRuleJiraTransitionTicket#enabled}

---

##### `jira_advanced_fields`<sup>Optional</sup> <a name="jira_advanced_fields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraAdvancedFields"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}.

---

##### `jira_attach_evidence_csv`<sup>Optional</sup> <a name="jira_attach_evidence_csv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraAttachEvidenceCsv"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_attach_evidence_csv AutomationRuleJiraTransitionTicket#jira_attach_evidence_csv}

---

##### `jira_comment`<sup>Optional</sup> <a name="jira_comment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraComment"></a>

- *Type:* str

Issue Jira comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_comment AutomationRuleJiraTransitionTicket#jira_comment}

---

##### `jira_comment_on_transition`<sup>Optional</sup> <a name="jira_comment_on_transition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraCommentOnTransition"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_comment_on_transition AutomationRuleJiraTransitionTicket#jira_comment_on_transition}

---

##### `jira_project`<sup>Optional</sup> <a name="jira_project" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraProject"></a>

- *Type:* str

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_project AutomationRuleJiraTransitionTicket#jira_project}

---

##### `jira_transition_id`<sup>Optional</sup> <a name="jira_transition_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraTransitionId"></a>

- *Type:* str

Issue transition ID or Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_transition_id AutomationRuleJiraTransitionTicket#jira_transition_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.projectId"></a>

- *Type:* str

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#project_id AutomationRuleJiraTransitionTicket#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAdvancedFields">reset_jira_advanced_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAttachEvidenceCsv">reset_jira_attach_evidence_csv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraComment">reset_jira_comment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraCommentOnTransition">reset_jira_comment_on_transition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraProject">reset_jira_project</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraTransitionId">reset_jira_transition_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_jira_advanced_fields` <a name="reset_jira_advanced_fields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAdvancedFields"></a>

```python
def reset_jira_advanced_fields() -> None
```

##### `reset_jira_attach_evidence_csv` <a name="reset_jira_attach_evidence_csv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAttachEvidenceCsv"></a>

```python
def reset_jira_attach_evidence_csv() -> None
```

##### `reset_jira_comment` <a name="reset_jira_comment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraComment"></a>

```python
def reset_jira_comment() -> None
```

##### `reset_jira_comment_on_transition` <a name="reset_jira_comment_on_transition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraCommentOnTransition"></a>

```python
def reset_jira_comment_on_transition() -> None
```

##### `reset_jira_project` <a name="reset_jira_project" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraProject"></a>

```python
def reset_jira_project() -> None
```

##### `reset_jira_transition_id` <a name="reset_jira_transition_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraTransitionId"></a>

```python
def reset_jira_transition_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_transition_ticket

automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_transition_ticket

automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_transition_ticket

automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filtersInput">filters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationIdInput">integration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFieldsInput">jira_advanced_fields_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsvInput">jira_attach_evidence_csv_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentInput">jira_comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransitionInput">jira_comment_on_transition_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProjectInput">jira_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionIdInput">jira_transition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSourceInput">trigger_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerTypeInput">trigger_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filters">filters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFields">jira_advanced_fields</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsv">jira_attach_evidence_csv</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraComment">jira_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransition">jira_comment_on_transition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProject">jira_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionId">jira_transition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSource">trigger_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filtersInput"></a>

```python
filters_input: str
```

- *Type:* str

---

##### `integration_id_input`<sup>Optional</sup> <a name="integration_id_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationIdInput"></a>

```python
integration_id_input: str
```

- *Type:* str

---

##### `jira_advanced_fields_input`<sup>Optional</sup> <a name="jira_advanced_fields_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFieldsInput"></a>

```python
jira_advanced_fields_input: str
```

- *Type:* str

---

##### `jira_attach_evidence_csv_input`<sup>Optional</sup> <a name="jira_attach_evidence_csv_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsvInput"></a>

```python
jira_attach_evidence_csv_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_comment_input`<sup>Optional</sup> <a name="jira_comment_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentInput"></a>

```python
jira_comment_input: str
```

- *Type:* str

---

##### `jira_comment_on_transition_input`<sup>Optional</sup> <a name="jira_comment_on_transition_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransitionInput"></a>

```python
jira_comment_on_transition_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_project_input`<sup>Optional</sup> <a name="jira_project_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProjectInput"></a>

```python
jira_project_input: str
```

- *Type:* str

---

##### `jira_transition_id_input`<sup>Optional</sup> <a name="jira_transition_id_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionIdInput"></a>

```python
jira_transition_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `trigger_source_input`<sup>Optional</sup> <a name="trigger_source_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSourceInput"></a>

```python
trigger_source_input: str
```

- *Type:* str

---

##### `trigger_type_input`<sup>Optional</sup> <a name="trigger_type_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerTypeInput"></a>

```python
trigger_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filters"></a>

```python
filters: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `jira_advanced_fields`<sup>Required</sup> <a name="jira_advanced_fields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFields"></a>

```python
jira_advanced_fields: str
```

- *Type:* str

---

##### `jira_attach_evidence_csv`<sup>Required</sup> <a name="jira_attach_evidence_csv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsv"></a>

```python
jira_attach_evidence_csv: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_comment`<sup>Required</sup> <a name="jira_comment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraComment"></a>

```python
jira_comment: str
```

- *Type:* str

---

##### `jira_comment_on_transition`<sup>Required</sup> <a name="jira_comment_on_transition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransition"></a>

```python
jira_comment_on_transition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_project`<sup>Required</sup> <a name="jira_project" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProject"></a>

```python
jira_project: str
```

- *Type:* str

---

##### `jira_transition_id`<sup>Required</sup> <a name="jira_transition_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionId"></a>

```python
jira_transition_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerType"></a>

```python
trigger_type: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraTransitionTicketConfig <a name="AutomationRuleJiraTransitionTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_transition_ticket

automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig(
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
  jira_advanced_fields: str = None,
  jira_attach_evidence_csv: typing.Union[bool, IResolvable] = None,
  jira_comment: str = None,
  jira_comment_on_transition: typing.Union[bool, IResolvable] = None,
  jira_project: str = None,
  jira_transition_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.filters">filters</a></code> | <code>str</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.integrationId">integration_id</a></code> | <code>str</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.name">name</a></code> | <code>str</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerSource">trigger_source</a></code> | <code>str</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.description">description</a></code> | <code>str</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAdvancedFields">jira_advanced_fields</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAttachEvidenceCsv">jira_attach_evidence_csv</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraComment">jira_comment</a></code> | <code>str</code> | Issue Jira comment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraCommentOnTransition">jira_comment_on_transition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraProject">jira_project</a></code> | <code>str</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraTransitionId">jira_transition_id</a></code> | <code>str</code> | Issue transition ID or Name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.projectId">project_id</a></code> | <code>str</code> | Wiz internal ID for a project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.filters"></a>

```python
filters: str
```

- *Type:* str

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#filters AutomationRuleJiraTransitionTicket#filters}

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#integration_id AutomationRuleJiraTransitionTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#name AutomationRuleJiraTransitionTicket#name}

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#trigger_source AutomationRuleJiraTransitionTicket#trigger_source}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerType"></a>

```python
trigger_type: typing.List[str]
```

- *Type:* typing.List[str]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_transition_ticket.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#trigger_type AutomationRuleJiraTransitionTicket#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#description AutomationRuleJiraTransitionTicket#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#enabled AutomationRuleJiraTransitionTicket#enabled}

---

##### `jira_advanced_fields`<sup>Optional</sup> <a name="jira_advanced_fields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAdvancedFields"></a>

```python
jira_advanced_fields: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}.

---

##### `jira_attach_evidence_csv`<sup>Optional</sup> <a name="jira_attach_evidence_csv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAttachEvidenceCsv"></a>

```python
jira_attach_evidence_csv: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_attach_evidence_csv AutomationRuleJiraTransitionTicket#jira_attach_evidence_csv}

---

##### `jira_comment`<sup>Optional</sup> <a name="jira_comment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraComment"></a>

```python
jira_comment: str
```

- *Type:* str

Issue Jira comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_comment AutomationRuleJiraTransitionTicket#jira_comment}

---

##### `jira_comment_on_transition`<sup>Optional</sup> <a name="jira_comment_on_transition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraCommentOnTransition"></a>

```python
jira_comment_on_transition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_comment_on_transition AutomationRuleJiraTransitionTicket#jira_comment_on_transition}

---

##### `jira_project`<sup>Optional</sup> <a name="jira_project" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraProject"></a>

```python
jira_project: str
```

- *Type:* str

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_project AutomationRuleJiraTransitionTicket#jira_project}

---

##### `jira_transition_id`<sup>Optional</sup> <a name="jira_transition_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraTransitionId"></a>

```python
jira_transition_id: str
```

- *Type:* str

Issue transition ID or Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_transition_id AutomationRuleJiraTransitionTicket#jira_transition_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#project_id AutomationRuleJiraTransitionTicket#project_id}

---



