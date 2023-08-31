# `wiz_automation_rule_servicenow_update_ticket`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_servicenow_update_ticket`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket).

# `automationRuleServicenowUpdateTicket` Submodule <a name="`automationRuleServicenowUpdateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleServicenowUpdateTicket <a name="AutomationRuleServicenowUpdateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket wiz_automation_rule_servicenow_update_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_servicenow_update_ticket.AutomationRuleServicenowUpdateTicket;

AutomationRuleServicenowUpdateTicket.Builder.create(Construct scope, java.lang.String id)
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
//  .servicenowAttachIssuesReport(java.lang.Boolean)
//  .servicenowAttachIssuesReport(IResolvable)
//  .servicenowFields(java.lang.String)
//  .servicenowTableName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.filters">filters</a></code> | <code>java.lang.String</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Wiz internal ID for a project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowAttachIssuesReport">servicenowAttachIssuesReport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowFields">servicenowFields</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowTableName">servicenowTableName</a></code> | <code>java.lang.String</code> | Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#description AutomationRuleServicenowUpdateTicket#description}

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.filters"></a>

- *Type:* java.lang.String

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#filters AutomationRuleServicenowUpdateTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.integrationId"></a>

- *Type:* java.lang.String

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#integration_id AutomationRuleServicenowUpdateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#name AutomationRuleServicenowUpdateTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.triggerSource"></a>

- *Type:* java.lang.String

Trigger source.

* Allowed values:

  * ISSUES
  * CLOUD_EVENTS
  * CONTROL
  * CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#trigger_source AutomationRuleServicenowUpdateTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.triggerType"></a>

- *Type:* java.util.List<java.lang.String>

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_servicenow_update_ticket.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#trigger_type AutomationRuleServicenowUpdateTicket#trigger_type}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#enabled AutomationRuleServicenowUpdateTicket#enabled}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#project_id AutomationRuleServicenowUpdateTicket#project_id}

---

##### `servicenowAttachIssuesReport`<sup>Optional</sup> <a name="servicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowAttachIssuesReport"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_attach_issues_report AutomationRuleServicenowUpdateTicket#servicenow_attach_issues_report}

---

##### `servicenowFields`<sup>Optional</sup> <a name="servicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowFields"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}.

---

##### `servicenowTableName`<sup>Optional</sup> <a name="servicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.servicenowTableName"></a>

- *Type:* java.lang.String

Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_table_name AutomationRuleServicenowUpdateTicket#servicenow_table_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowAttachIssuesReport">resetServicenowAttachIssuesReport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowFields">resetServicenowFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowTableName">resetServicenowTableName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetServicenowAttachIssuesReport` <a name="resetServicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowAttachIssuesReport"></a>

```java
public void resetServicenowAttachIssuesReport()
```

##### `resetServicenowFields` <a name="resetServicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowFields"></a>

```java
public void resetServicenowFields()
```

##### `resetServicenowTableName` <a name="resetServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowTableName"></a>

```java
public void resetServicenowTableName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_servicenow_update_ticket.AutomationRuleServicenowUpdateTicket;

AutomationRuleServicenowUpdateTicket.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_servicenow_update_ticket.AutomationRuleServicenowUpdateTicket;

AutomationRuleServicenowUpdateTicket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_servicenow_update_ticket.AutomationRuleServicenowUpdateTicket;

AutomationRuleServicenowUpdateTicket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.actionId">actionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filtersInput">filtersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationIdInput">integrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReportInput">servicenowAttachIssuesReportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFieldsInput">servicenowFieldsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableNameInput">servicenowTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSourceInput">triggerSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerTypeInput">triggerTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filters">filters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReport">servicenowAttachIssuesReport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFields">servicenowFields</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableName">servicenowTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filtersInput"></a>

```java
public java.lang.String getFiltersInput();
```

- *Type:* java.lang.String

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationIdInput"></a>

```java
public java.lang.String getIntegrationIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `servicenowAttachIssuesReportInput`<sup>Optional</sup> <a name="servicenowAttachIssuesReportInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReportInput"></a>

```java
public java.lang.Object getServicenowAttachIssuesReportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `servicenowFieldsInput`<sup>Optional</sup> <a name="servicenowFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFieldsInput"></a>

```java
public java.lang.String getServicenowFieldsInput();
```

- *Type:* java.lang.String

---

##### `servicenowTableNameInput`<sup>Optional</sup> <a name="servicenowTableNameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableNameInput"></a>

```java
public java.lang.String getServicenowTableNameInput();
```

- *Type:* java.lang.String

---

##### `triggerSourceInput`<sup>Optional</sup> <a name="triggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSourceInput"></a>

```java
public java.lang.String getTriggerSourceInput();
```

- *Type:* java.lang.String

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerTypeInput"></a>

```java
public java.util.List<java.lang.String> getTriggerTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filters"></a>

```java
public java.lang.String getFilters();
```

- *Type:* java.lang.String

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `servicenowAttachIssuesReport`<sup>Required</sup> <a name="servicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReport"></a>

```java
public java.lang.Object getServicenowAttachIssuesReport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `servicenowFields`<sup>Required</sup> <a name="servicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFields"></a>

```java
public java.lang.String getServicenowFields();
```

- *Type:* java.lang.String

---

##### `servicenowTableName`<sup>Required</sup> <a name="servicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableName"></a>

```java
public java.lang.String getServicenowTableName();
```

- *Type:* java.lang.String

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSource"></a>

```java
public java.lang.String getTriggerSource();
```

- *Type:* java.lang.String

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerType"></a>

```java
public java.util.List<java.lang.String> getTriggerType();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleServicenowUpdateTicketConfig <a name="AutomationRuleServicenowUpdateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.automation_rule_servicenow_update_ticket.AutomationRuleServicenowUpdateTicketConfig;

AutomationRuleServicenowUpdateTicketConfig.builder()
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
//  .servicenowAttachIssuesReport(java.lang.Boolean)
//  .servicenowAttachIssuesReport(IResolvable)
//  .servicenowFields(java.lang.String)
//  .servicenowTableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.filters">filters</a></code> | <code>java.lang.String</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerType">triggerType</a></code> | <code>java.util.List<java.lang.String></code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Wiz internal ID for a project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowAttachIssuesReport">servicenowAttachIssuesReport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowFields">servicenowFields</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowTableName">servicenowTableName</a></code> | <code>java.lang.String</code> | Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#description AutomationRuleServicenowUpdateTicket#description}

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.filters"></a>

```java
public java.lang.String getFilters();
```

- *Type:* java.lang.String

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#filters AutomationRuleServicenowUpdateTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#integration_id AutomationRuleServicenowUpdateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#name AutomationRuleServicenowUpdateTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#trigger_source AutomationRuleServicenowUpdateTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerType"></a>

```java
public java.util.List<java.lang.String> getTriggerType();
```

- *Type:* java.util.List<java.lang.String>

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_servicenow_update_ticket.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#trigger_type AutomationRuleServicenowUpdateTicket#trigger_type}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#enabled AutomationRuleServicenowUpdateTicket#enabled}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#project_id AutomationRuleServicenowUpdateTicket#project_id}

---

##### `servicenowAttachIssuesReport`<sup>Optional</sup> <a name="servicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowAttachIssuesReport"></a>

```java
public java.lang.Object getServicenowAttachIssuesReport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_attach_issues_report AutomationRuleServicenowUpdateTicket#servicenow_attach_issues_report}

---

##### `servicenowFields`<sup>Optional</sup> <a name="servicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowFields"></a>

```java
public java.lang.String getServicenowFields();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}.

---

##### `servicenowTableName`<sup>Optional</sup> <a name="servicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowTableName"></a>

```java
public java.lang.String getServicenowTableName();
```

- *Type:* java.lang.String

Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_table_name AutomationRuleServicenowUpdateTicket#servicenow_table_name}

---



