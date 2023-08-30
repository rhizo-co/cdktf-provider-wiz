# `wiz_automation_rule_jira_create_ticket`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_jira_create_ticket`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket).

# `automationRuleJiraCreateTicket` Submodule <a name="`automationRuleJiraCreateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraCreateTicket <a name="AutomationRuleJiraCreateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket wiz_automation_rule_jira_create_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_jira_create_ticket.AutomationRuleJiraCreateTicket;

AutomationRuleJiraCreateTicket.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .filters(java.lang.String)
    .integrationId(java.lang.String)
    .name(java.lang.String)
    .triggerSource(java.lang.String)
    .triggerType(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .jiraAlternativeDescriptionField(java.lang.String)
//  .jiraAssignee(java.lang.String)
//  .jiraAttachEvidenceCsv(java.lang.Boolean)
//  .jiraAttachEvidenceCsv(IResolvable)
//  .jiraComponents(java.util.List<java.lang.String>)
//  .jiraCustomFields(java.lang.String)
//  .jiraDescription(java.lang.String)
//  .jiraFixVersion(java.util.List<java.lang.String>)
//  .jiraIssueType(java.lang.String)
//  .jiraLabels(java.util.List<java.lang.String>)
//  .jiraPriority(java.lang.String)
//  .jiraProject(java.lang.String)
//  .jiraSummary(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.filters">filters</a></code> | <code>java.lang.String</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAlternativeDescriptionField">jiraAlternativeDescriptionField</a></code> | <code>java.lang.String</code> | Issue alternative description field. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAssignee">jiraAssignee</a></code> | <code>java.lang.String</code> | Issue assignee. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAttachEvidenceCsv">jiraAttachEvidenceCsv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Upload issue evidence CSV as attachment? - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraComponents">jiraComponents</a></code> | <code>java.util.List<java.lang.String></code> | Issue components. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraCustomFields">jiraCustomFields</a></code> | <code>java.lang.String</code> | Custom configuration fields as specified in Jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraDescription">jiraDescription</a></code> | <code>java.lang.String</code> | Issue description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraFixVersion">jiraFixVersion</a></code> | <code>java.util.List<java.lang.String></code> | Issue fix versions. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraIssueType">jiraIssueType</a></code> | <code>java.lang.String</code> | Issue type - Defaults to `{{`Vulnerability`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraLabels">jiraLabels</a></code> | <code>java.util.List<java.lang.String></code> | Issue labels. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraPriority">jiraPriority</a></code> | <code>java.lang.String</code> | Issue priority. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraProject">jiraProject</a></code> | <code>java.lang.String</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraSummary">jiraSummary</a></code> | <code>java.lang.String</code> | Issue summary - Defaults to `{{`Wiz Issue: {{control.name}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Wiz internal ID for a project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.filters"></a>

- *Type:* java.lang.String

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#filters AutomationRuleJiraCreateTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.integrationId"></a>

- *Type:* java.lang.String

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#integration_id AutomationRuleJiraCreateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#name AutomationRuleJiraCreateTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.triggerSource"></a>

- *Type:* java.lang.String

Trigger source.

* Allowed values:

  * ISSUES
  * CLOUD_EVENTS
  * CONTROL
  * CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#trigger_source AutomationRuleJiraCreateTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.triggerType"></a>

- *Type:* java.util.List<java.lang.String>

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_create_ticket.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#trigger_type AutomationRuleJiraCreateTicket#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#description AutomationRuleJiraCreateTicket#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#enabled AutomationRuleJiraCreateTicket#enabled}

---

##### `jiraAlternativeDescriptionField`<sup>Optional</sup> <a name="jiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAlternativeDescriptionField"></a>

- *Type:* java.lang.String

Issue alternative description field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_alternative_description_field AutomationRuleJiraCreateTicket#jira_alternative_description_field}

---

##### `jiraAssignee`<sup>Optional</sup> <a name="jiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAssignee"></a>

- *Type:* java.lang.String

Issue assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_assignee AutomationRuleJiraCreateTicket#jira_assignee}

---

##### `jiraAttachEvidenceCsv`<sup>Optional</sup> <a name="jiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraAttachEvidenceCsv"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Upload issue evidence CSV as attachment? - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_attach_evidence_csv AutomationRuleJiraCreateTicket#jira_attach_evidence_csv}

---

##### `jiraComponents`<sup>Optional</sup> <a name="jiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraComponents"></a>

- *Type:* java.util.List<java.lang.String>

Issue components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_components AutomationRuleJiraCreateTicket#jira_components}

---

##### `jiraCustomFields`<sup>Optional</sup> <a name="jiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraCustomFields"></a>

- *Type:* java.lang.String

Custom configuration fields as specified in Jira.

Make sure you add the fields that are configured as required in Jira Project, otherwise ticket creation will fail. Must be valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_custom_fields AutomationRuleJiraCreateTicket#jira_custom_fields}

---

##### `jiraDescription`<sup>Optional</sup> <a name="jiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraDescription"></a>

- *Type:* java.lang.String

Issue description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_description AutomationRuleJiraCreateTicket#jira_description}

---

##### `jiraFixVersion`<sup>Optional</sup> <a name="jiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraFixVersion"></a>

- *Type:* java.util.List<java.lang.String>

Issue fix versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_fix_version AutomationRuleJiraCreateTicket#jira_fix_version}

---

##### `jiraIssueType`<sup>Optional</sup> <a name="jiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraIssueType"></a>

- *Type:* java.lang.String

Issue type - Defaults to `{{`Vulnerability`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_issue_type AutomationRuleJiraCreateTicket#jira_issue_type}

---

##### `jiraLabels`<sup>Optional</sup> <a name="jiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraLabels"></a>

- *Type:* java.util.List<java.lang.String>

Issue labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_labels AutomationRuleJiraCreateTicket#jira_labels}

---

##### `jiraPriority`<sup>Optional</sup> <a name="jiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraPriority"></a>

- *Type:* java.lang.String

Issue priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_priority AutomationRuleJiraCreateTicket#jira_priority}

---

##### `jiraProject`<sup>Optional</sup> <a name="jiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraProject"></a>

- *Type:* java.lang.String

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_project AutomationRuleJiraCreateTicket#jira_project}

---

##### `jiraSummary`<sup>Optional</sup> <a name="jiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.jiraSummary"></a>

- *Type:* java.lang.String

Issue summary - Defaults to `{{`Wiz Issue: {{control.name}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_summary AutomationRuleJiraCreateTicket#jira_summary}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#project_id AutomationRuleJiraCreateTicket#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAlternativeDescriptionField">resetJiraAlternativeDescriptionField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAssignee">resetJiraAssignee</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAttachEvidenceCsv">resetJiraAttachEvidenceCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraComponents">resetJiraComponents</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraCustomFields">resetJiraCustomFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraDescription">resetJiraDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraFixVersion">resetJiraFixVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraIssueType">resetJiraIssueType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraLabels">resetJiraLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraPriority">resetJiraPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraProject">resetJiraProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraSummary">resetJiraSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetJiraAlternativeDescriptionField` <a name="resetJiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAlternativeDescriptionField"></a>

```java
public void resetJiraAlternativeDescriptionField()
```

##### `resetJiraAssignee` <a name="resetJiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAssignee"></a>

```java
public void resetJiraAssignee()
```

##### `resetJiraAttachEvidenceCsv` <a name="resetJiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAttachEvidenceCsv"></a>

```java
public void resetJiraAttachEvidenceCsv()
```

##### `resetJiraComponents` <a name="resetJiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraComponents"></a>

```java
public void resetJiraComponents()
```

##### `resetJiraCustomFields` <a name="resetJiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraCustomFields"></a>

```java
public void resetJiraCustomFields()
```

##### `resetJiraDescription` <a name="resetJiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraDescription"></a>

```java
public void resetJiraDescription()
```

##### `resetJiraFixVersion` <a name="resetJiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraFixVersion"></a>

```java
public void resetJiraFixVersion()
```

##### `resetJiraIssueType` <a name="resetJiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraIssueType"></a>

```java
public void resetJiraIssueType()
```

##### `resetJiraLabels` <a name="resetJiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraLabels"></a>

```java
public void resetJiraLabels()
```

##### `resetJiraPriority` <a name="resetJiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraPriority"></a>

```java
public void resetJiraPriority()
```

##### `resetJiraProject` <a name="resetJiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraProject"></a>

```java
public void resetJiraProject()
```

##### `resetJiraSummary` <a name="resetJiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraSummary"></a>

```java
public void resetJiraSummary()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_jira_create_ticket.AutomationRuleJiraCreateTicket;

AutomationRuleJiraCreateTicket.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_jira_create_ticket.AutomationRuleJiraCreateTicket;

AutomationRuleJiraCreateTicket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_jira_create_ticket.AutomationRuleJiraCreateTicket;

AutomationRuleJiraCreateTicket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.actionId">actionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filtersInput">filtersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationIdInput">integrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionFieldInput">jiraAlternativeDescriptionFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssigneeInput">jiraAssigneeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsvInput">jiraAttachEvidenceCsvInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponentsInput">jiraComponentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFieldsInput">jiraCustomFieldsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescriptionInput">jiraDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersionInput">jiraFixVersionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueTypeInput">jiraIssueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabelsInput">jiraLabelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriorityInput">jiraPriorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProjectInput">jiraProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummaryInput">jiraSummaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSourceInput">triggerSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerTypeInput">triggerTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filters">filters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionField">jiraAlternativeDescriptionField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssignee">jiraAssignee</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsv">jiraAttachEvidenceCsv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponents">jiraComponents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFields">jiraCustomFields</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescription">jiraDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersion">jiraFixVersion</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueType">jiraIssueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabels">jiraLabels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriority">jiraPriority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProject">jiraProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummary">jiraSummary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filtersInput"></a>

```java
public java.lang.String getFiltersInput();
```

- *Type:* java.lang.String

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationIdInput"></a>

```java
public java.lang.String getIntegrationIdInput();
```

- *Type:* java.lang.String

---

##### `jiraAlternativeDescriptionFieldInput`<sup>Optional</sup> <a name="jiraAlternativeDescriptionFieldInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionFieldInput"></a>

```java
public java.lang.String getJiraAlternativeDescriptionFieldInput();
```

- *Type:* java.lang.String

---

##### `jiraAssigneeInput`<sup>Optional</sup> <a name="jiraAssigneeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssigneeInput"></a>

```java
public java.lang.String getJiraAssigneeInput();
```

- *Type:* java.lang.String

---

##### `jiraAttachEvidenceCsvInput`<sup>Optional</sup> <a name="jiraAttachEvidenceCsvInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsvInput"></a>

```java
public java.lang.Object getJiraAttachEvidenceCsvInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraComponentsInput`<sup>Optional</sup> <a name="jiraComponentsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponentsInput"></a>

```java
public java.util.List<java.lang.String> getJiraComponentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jiraCustomFieldsInput`<sup>Optional</sup> <a name="jiraCustomFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFieldsInput"></a>

```java
public java.lang.String getJiraCustomFieldsInput();
```

- *Type:* java.lang.String

---

##### `jiraDescriptionInput`<sup>Optional</sup> <a name="jiraDescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescriptionInput"></a>

```java
public java.lang.String getJiraDescriptionInput();
```

- *Type:* java.lang.String

---

##### `jiraFixVersionInput`<sup>Optional</sup> <a name="jiraFixVersionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersionInput"></a>

```java
public java.util.List<java.lang.String> getJiraFixVersionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jiraIssueTypeInput`<sup>Optional</sup> <a name="jiraIssueTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueTypeInput"></a>

```java
public java.lang.String getJiraIssueTypeInput();
```

- *Type:* java.lang.String

---

##### `jiraLabelsInput`<sup>Optional</sup> <a name="jiraLabelsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabelsInput"></a>

```java
public java.util.List<java.lang.String> getJiraLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jiraPriorityInput`<sup>Optional</sup> <a name="jiraPriorityInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriorityInput"></a>

```java
public java.lang.String getJiraPriorityInput();
```

- *Type:* java.lang.String

---

##### `jiraProjectInput`<sup>Optional</sup> <a name="jiraProjectInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProjectInput"></a>

```java
public java.lang.String getJiraProjectInput();
```

- *Type:* java.lang.String

---

##### `jiraSummaryInput`<sup>Optional</sup> <a name="jiraSummaryInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummaryInput"></a>

```java
public java.lang.String getJiraSummaryInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `triggerSourceInput`<sup>Optional</sup> <a name="triggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSourceInput"></a>

```java
public java.lang.String getTriggerSourceInput();
```

- *Type:* java.lang.String

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerTypeInput"></a>

```java
public java.util.List<java.lang.String> getTriggerTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filters"></a>

```java
public java.lang.String getFilters();
```

- *Type:* java.lang.String

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `jiraAlternativeDescriptionField`<sup>Required</sup> <a name="jiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionField"></a>

```java
public java.lang.String getJiraAlternativeDescriptionField();
```

- *Type:* java.lang.String

---

##### `jiraAssignee`<sup>Required</sup> <a name="jiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssignee"></a>

```java
public java.lang.String getJiraAssignee();
```

- *Type:* java.lang.String

---

##### `jiraAttachEvidenceCsv`<sup>Required</sup> <a name="jiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsv"></a>

```java
public java.lang.Object getJiraAttachEvidenceCsv();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraComponents`<sup>Required</sup> <a name="jiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponents"></a>

```java
public java.util.List<java.lang.String> getJiraComponents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jiraCustomFields`<sup>Required</sup> <a name="jiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFields"></a>

```java
public java.lang.String getJiraCustomFields();
```

- *Type:* java.lang.String

---

##### `jiraDescription`<sup>Required</sup> <a name="jiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescription"></a>

```java
public java.lang.String getJiraDescription();
```

- *Type:* java.lang.String

---

##### `jiraFixVersion`<sup>Required</sup> <a name="jiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersion"></a>

```java
public java.util.List<java.lang.String> getJiraFixVersion();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jiraIssueType`<sup>Required</sup> <a name="jiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueType"></a>

```java
public java.lang.String getJiraIssueType();
```

- *Type:* java.lang.String

---

##### `jiraLabels`<sup>Required</sup> <a name="jiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabels"></a>

```java
public java.util.List<java.lang.String> getJiraLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jiraPriority`<sup>Required</sup> <a name="jiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriority"></a>

```java
public java.lang.String getJiraPriority();
```

- *Type:* java.lang.String

---

##### `jiraProject`<sup>Required</sup> <a name="jiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProject"></a>

```java
public java.lang.String getJiraProject();
```

- *Type:* java.lang.String

---

##### `jiraSummary`<sup>Required</sup> <a name="jiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummary"></a>

```java
public java.lang.String getJiraSummary();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSource"></a>

```java
public java.lang.String getTriggerSource();
```

- *Type:* java.lang.String

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerType"></a>

```java
public java.util.List<java.lang.String> getTriggerType();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraCreateTicketConfig <a name="AutomationRuleJiraCreateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_jira_create_ticket.AutomationRuleJiraCreateTicketConfig;

AutomationRuleJiraCreateTicketConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .filters(java.lang.String)
    .integrationId(java.lang.String)
    .name(java.lang.String)
    .triggerSource(java.lang.String)
    .triggerType(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .jiraAlternativeDescriptionField(java.lang.String)
//  .jiraAssignee(java.lang.String)
//  .jiraAttachEvidenceCsv(java.lang.Boolean)
//  .jiraAttachEvidenceCsv(IResolvable)
//  .jiraComponents(java.util.List<java.lang.String>)
//  .jiraCustomFields(java.lang.String)
//  .jiraDescription(java.lang.String)
//  .jiraFixVersion(java.util.List<java.lang.String>)
//  .jiraIssueType(java.lang.String)
//  .jiraLabels(java.util.List<java.lang.String>)
//  .jiraPriority(java.lang.String)
//  .jiraProject(java.lang.String)
//  .jiraSummary(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.filters">filters</a></code> | <code>java.lang.String</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAlternativeDescriptionField">jiraAlternativeDescriptionField</a></code> | <code>java.lang.String</code> | Issue alternative description field. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAssignee">jiraAssignee</a></code> | <code>java.lang.String</code> | Issue assignee. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAttachEvidenceCsv">jiraAttachEvidenceCsv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Upload issue evidence CSV as attachment? - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraComponents">jiraComponents</a></code> | <code>java.util.List<java.lang.String></code> | Issue components. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraCustomFields">jiraCustomFields</a></code> | <code>java.lang.String</code> | Custom configuration fields as specified in Jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraDescription">jiraDescription</a></code> | <code>java.lang.String</code> | Issue description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraFixVersion">jiraFixVersion</a></code> | <code>java.util.List<java.lang.String></code> | Issue fix versions. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraIssueType">jiraIssueType</a></code> | <code>java.lang.String</code> | Issue type - Defaults to `{{`Vulnerability`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraLabels">jiraLabels</a></code> | <code>java.util.List<java.lang.String></code> | Issue labels. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraPriority">jiraPriority</a></code> | <code>java.lang.String</code> | Issue priority. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraProject">jiraProject</a></code> | <code>java.lang.String</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraSummary">jiraSummary</a></code> | <code>java.lang.String</code> | Issue summary - Defaults to `{{`Wiz Issue: {{control.name}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Wiz internal ID for a project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.filters"></a>

```java
public java.lang.String getFilters();
```

- *Type:* java.lang.String

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#filters AutomationRuleJiraCreateTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#integration_id AutomationRuleJiraCreateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#name AutomationRuleJiraCreateTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerSource"></a>

```java
public java.lang.String getTriggerSource();
```

- *Type:* java.lang.String

Trigger source.

* Allowed values:

  * ISSUES
  * CLOUD_EVENTS
  * CONTROL
  * CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#trigger_source AutomationRuleJiraCreateTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerType"></a>

```java
public java.util.List<java.lang.String> getTriggerType();
```

- *Type:* java.util.List<java.lang.String>

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_create_ticket.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#trigger_type AutomationRuleJiraCreateTicket#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#description AutomationRuleJiraCreateTicket#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#enabled AutomationRuleJiraCreateTicket#enabled}

---

##### `jiraAlternativeDescriptionField`<sup>Optional</sup> <a name="jiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAlternativeDescriptionField"></a>

```java
public java.lang.String getJiraAlternativeDescriptionField();
```

- *Type:* java.lang.String

Issue alternative description field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_alternative_description_field AutomationRuleJiraCreateTicket#jira_alternative_description_field}

---

##### `jiraAssignee`<sup>Optional</sup> <a name="jiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAssignee"></a>

```java
public java.lang.String getJiraAssignee();
```

- *Type:* java.lang.String

Issue assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_assignee AutomationRuleJiraCreateTicket#jira_assignee}

---

##### `jiraAttachEvidenceCsv`<sup>Optional</sup> <a name="jiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAttachEvidenceCsv"></a>

```java
public java.lang.Object getJiraAttachEvidenceCsv();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Upload issue evidence CSV as attachment? - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_attach_evidence_csv AutomationRuleJiraCreateTicket#jira_attach_evidence_csv}

---

##### `jiraComponents`<sup>Optional</sup> <a name="jiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraComponents"></a>

```java
public java.util.List<java.lang.String> getJiraComponents();
```

- *Type:* java.util.List<java.lang.String>

Issue components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_components AutomationRuleJiraCreateTicket#jira_components}

---

##### `jiraCustomFields`<sup>Optional</sup> <a name="jiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraCustomFields"></a>

```java
public java.lang.String getJiraCustomFields();
```

- *Type:* java.lang.String

Custom configuration fields as specified in Jira.

Make sure you add the fields that are configured as required in Jira Project, otherwise ticket creation will fail. Must be valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_custom_fields AutomationRuleJiraCreateTicket#jira_custom_fields}

---

##### `jiraDescription`<sup>Optional</sup> <a name="jiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraDescription"></a>

```java
public java.lang.String getJiraDescription();
```

- *Type:* java.lang.String

Issue description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_description AutomationRuleJiraCreateTicket#jira_description}

---

##### `jiraFixVersion`<sup>Optional</sup> <a name="jiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraFixVersion"></a>

```java
public java.util.List<java.lang.String> getJiraFixVersion();
```

- *Type:* java.util.List<java.lang.String>

Issue fix versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_fix_version AutomationRuleJiraCreateTicket#jira_fix_version}

---

##### `jiraIssueType`<sup>Optional</sup> <a name="jiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraIssueType"></a>

```java
public java.lang.String getJiraIssueType();
```

- *Type:* java.lang.String

Issue type - Defaults to `{{`Vulnerability`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_issue_type AutomationRuleJiraCreateTicket#jira_issue_type}

---

##### `jiraLabels`<sup>Optional</sup> <a name="jiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraLabels"></a>

```java
public java.util.List<java.lang.String> getJiraLabels();
```

- *Type:* java.util.List<java.lang.String>

Issue labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_labels AutomationRuleJiraCreateTicket#jira_labels}

---

##### `jiraPriority`<sup>Optional</sup> <a name="jiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraPriority"></a>

```java
public java.lang.String getJiraPriority();
```

- *Type:* java.lang.String

Issue priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_priority AutomationRuleJiraCreateTicket#jira_priority}

---

##### `jiraProject`<sup>Optional</sup> <a name="jiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraProject"></a>

```java
public java.lang.String getJiraProject();
```

- *Type:* java.lang.String

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_project AutomationRuleJiraCreateTicket#jira_project}

---

##### `jiraSummary`<sup>Optional</sup> <a name="jiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraSummary"></a>

```java
public java.lang.String getJiraSummary();
```

- *Type:* java.lang.String

Issue summary - Defaults to `{{`Wiz Issue: {{control.name}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_summary AutomationRuleJiraCreateTicket#jira_summary}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#project_id AutomationRuleJiraCreateTicket#project_id}

---



