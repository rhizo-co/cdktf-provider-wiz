# `automationRuleJiraCreateTicket` Submodule <a name="`automationRuleJiraCreateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraCreateTicket <a name="AutomationRuleJiraCreateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket wiz_automation_rule_jira_create_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_create_ticket

automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket(
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
  jira_alternative_description_field: str = None,
  jira_assignee: str = None,
  jira_attach_evidence_csv: typing.Union[bool, IResolvable] = None,
  jira_components: typing.List[str] = None,
  jira_custom_fields: str = None,
  jira_description: str = None,
  jira_fix_version: typing.List[str] = None,
  jira_issue_type: str = None,
  jira_labels: typing.List[str] = None,
  jira_priority: str = None,
  jira_project: str = None,
  jira_summary: str = None,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.filters">filters</a></code> | <code>str</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.integrationId">integration_id</a></code> | <code>str</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.triggerSource">trigger_source</a></code> | <code>str</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabled?     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAlternativeDescriptionField">jira_alternative_description_field</a></code> | <code>str</code> | Issue alternative description field. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAssignee">jira_assignee</a></code> | <code>str</code> | Issue assignee. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAttachEvidenceCsv">jira_attach_evidence_csv</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Upload issue evidence CSV as attachment?     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraComponents">jira_components</a></code> | <code>typing.List[str]</code> | Issue components. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraCustomFields">jira_custom_fields</a></code> | <code>str</code> | Custom configuration fields as specified in Jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraDescription">jira_description</a></code> | <code>str</code> | Issue description     - Defaults to `Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraFixVersion">jira_fix_version</a></code> | <code>typing.List[str]</code> | Issue fix versions. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraIssueType">jira_issue_type</a></code> | <code>str</code> | Issue type     - Defaults to `Vulnerability`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraLabels">jira_labels</a></code> | <code>typing.List[str]</code> | Issue labels. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraPriority">jira_priority</a></code> | <code>str</code> | Issue priority. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraProject">jira_project</a></code> | <code>str</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraSummary">jira_summary</a></code> | <code>str</code> | Issue summary     - Defaults to `Wiz Issue: {{control.name}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Wiz internal ID for a project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.filters"></a>

- *Type:* str

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#filters AutomationRuleJiraCreateTicket#filters}

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.integrationId"></a>

- *Type:* str

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#integration_id AutomationRuleJiraCreateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.name"></a>

- *Type:* str

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#name AutomationRuleJiraCreateTicket#name}

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.triggerSource"></a>

- *Type:* str

Trigger source.

* Allowed values:
  - ISSUES
  - CLOUD_EVENTS
  - CONTROL
  - CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#trigger_source AutomationRuleJiraCreateTicket#trigger_source}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.triggerType"></a>

- *Type:* typing.List[str]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_create_ticket.
- Allowed values:
- CREATED
- UPDATED
- RESOLVED
- REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#trigger_type AutomationRuleJiraCreateTicket#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.description"></a>

- *Type:* str

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#description AutomationRuleJiraCreateTicket#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabled?     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#enabled AutomationRuleJiraCreateTicket#enabled}

---

##### `jira_alternative_description_field`<sup>Optional</sup> <a name="jira_alternative_description_field" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAlternativeDescriptionField"></a>

- *Type:* str

Issue alternative description field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_alternative_description_field AutomationRuleJiraCreateTicket#jira_alternative_description_field}

---

##### `jira_assignee`<sup>Optional</sup> <a name="jira_assignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAssignee"></a>

- *Type:* str

Issue assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_assignee AutomationRuleJiraCreateTicket#jira_assignee}

---

##### `jira_attach_evidence_csv`<sup>Optional</sup> <a name="jira_attach_evidence_csv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAttachEvidenceCsv"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Upload issue evidence CSV as attachment?     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_attach_evidence_csv AutomationRuleJiraCreateTicket#jira_attach_evidence_csv}

---

##### `jira_components`<sup>Optional</sup> <a name="jira_components" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraComponents"></a>

- *Type:* typing.List[str]

Issue components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_components AutomationRuleJiraCreateTicket#jira_components}

---

##### `jira_custom_fields`<sup>Optional</sup> <a name="jira_custom_fields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraCustomFields"></a>

- *Type:* str

Custom configuration fields as specified in Jira.

Make sure you add the fields that are configured as required in Jira Project, otherwise ticket creation will fail. Must be valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_custom_fields AutomationRuleJiraCreateTicket#jira_custom_fields}

---

##### `jira_description`<sup>Optional</sup> <a name="jira_description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraDescription"></a>

- *Type:* str

Issue description     - Defaults to `Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_description AutomationRuleJiraCreateTicket#jira_description}

---

##### `jira_fix_version`<sup>Optional</sup> <a name="jira_fix_version" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraFixVersion"></a>

- *Type:* typing.List[str]

Issue fix versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_fix_version AutomationRuleJiraCreateTicket#jira_fix_version}

---

##### `jira_issue_type`<sup>Optional</sup> <a name="jira_issue_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraIssueType"></a>

- *Type:* str

Issue type     - Defaults to `Vulnerability`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_issue_type AutomationRuleJiraCreateTicket#jira_issue_type}

---

##### `jira_labels`<sup>Optional</sup> <a name="jira_labels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraLabels"></a>

- *Type:* typing.List[str]

Issue labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_labels AutomationRuleJiraCreateTicket#jira_labels}

---

##### `jira_priority`<sup>Optional</sup> <a name="jira_priority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraPriority"></a>

- *Type:* str

Issue priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_priority AutomationRuleJiraCreateTicket#jira_priority}

---

##### `jira_project`<sup>Optional</sup> <a name="jira_project" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraProject"></a>

- *Type:* str

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_project AutomationRuleJiraCreateTicket#jira_project}

---

##### `jira_summary`<sup>Optional</sup> <a name="jira_summary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraSummary"></a>

- *Type:* str

Issue summary     - Defaults to `Wiz Issue: {{control.name}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_summary AutomationRuleJiraCreateTicket#jira_summary}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.projectId"></a>

- *Type:* str

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#project_id AutomationRuleJiraCreateTicket#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAlternativeDescriptionField">reset_jira_alternative_description_field</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAssignee">reset_jira_assignee</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAttachEvidenceCsv">reset_jira_attach_evidence_csv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraComponents">reset_jira_components</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraCustomFields">reset_jira_custom_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraDescription">reset_jira_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraFixVersion">reset_jira_fix_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraIssueType">reset_jira_issue_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraLabels">reset_jira_labels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraPriority">reset_jira_priority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraProject">reset_jira_project</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraSummary">reset_jira_summary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_jira_alternative_description_field` <a name="reset_jira_alternative_description_field" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAlternativeDescriptionField"></a>

```python
def reset_jira_alternative_description_field() -> None
```

##### `reset_jira_assignee` <a name="reset_jira_assignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAssignee"></a>

```python
def reset_jira_assignee() -> None
```

##### `reset_jira_attach_evidence_csv` <a name="reset_jira_attach_evidence_csv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAttachEvidenceCsv"></a>

```python
def reset_jira_attach_evidence_csv() -> None
```

##### `reset_jira_components` <a name="reset_jira_components" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraComponents"></a>

```python
def reset_jira_components() -> None
```

##### `reset_jira_custom_fields` <a name="reset_jira_custom_fields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraCustomFields"></a>

```python
def reset_jira_custom_fields() -> None
```

##### `reset_jira_description` <a name="reset_jira_description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraDescription"></a>

```python
def reset_jira_description() -> None
```

##### `reset_jira_fix_version` <a name="reset_jira_fix_version" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraFixVersion"></a>

```python
def reset_jira_fix_version() -> None
```

##### `reset_jira_issue_type` <a name="reset_jira_issue_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraIssueType"></a>

```python
def reset_jira_issue_type() -> None
```

##### `reset_jira_labels` <a name="reset_jira_labels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraLabels"></a>

```python
def reset_jira_labels() -> None
```

##### `reset_jira_priority` <a name="reset_jira_priority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraPriority"></a>

```python
def reset_jira_priority() -> None
```

##### `reset_jira_project` <a name="reset_jira_project" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraProject"></a>

```python
def reset_jira_project() -> None
```

##### `reset_jira_summary` <a name="reset_jira_summary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraSummary"></a>

```python
def reset_jira_summary() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutomationRuleJiraCreateTicket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_create_ticket

automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_create_ticket

automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_create_ticket

automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_create_ticket

automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutomationRuleJiraCreateTicket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutomationRuleJiraCreateTicket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutomationRuleJiraCreateTicket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutomationRuleJiraCreateTicket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filtersInput">filters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationIdInput">integration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionFieldInput">jira_alternative_description_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssigneeInput">jira_assignee_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsvInput">jira_attach_evidence_csv_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponentsInput">jira_components_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFieldsInput">jira_custom_fields_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescriptionInput">jira_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersionInput">jira_fix_version_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueTypeInput">jira_issue_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabelsInput">jira_labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriorityInput">jira_priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProjectInput">jira_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummaryInput">jira_summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSourceInput">trigger_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerTypeInput">trigger_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filters">filters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionField">jira_alternative_description_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssignee">jira_assignee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsv">jira_attach_evidence_csv</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponents">jira_components</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFields">jira_custom_fields</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescription">jira_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersion">jira_fix_version</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueType">jira_issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabels">jira_labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriority">jira_priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProject">jira_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummary">jira_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSource">trigger_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filtersInput"></a>

```python
filters_input: str
```

- *Type:* str

---

##### `integration_id_input`<sup>Optional</sup> <a name="integration_id_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationIdInput"></a>

```python
integration_id_input: str
```

- *Type:* str

---

##### `jira_alternative_description_field_input`<sup>Optional</sup> <a name="jira_alternative_description_field_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionFieldInput"></a>

```python
jira_alternative_description_field_input: str
```

- *Type:* str

---

##### `jira_assignee_input`<sup>Optional</sup> <a name="jira_assignee_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssigneeInput"></a>

```python
jira_assignee_input: str
```

- *Type:* str

---

##### `jira_attach_evidence_csv_input`<sup>Optional</sup> <a name="jira_attach_evidence_csv_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsvInput"></a>

```python
jira_attach_evidence_csv_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_components_input`<sup>Optional</sup> <a name="jira_components_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponentsInput"></a>

```python
jira_components_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jira_custom_fields_input`<sup>Optional</sup> <a name="jira_custom_fields_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFieldsInput"></a>

```python
jira_custom_fields_input: str
```

- *Type:* str

---

##### `jira_description_input`<sup>Optional</sup> <a name="jira_description_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescriptionInput"></a>

```python
jira_description_input: str
```

- *Type:* str

---

##### `jira_fix_version_input`<sup>Optional</sup> <a name="jira_fix_version_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersionInput"></a>

```python
jira_fix_version_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jira_issue_type_input`<sup>Optional</sup> <a name="jira_issue_type_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueTypeInput"></a>

```python
jira_issue_type_input: str
```

- *Type:* str

---

##### `jira_labels_input`<sup>Optional</sup> <a name="jira_labels_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabelsInput"></a>

```python
jira_labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jira_priority_input`<sup>Optional</sup> <a name="jira_priority_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriorityInput"></a>

```python
jira_priority_input: str
```

- *Type:* str

---

##### `jira_project_input`<sup>Optional</sup> <a name="jira_project_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProjectInput"></a>

```python
jira_project_input: str
```

- *Type:* str

---

##### `jira_summary_input`<sup>Optional</sup> <a name="jira_summary_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummaryInput"></a>

```python
jira_summary_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `trigger_source_input`<sup>Optional</sup> <a name="trigger_source_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSourceInput"></a>

```python
trigger_source_input: str
```

- *Type:* str

---

##### `trigger_type_input`<sup>Optional</sup> <a name="trigger_type_input" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerTypeInput"></a>

```python
trigger_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filters"></a>

```python
filters: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `jira_alternative_description_field`<sup>Required</sup> <a name="jira_alternative_description_field" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionField"></a>

```python
jira_alternative_description_field: str
```

- *Type:* str

---

##### `jira_assignee`<sup>Required</sup> <a name="jira_assignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssignee"></a>

```python
jira_assignee: str
```

- *Type:* str

---

##### `jira_attach_evidence_csv`<sup>Required</sup> <a name="jira_attach_evidence_csv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsv"></a>

```python
jira_attach_evidence_csv: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jira_components`<sup>Required</sup> <a name="jira_components" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponents"></a>

```python
jira_components: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jira_custom_fields`<sup>Required</sup> <a name="jira_custom_fields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFields"></a>

```python
jira_custom_fields: str
```

- *Type:* str

---

##### `jira_description`<sup>Required</sup> <a name="jira_description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescription"></a>

```python
jira_description: str
```

- *Type:* str

---

##### `jira_fix_version`<sup>Required</sup> <a name="jira_fix_version" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersion"></a>

```python
jira_fix_version: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jira_issue_type`<sup>Required</sup> <a name="jira_issue_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueType"></a>

```python
jira_issue_type: str
```

- *Type:* str

---

##### `jira_labels`<sup>Required</sup> <a name="jira_labels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabels"></a>

```python
jira_labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jira_priority`<sup>Required</sup> <a name="jira_priority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriority"></a>

```python
jira_priority: str
```

- *Type:* str

---

##### `jira_project`<sup>Required</sup> <a name="jira_project" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProject"></a>

```python
jira_project: str
```

- *Type:* str

---

##### `jira_summary`<sup>Required</sup> <a name="jira_summary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummary"></a>

```python
jira_summary: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerType"></a>

```python
trigger_type: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraCreateTicketConfig <a name="AutomationRuleJiraCreateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import automation_rule_jira_create_ticket

automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig(
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
  jira_alternative_description_field: str = None,
  jira_assignee: str = None,
  jira_attach_evidence_csv: typing.Union[bool, IResolvable] = None,
  jira_components: typing.List[str] = None,
  jira_custom_fields: str = None,
  jira_description: str = None,
  jira_fix_version: typing.List[str] = None,
  jira_issue_type: str = None,
  jira_labels: typing.List[str] = None,
  jira_priority: str = None,
  jira_project: str = None,
  jira_summary: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.filters">filters</a></code> | <code>str</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.integrationId">integration_id</a></code> | <code>str</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.name">name</a></code> | <code>str</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerSource">trigger_source</a></code> | <code>str</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerType">trigger_type</a></code> | <code>typing.List[str]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.description">description</a></code> | <code>str</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabled?     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAlternativeDescriptionField">jira_alternative_description_field</a></code> | <code>str</code> | Issue alternative description field. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAssignee">jira_assignee</a></code> | <code>str</code> | Issue assignee. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAttachEvidenceCsv">jira_attach_evidence_csv</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Upload issue evidence CSV as attachment?     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraComponents">jira_components</a></code> | <code>typing.List[str]</code> | Issue components. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraCustomFields">jira_custom_fields</a></code> | <code>str</code> | Custom configuration fields as specified in Jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraDescription">jira_description</a></code> | <code>str</code> | Issue description     - Defaults to `Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraFixVersion">jira_fix_version</a></code> | <code>typing.List[str]</code> | Issue fix versions. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraIssueType">jira_issue_type</a></code> | <code>str</code> | Issue type     - Defaults to `Vulnerability`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraLabels">jira_labels</a></code> | <code>typing.List[str]</code> | Issue labels. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraPriority">jira_priority</a></code> | <code>str</code> | Issue priority. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraProject">jira_project</a></code> | <code>str</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraSummary">jira_summary</a></code> | <code>str</code> | Issue summary     - Defaults to `Wiz Issue: {{control.name}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.projectId">project_id</a></code> | <code>str</code> | Wiz internal ID for a project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.filters"></a>

```python
filters: str
```

- *Type:* str

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#filters AutomationRuleJiraCreateTicket#filters}

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#integration_id AutomationRuleJiraCreateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#name AutomationRuleJiraCreateTicket#name}

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#trigger_source AutomationRuleJiraCreateTicket#trigger_source}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerType"></a>

```python
trigger_type: typing.List[str]
```

- *Type:* typing.List[str]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_create_ticket.
- Allowed values:
- CREATED
- UPDATED
- RESOLVED
- REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#trigger_type AutomationRuleJiraCreateTicket#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#description AutomationRuleJiraCreateTicket#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabled?     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#enabled AutomationRuleJiraCreateTicket#enabled}

---

##### `jira_alternative_description_field`<sup>Optional</sup> <a name="jira_alternative_description_field" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAlternativeDescriptionField"></a>

```python
jira_alternative_description_field: str
```

- *Type:* str

Issue alternative description field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_alternative_description_field AutomationRuleJiraCreateTicket#jira_alternative_description_field}

---

##### `jira_assignee`<sup>Optional</sup> <a name="jira_assignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAssignee"></a>

```python
jira_assignee: str
```

- *Type:* str

Issue assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_assignee AutomationRuleJiraCreateTicket#jira_assignee}

---

##### `jira_attach_evidence_csv`<sup>Optional</sup> <a name="jira_attach_evidence_csv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAttachEvidenceCsv"></a>

```python
jira_attach_evidence_csv: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Upload issue evidence CSV as attachment?     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_attach_evidence_csv AutomationRuleJiraCreateTicket#jira_attach_evidence_csv}

---

##### `jira_components`<sup>Optional</sup> <a name="jira_components" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraComponents"></a>

```python
jira_components: typing.List[str]
```

- *Type:* typing.List[str]

Issue components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_components AutomationRuleJiraCreateTicket#jira_components}

---

##### `jira_custom_fields`<sup>Optional</sup> <a name="jira_custom_fields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraCustomFields"></a>

```python
jira_custom_fields: str
```

- *Type:* str

Custom configuration fields as specified in Jira.

Make sure you add the fields that are configured as required in Jira Project, otherwise ticket creation will fail. Must be valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_custom_fields AutomationRuleJiraCreateTicket#jira_custom_fields}

---

##### `jira_description`<sup>Optional</sup> <a name="jira_description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraDescription"></a>

```python
jira_description: str
```

- *Type:* str

Issue description     - Defaults to `Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_description AutomationRuleJiraCreateTicket#jira_description}

---

##### `jira_fix_version`<sup>Optional</sup> <a name="jira_fix_version" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraFixVersion"></a>

```python
jira_fix_version: typing.List[str]
```

- *Type:* typing.List[str]

Issue fix versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_fix_version AutomationRuleJiraCreateTicket#jira_fix_version}

---

##### `jira_issue_type`<sup>Optional</sup> <a name="jira_issue_type" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraIssueType"></a>

```python
jira_issue_type: str
```

- *Type:* str

Issue type     - Defaults to `Vulnerability`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_issue_type AutomationRuleJiraCreateTicket#jira_issue_type}

---

##### `jira_labels`<sup>Optional</sup> <a name="jira_labels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraLabels"></a>

```python
jira_labels: typing.List[str]
```

- *Type:* typing.List[str]

Issue labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_labels AutomationRuleJiraCreateTicket#jira_labels}

---

##### `jira_priority`<sup>Optional</sup> <a name="jira_priority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraPriority"></a>

```python
jira_priority: str
```

- *Type:* str

Issue priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_priority AutomationRuleJiraCreateTicket#jira_priority}

---

##### `jira_project`<sup>Optional</sup> <a name="jira_project" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraProject"></a>

```python
jira_project: str
```

- *Type:* str

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_project AutomationRuleJiraCreateTicket#jira_project}

---

##### `jira_summary`<sup>Optional</sup> <a name="jira_summary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraSummary"></a>

```python
jira_summary: str
```

- *Type:* str

Issue summary     - Defaults to `Wiz Issue: {{control.name}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_summary AutomationRuleJiraCreateTicket#jira_summary}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#project_id AutomationRuleJiraCreateTicket#project_id}

---



