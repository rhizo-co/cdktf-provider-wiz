# `automationRuleJiraTransitionTicket` Submodule <a name="`automationRuleJiraTransitionTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraTransitionTicket <a name="AutomationRuleJiraTransitionTicket" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket wiz_automation_rule_jira_transition_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_jira_transition_ticket.AutomationRuleJiraTransitionTicket;

AutomationRuleJiraTransitionTicket.Builder.create(Construct scope, java.lang.String id)
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
//  .jiraAdvancedFields(java.lang.String)
//  .jiraAttachEvidenceCsv(java.lang.Boolean)
//  .jiraAttachEvidenceCsv(IResolvable)
//  .jiraComment(java.lang.String)
//  .jiraCommentOnTransition(java.lang.Boolean)
//  .jiraCommentOnTransition(IResolvable)
//  .jiraProject(java.lang.String)
//  .jiraTransitionId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.filters">filters</a></code> | <code>java.lang.String</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabled?     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraAdvancedFields">jiraAdvancedFields</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraAttachEvidenceCsv">jiraAttachEvidenceCsv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraComment">jiraComment</a></code> | <code>java.lang.String</code> | Issue Jira comment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraCommentOnTransition">jiraCommentOnTransition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraProject">jiraProject</a></code> | <code>java.lang.String</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraTransitionId">jiraTransitionId</a></code> | <code>java.lang.String</code> | Issue transition ID or Name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Wiz internal ID for a project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.filters"></a>

- *Type:* java.lang.String

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#filters AutomationRuleJiraTransitionTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.integrationId"></a>

- *Type:* java.lang.String

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#integration_id AutomationRuleJiraTransitionTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#name AutomationRuleJiraTransitionTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.triggerSource"></a>

- *Type:* java.lang.String

Trigger source.

* Allowed values:
  - ISSUES
  - CLOUD_EVENTS
  - CONTROL
  - CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#trigger_source AutomationRuleJiraTransitionTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.triggerType"></a>

- *Type:* java.util.List<java.lang.String>

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_transition_ticket.
- Allowed values:
- CREATED
- UPDATED
- RESOLVED
- REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#trigger_type AutomationRuleJiraTransitionTicket#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#description AutomationRuleJiraTransitionTicket#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabled?     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#enabled AutomationRuleJiraTransitionTicket#enabled}

---

##### `jiraAdvancedFields`<sup>Optional</sup> <a name="jiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraAdvancedFields"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}.

---

##### `jiraAttachEvidenceCsv`<sup>Optional</sup> <a name="jiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraAttachEvidenceCsv"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_attach_evidence_csv AutomationRuleJiraTransitionTicket#jira_attach_evidence_csv}

---

##### `jiraComment`<sup>Optional</sup> <a name="jiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraComment"></a>

- *Type:* java.lang.String

Issue Jira comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_comment AutomationRuleJiraTransitionTicket#jira_comment}

---

##### `jiraCommentOnTransition`<sup>Optional</sup> <a name="jiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraCommentOnTransition"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_comment_on_transition AutomationRuleJiraTransitionTicket#jira_comment_on_transition}

---

##### `jiraProject`<sup>Optional</sup> <a name="jiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraProject"></a>

- *Type:* java.lang.String

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_project AutomationRuleJiraTransitionTicket#jira_project}

---

##### `jiraTransitionId`<sup>Optional</sup> <a name="jiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.jiraTransitionId"></a>

- *Type:* java.lang.String

Issue transition ID or Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_transition_id AutomationRuleJiraTransitionTicket#jira_transition_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#project_id AutomationRuleJiraTransitionTicket#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAdvancedFields">resetJiraAdvancedFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAttachEvidenceCsv">resetJiraAttachEvidenceCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraComment">resetJiraComment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraCommentOnTransition">resetJiraCommentOnTransition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraProject">resetJiraProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraTransitionId">resetJiraTransitionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetJiraAdvancedFields` <a name="resetJiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAdvancedFields"></a>

```java
public void resetJiraAdvancedFields()
```

##### `resetJiraAttachEvidenceCsv` <a name="resetJiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAttachEvidenceCsv"></a>

```java
public void resetJiraAttachEvidenceCsv()
```

##### `resetJiraComment` <a name="resetJiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraComment"></a>

```java
public void resetJiraComment()
```

##### `resetJiraCommentOnTransition` <a name="resetJiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraCommentOnTransition"></a>

```java
public void resetJiraCommentOnTransition()
```

##### `resetJiraProject` <a name="resetJiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraProject"></a>

```java
public void resetJiraProject()
```

##### `resetJiraTransitionId` <a name="resetJiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraTransitionId"></a>

```java
public void resetJiraTransitionId()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationRuleJiraTransitionTicket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_jira_transition_ticket.AutomationRuleJiraTransitionTicket;

AutomationRuleJiraTransitionTicket.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_jira_transition_ticket.AutomationRuleJiraTransitionTicket;

AutomationRuleJiraTransitionTicket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_jira_transition_ticket.AutomationRuleJiraTransitionTicket;

AutomationRuleJiraTransitionTicket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_jira_transition_ticket.AutomationRuleJiraTransitionTicket;

AutomationRuleJiraTransitionTicket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutomationRuleJiraTransitionTicket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AutomationRuleJiraTransitionTicket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutomationRuleJiraTransitionTicket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutomationRuleJiraTransitionTicket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AutomationRuleJiraTransitionTicket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.actionId">actionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filtersInput">filtersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationIdInput">integrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFieldsInput">jiraAdvancedFieldsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsvInput">jiraAttachEvidenceCsvInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentInput">jiraCommentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransitionInput">jiraCommentOnTransitionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProjectInput">jiraProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionIdInput">jiraTransitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSourceInput">triggerSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerTypeInput">triggerTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filters">filters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFields">jiraAdvancedFields</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsv">jiraAttachEvidenceCsv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraComment">jiraComment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransition">jiraCommentOnTransition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProject">jiraProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionId">jiraTransitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filtersInput"></a>

```java
public java.lang.String getFiltersInput();
```

- *Type:* java.lang.String

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationIdInput"></a>

```java
public java.lang.String getIntegrationIdInput();
```

- *Type:* java.lang.String

---

##### `jiraAdvancedFieldsInput`<sup>Optional</sup> <a name="jiraAdvancedFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFieldsInput"></a>

```java
public java.lang.String getJiraAdvancedFieldsInput();
```

- *Type:* java.lang.String

---

##### `jiraAttachEvidenceCsvInput`<sup>Optional</sup> <a name="jiraAttachEvidenceCsvInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsvInput"></a>

```java
public java.lang.Object getJiraAttachEvidenceCsvInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraCommentInput`<sup>Optional</sup> <a name="jiraCommentInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentInput"></a>

```java
public java.lang.String getJiraCommentInput();
```

- *Type:* java.lang.String

---

##### `jiraCommentOnTransitionInput`<sup>Optional</sup> <a name="jiraCommentOnTransitionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransitionInput"></a>

```java
public java.lang.Object getJiraCommentOnTransitionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraProjectInput`<sup>Optional</sup> <a name="jiraProjectInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProjectInput"></a>

```java
public java.lang.String getJiraProjectInput();
```

- *Type:* java.lang.String

---

##### `jiraTransitionIdInput`<sup>Optional</sup> <a name="jiraTransitionIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionIdInput"></a>

```java
public java.lang.String getJiraTransitionIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `triggerSourceInput`<sup>Optional</sup> <a name="triggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSourceInput"></a>

```java
public java.lang.String getTriggerSourceInput();
```

- *Type:* java.lang.String

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerTypeInput"></a>

```java
public java.util.List<java.lang.String> getTriggerTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filters"></a>

```java
public java.lang.String getFilters();
```

- *Type:* java.lang.String

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `jiraAdvancedFields`<sup>Required</sup> <a name="jiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFields"></a>

```java
public java.lang.String getJiraAdvancedFields();
```

- *Type:* java.lang.String

---

##### `jiraAttachEvidenceCsv`<sup>Required</sup> <a name="jiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsv"></a>

```java
public java.lang.Object getJiraAttachEvidenceCsv();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraComment`<sup>Required</sup> <a name="jiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraComment"></a>

```java
public java.lang.String getJiraComment();
```

- *Type:* java.lang.String

---

##### `jiraCommentOnTransition`<sup>Required</sup> <a name="jiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransition"></a>

```java
public java.lang.Object getJiraCommentOnTransition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraProject`<sup>Required</sup> <a name="jiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProject"></a>

```java
public java.lang.String getJiraProject();
```

- *Type:* java.lang.String

---

##### `jiraTransitionId`<sup>Required</sup> <a name="jiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionId"></a>

```java
public java.lang.String getJiraTransitionId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSource"></a>

```java
public java.lang.String getTriggerSource();
```

- *Type:* java.lang.String

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerType"></a>

```java
public java.util.List<java.lang.String> getTriggerType();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraTransitionTicketConfig <a name="AutomationRuleJiraTransitionTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_jira_transition_ticket.AutomationRuleJiraTransitionTicketConfig;

AutomationRuleJiraTransitionTicketConfig.builder()
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
//  .jiraAdvancedFields(java.lang.String)
//  .jiraAttachEvidenceCsv(java.lang.Boolean)
//  .jiraAttachEvidenceCsv(IResolvable)
//  .jiraComment(java.lang.String)
//  .jiraCommentOnTransition(java.lang.Boolean)
//  .jiraCommentOnTransition(IResolvable)
//  .jiraProject(java.lang.String)
//  .jiraTransitionId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.filters">filters</a></code> | <code>java.lang.String</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabled?     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAdvancedFields">jiraAdvancedFields</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAttachEvidenceCsv">jiraAttachEvidenceCsv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraComment">jiraComment</a></code> | <code>java.lang.String</code> | Issue Jira comment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraCommentOnTransition">jiraCommentOnTransition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraProject">jiraProject</a></code> | <code>java.lang.String</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraTransitionId">jiraTransitionId</a></code> | <code>java.lang.String</code> | Issue transition ID or Name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Wiz internal ID for a project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.filters"></a>

```java
public java.lang.String getFilters();
```

- *Type:* java.lang.String

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#filters AutomationRuleJiraTransitionTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#integration_id AutomationRuleJiraTransitionTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#name AutomationRuleJiraTransitionTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerSource"></a>

```java
public java.lang.String getTriggerSource();
```

- *Type:* java.lang.String

Trigger source.

* Allowed values:
  - ISSUES
  - CLOUD_EVENTS
  - CONTROL
  - CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#trigger_source AutomationRuleJiraTransitionTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerType"></a>

```java
public java.util.List<java.lang.String> getTriggerType();
```

- *Type:* java.util.List<java.lang.String>

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_transition_ticket.
- Allowed values:
- CREATED
- UPDATED
- RESOLVED
- REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#trigger_type AutomationRuleJiraTransitionTicket#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#description AutomationRuleJiraTransitionTicket#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabled?     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#enabled AutomationRuleJiraTransitionTicket#enabled}

---

##### `jiraAdvancedFields`<sup>Optional</sup> <a name="jiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAdvancedFields"></a>

```java
public java.lang.String getJiraAdvancedFields();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}.

---

##### `jiraAttachEvidenceCsv`<sup>Optional</sup> <a name="jiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAttachEvidenceCsv"></a>

```java
public java.lang.Object getJiraAttachEvidenceCsv();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_attach_evidence_csv AutomationRuleJiraTransitionTicket#jira_attach_evidence_csv}

---

##### `jiraComment`<sup>Optional</sup> <a name="jiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraComment"></a>

```java
public java.lang.String getJiraComment();
```

- *Type:* java.lang.String

Issue Jira comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_comment AutomationRuleJiraTransitionTicket#jira_comment}

---

##### `jiraCommentOnTransition`<sup>Optional</sup> <a name="jiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraCommentOnTransition"></a>

```java
public java.lang.Object getJiraCommentOnTransition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_comment_on_transition AutomationRuleJiraTransitionTicket#jira_comment_on_transition}

---

##### `jiraProject`<sup>Optional</sup> <a name="jiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraProject"></a>

```java
public java.lang.String getJiraProject();
```

- *Type:* java.lang.String

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_project AutomationRuleJiraTransitionTicket#jira_project}

---

##### `jiraTransitionId`<sup>Optional</sup> <a name="jiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraTransitionId"></a>

```java
public java.lang.String getJiraTransitionId();
```

- *Type:* java.lang.String

Issue transition ID or Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_transition_id AutomationRuleJiraTransitionTicket#jira_transition_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#project_id AutomationRuleJiraTransitionTicket#project_id}

---



