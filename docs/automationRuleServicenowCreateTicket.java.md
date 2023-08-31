# `wiz_automation_rule_servicenow_create_ticket`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_servicenow_create_ticket`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket).

# `automationRuleServicenowCreateTicket` Submodule <a name="`automationRuleServicenowCreateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleServicenowCreateTicket <a name="AutomationRuleServicenowCreateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket wiz_automation_rule_servicenow_create_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_servicenow_create_ticket.AutomationRuleServicenowCreateTicket;

AutomationRuleServicenowCreateTicket.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .filters(java.lang.String)
    .integrationId(java.lang.String)
    .name(java.lang.String)
    .triggerSource(java.lang.String)
    .triggerType(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .projectId(java.lang.String)
//  .servicenowAttachEvidenceCsv(java.lang.Boolean)
//  .servicenowAttachEvidenceCsv(IResolvable)
//  .servicenowCustomFields(java.lang.String)
//  .servicenowDescription(java.lang.String)
//  .servicenowSummary(java.lang.String)
//  .servicenowTableName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.filters">filters</a></code> | <code>java.lang.String</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Wiz internal ID for a project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.servicenowAttachEvidenceCsv">servicenowAttachEvidenceCsv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Upload issue evidence CSV as attachment? - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.servicenowCustomFields">servicenowCustomFields</a></code> | <code>java.lang.String</code> | Custom configuration fields as specified in Service Now. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.servicenowDescription">servicenowDescription</a></code> | <code>java.lang.String</code> | Ticket description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.servicenowSummary">servicenowSummary</a></code> | <code>java.lang.String</code> | Ticket summary - Defaults to `{{`Wiz Issue: {{issue.control.name}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.servicenowTableName">servicenowTableName</a></code> | <code>java.lang.String</code> | Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#description AutomationRuleServicenowCreateTicket#description}

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.filters"></a>

- *Type:* java.lang.String

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#filters AutomationRuleServicenowCreateTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.integrationId"></a>

- *Type:* java.lang.String

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#integration_id AutomationRuleServicenowCreateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#name AutomationRuleServicenowCreateTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.triggerSource"></a>

- *Type:* java.lang.String

Trigger source.

* Allowed values:

  * ISSUES
  * CLOUD_EVENTS
  * CONTROL
  * CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#trigger_source AutomationRuleServicenowCreateTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.triggerType"></a>

- *Type:* java.util.List<java.lang.String>

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_servicenow_create_ticket.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#trigger_type AutomationRuleServicenowCreateTicket#trigger_type}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#enabled AutomationRuleServicenowCreateTicket#enabled}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#project_id AutomationRuleServicenowCreateTicket#project_id}

---

##### `servicenowAttachEvidenceCsv`<sup>Optional</sup> <a name="servicenowAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.servicenowAttachEvidenceCsv"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Upload issue evidence CSV as attachment? - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_attach_evidence_csv AutomationRuleServicenowCreateTicket#servicenow_attach_evidence_csv}

---

##### `servicenowCustomFields`<sup>Optional</sup> <a name="servicenowCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.servicenowCustomFields"></a>

- *Type:* java.lang.String

Custom configuration fields as specified in Service Now.

Make sure you add the fields that are configured as required in Service Now Project, otherwise ticket creation will fail. Must be valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_custom_fields AutomationRuleServicenowCreateTicket#servicenow_custom_fields}

---

##### `servicenowDescription`<sup>Optional</sup> <a name="servicenowDescription" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.servicenowDescription"></a>

- *Type:* java.lang.String

Ticket description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_description AutomationRuleServicenowCreateTicket#servicenow_description}

---

##### `servicenowSummary`<sup>Optional</sup> <a name="servicenowSummary" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.servicenowSummary"></a>

- *Type:* java.lang.String

Ticket summary - Defaults to `{{`Wiz Issue: {{issue.control.name}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_summary AutomationRuleServicenowCreateTicket#servicenow_summary}

---

##### `servicenowTableName`<sup>Optional</sup> <a name="servicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.servicenowTableName"></a>

- *Type:* java.lang.String

Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_table_name AutomationRuleServicenowCreateTicket#servicenow_table_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowAttachEvidenceCsv">resetServicenowAttachEvidenceCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowCustomFields">resetServicenowCustomFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowDescription">resetServicenowDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowSummary">resetServicenowSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowTableName">resetServicenowTableName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetServicenowAttachEvidenceCsv` <a name="resetServicenowAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowAttachEvidenceCsv"></a>

```java
public void resetServicenowAttachEvidenceCsv()
```

##### `resetServicenowCustomFields` <a name="resetServicenowCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowCustomFields"></a>

```java
public void resetServicenowCustomFields()
```

##### `resetServicenowDescription` <a name="resetServicenowDescription" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowDescription"></a>

```java
public void resetServicenowDescription()
```

##### `resetServicenowSummary` <a name="resetServicenowSummary" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowSummary"></a>

```java
public void resetServicenowSummary()
```

##### `resetServicenowTableName` <a name="resetServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowTableName"></a>

```java
public void resetServicenowTableName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_servicenow_create_ticket.AutomationRuleServicenowCreateTicket;

AutomationRuleServicenowCreateTicket.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_servicenow_create_ticket.AutomationRuleServicenowCreateTicket;

AutomationRuleServicenowCreateTicket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_servicenow_create_ticket.AutomationRuleServicenowCreateTicket;

AutomationRuleServicenowCreateTicket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.actionId">actionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filtersInput">filtersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationIdInput">integrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsvInput">servicenowAttachEvidenceCsvInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFieldsInput">servicenowCustomFieldsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescriptionInput">servicenowDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummaryInput">servicenowSummaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableNameInput">servicenowTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSourceInput">triggerSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerTypeInput">triggerTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filters">filters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsv">servicenowAttachEvidenceCsv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFields">servicenowCustomFields</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescription">servicenowDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummary">servicenowSummary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableName">servicenowTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filtersInput"></a>

```java
public java.lang.String getFiltersInput();
```

- *Type:* java.lang.String

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationIdInput"></a>

```java
public java.lang.String getIntegrationIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `servicenowAttachEvidenceCsvInput`<sup>Optional</sup> <a name="servicenowAttachEvidenceCsvInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsvInput"></a>

```java
public java.lang.Object getServicenowAttachEvidenceCsvInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `servicenowCustomFieldsInput`<sup>Optional</sup> <a name="servicenowCustomFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFieldsInput"></a>

```java
public java.lang.String getServicenowCustomFieldsInput();
```

- *Type:* java.lang.String

---

##### `servicenowDescriptionInput`<sup>Optional</sup> <a name="servicenowDescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescriptionInput"></a>

```java
public java.lang.String getServicenowDescriptionInput();
```

- *Type:* java.lang.String

---

##### `servicenowSummaryInput`<sup>Optional</sup> <a name="servicenowSummaryInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummaryInput"></a>

```java
public java.lang.String getServicenowSummaryInput();
```

- *Type:* java.lang.String

---

##### `servicenowTableNameInput`<sup>Optional</sup> <a name="servicenowTableNameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableNameInput"></a>

```java
public java.lang.String getServicenowTableNameInput();
```

- *Type:* java.lang.String

---

##### `triggerSourceInput`<sup>Optional</sup> <a name="triggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSourceInput"></a>

```java
public java.lang.String getTriggerSourceInput();
```

- *Type:* java.lang.String

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerTypeInput"></a>

```java
public java.util.List<java.lang.String> getTriggerTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filters"></a>

```java
public java.lang.String getFilters();
```

- *Type:* java.lang.String

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `servicenowAttachEvidenceCsv`<sup>Required</sup> <a name="servicenowAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsv"></a>

```java
public java.lang.Object getServicenowAttachEvidenceCsv();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `servicenowCustomFields`<sup>Required</sup> <a name="servicenowCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFields"></a>

```java
public java.lang.String getServicenowCustomFields();
```

- *Type:* java.lang.String

---

##### `servicenowDescription`<sup>Required</sup> <a name="servicenowDescription" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescription"></a>

```java
public java.lang.String getServicenowDescription();
```

- *Type:* java.lang.String

---

##### `servicenowSummary`<sup>Required</sup> <a name="servicenowSummary" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummary"></a>

```java
public java.lang.String getServicenowSummary();
```

- *Type:* java.lang.String

---

##### `servicenowTableName`<sup>Required</sup> <a name="servicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableName"></a>

```java
public java.lang.String getServicenowTableName();
```

- *Type:* java.lang.String

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSource"></a>

```java
public java.lang.String getTriggerSource();
```

- *Type:* java.lang.String

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerType"></a>

```java
public java.util.List<java.lang.String> getTriggerType();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleServicenowCreateTicketConfig <a name="AutomationRuleServicenowCreateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_servicenow_create_ticket.AutomationRuleServicenowCreateTicketConfig;

AutomationRuleServicenowCreateTicketConfig.builder()
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
    .description(java.lang.String)
    .filters(java.lang.String)
    .integrationId(java.lang.String)
    .name(java.lang.String)
    .triggerSource(java.lang.String)
    .triggerType(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .projectId(java.lang.String)
//  .servicenowAttachEvidenceCsv(java.lang.Boolean)
//  .servicenowAttachEvidenceCsv(IResolvable)
//  .servicenowCustomFields(java.lang.String)
//  .servicenowDescription(java.lang.String)
//  .servicenowSummary(java.lang.String)
//  .servicenowTableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.filters">filters</a></code> | <code>java.lang.String</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Wiz internal ID for a project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowAttachEvidenceCsv">servicenowAttachEvidenceCsv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Upload issue evidence CSV as attachment? - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowCustomFields">servicenowCustomFields</a></code> | <code>java.lang.String</code> | Custom configuration fields as specified in Service Now. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowDescription">servicenowDescription</a></code> | <code>java.lang.String</code> | Ticket description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowSummary">servicenowSummary</a></code> | <code>java.lang.String</code> | Ticket summary - Defaults to `{{`Wiz Issue: {{issue.control.name}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowTableName">servicenowTableName</a></code> | <code>java.lang.String</code> | Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#description AutomationRuleServicenowCreateTicket#description}

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.filters"></a>

```java
public java.lang.String getFilters();
```

- *Type:* java.lang.String

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#filters AutomationRuleServicenowCreateTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#integration_id AutomationRuleServicenowCreateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#name AutomationRuleServicenowCreateTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#trigger_source AutomationRuleServicenowCreateTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerType"></a>

```java
public java.util.List<java.lang.String> getTriggerType();
```

- *Type:* java.util.List<java.lang.String>

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_servicenow_create_ticket.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#trigger_type AutomationRuleServicenowCreateTicket#trigger_type}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#enabled AutomationRuleServicenowCreateTicket#enabled}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#project_id AutomationRuleServicenowCreateTicket#project_id}

---

##### `servicenowAttachEvidenceCsv`<sup>Optional</sup> <a name="servicenowAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowAttachEvidenceCsv"></a>

```java
public java.lang.Object getServicenowAttachEvidenceCsv();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Upload issue evidence CSV as attachment? - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_attach_evidence_csv AutomationRuleServicenowCreateTicket#servicenow_attach_evidence_csv}

---

##### `servicenowCustomFields`<sup>Optional</sup> <a name="servicenowCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowCustomFields"></a>

```java
public java.lang.String getServicenowCustomFields();
```

- *Type:* java.lang.String

Custom configuration fields as specified in Service Now.

Make sure you add the fields that are configured as required in Service Now Project, otherwise ticket creation will fail. Must be valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_custom_fields AutomationRuleServicenowCreateTicket#servicenow_custom_fields}

---

##### `servicenowDescription`<sup>Optional</sup> <a name="servicenowDescription" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowDescription"></a>

```java
public java.lang.String getServicenowDescription();
```

- *Type:* java.lang.String

Ticket description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_description AutomationRuleServicenowCreateTicket#servicenow_description}

---

##### `servicenowSummary`<sup>Optional</sup> <a name="servicenowSummary" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowSummary"></a>

```java
public java.lang.String getServicenowSummary();
```

- *Type:* java.lang.String

Ticket summary - Defaults to `{{`Wiz Issue: {{issue.control.name}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_summary AutomationRuleServicenowCreateTicket#servicenow_summary}

---

##### `servicenowTableName`<sup>Optional</sup> <a name="servicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowTableName"></a>

```java
public java.lang.String getServicenowTableName();
```

- *Type:* java.lang.String

Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_table_name AutomationRuleServicenowCreateTicket#servicenow_table_name}

---



