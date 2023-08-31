# `wiz_automation_rule_jira_add_comment`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_jira_add_comment`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment).

# `automationRuleJiraAddComment` Submodule <a name="`automationRuleJiraAddComment` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraAddComment <a name="AutomationRuleJiraAddComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment wiz_automation_rule_jira_add_comment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new AutomationRuleJiraAddComment(Construct Scope, string Id, AutomationRuleJiraAddCommentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig">AutomationRuleJiraAddCommentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig">AutomationRuleJiraAddCommentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraAddIssuesReport">ResetJiraAddIssuesReport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraComment">ResetJiraComment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraProjectKey">ResetJiraProjectKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetJiraAddIssuesReport` <a name="ResetJiraAddIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraAddIssuesReport"></a>

```csharp
private void ResetJiraAddIssuesReport()
```

##### `ResetJiraComment` <a name="ResetJiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraComment"></a>

```csharp
private void ResetJiraComment()
```

##### `ResetJiraProjectKey` <a name="ResetJiraProjectKey" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraProjectKey"></a>

```csharp
private void ResetJiraProjectKey()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleJiraAddComment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleJiraAddComment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleJiraAddComment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filtersInput">FiltersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationIdInput">IntegrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReportInput">JiraAddIssuesReportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraCommentInput">JiraCommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKeyInput">JiraProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSourceInput">TriggerSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filters">Filters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReport">JiraAddIssuesReport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraComment">JiraComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKey">JiraProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSource">TriggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerType">TriggerType</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filtersInput"></a>

```csharp
public string FiltersInput { get; }
```

- *Type:* string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationIdInput"></a>

```csharp
public string IntegrationIdInput { get; }
```

- *Type:* string

---

##### `JiraAddIssuesReportInput`<sup>Optional</sup> <a name="JiraAddIssuesReportInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReportInput"></a>

```csharp
public object JiraAddIssuesReportInput { get; }
```

- *Type:* object

---

##### `JiraCommentInput`<sup>Optional</sup> <a name="JiraCommentInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraCommentInput"></a>

```csharp
public string JiraCommentInput { get; }
```

- *Type:* string

---

##### `JiraProjectKeyInput`<sup>Optional</sup> <a name="JiraProjectKeyInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKeyInput"></a>

```csharp
public string JiraProjectKeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TriggerSourceInput`<sup>Optional</sup> <a name="TriggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSourceInput"></a>

```csharp
public string TriggerSourceInput { get; }
```

- *Type:* string

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerTypeInput"></a>

```csharp
public string[] TriggerTypeInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filters"></a>

```csharp
public string Filters { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `JiraAddIssuesReport`<sup>Required</sup> <a name="JiraAddIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReport"></a>

```csharp
public object JiraAddIssuesReport { get; }
```

- *Type:* object

---

##### `JiraComment`<sup>Required</sup> <a name="JiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraComment"></a>

```csharp
public string JiraComment { get; }
```

- *Type:* string

---

##### `JiraProjectKey`<sup>Required</sup> <a name="JiraProjectKey" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKey"></a>

```csharp
public string JiraProjectKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSource"></a>

```csharp
public string TriggerSource { get; }
```

- *Type:* string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerType"></a>

```csharp
public string[] TriggerType { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraAddCommentConfig <a name="AutomationRuleJiraAddCommentConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new AutomationRuleJiraAddCommentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Filters,
    string IntegrationId,
    string Name,
    string TriggerSource,
    string[] TriggerType,
    string Description = null,
    object Enabled = null,
    object JiraAddIssuesReport = null,
    string JiraComment = null,
    string JiraProjectKey = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.filters">Filters</a></code> | <code>string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.integrationId">IntegrationId</a></code> | <code>string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.name">Name</a></code> | <code>string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerSource">TriggerSource</a></code> | <code>string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerType">TriggerType</a></code> | <code>string[]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.description">Description</a></code> | <code>string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraAddIssuesReport">JiraAddIssuesReport</a></code> | <code>object</code> | Whether or not to attach a report on all open issues as an attachment to ticket, only relevant in CONTROL triggered actions - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraComment">JiraComment</a></code> | <code>string</code> | Issue Jira comment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraProjectKey">JiraProjectKey</a></code> | <code>string</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Wiz internal ID for a project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.filters"></a>

```csharp
public string Filters { get; set; }
```

- *Type:* string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#filters AutomationRuleJiraAddComment#filters}

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.integrationId"></a>

```csharp
public string IntegrationId { get; set; }
```

- *Type:* string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#integration_id AutomationRuleJiraAddComment#integration_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#name AutomationRuleJiraAddComment#name}

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerSource"></a>

```csharp
public string TriggerSource { get; set; }
```

- *Type:* string

Trigger source.

* Allowed values:

  * ISSUES
  * CLOUD_EVENTS
  * CONTROL
  * CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#trigger_source AutomationRuleJiraAddComment#trigger_source}

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerType"></a>

```csharp
public string[] TriggerType { get; set; }
```

- *Type:* string[]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_add_comment.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#trigger_type AutomationRuleJiraAddComment#trigger_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#description AutomationRuleJiraAddComment#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#enabled AutomationRuleJiraAddComment#enabled}

---

##### `JiraAddIssuesReport`<sup>Optional</sup> <a name="JiraAddIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraAddIssuesReport"></a>

```csharp
public object JiraAddIssuesReport { get; set; }
```

- *Type:* object

Whether or not to attach a report on all open issues as an attachment to ticket, only relevant in CONTROL triggered actions - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#jira_add_issues_report AutomationRuleJiraAddComment#jira_add_issues_report}

---

##### `JiraComment`<sup>Optional</sup> <a name="JiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraComment"></a>

```csharp
public string JiraComment { get; set; }
```

- *Type:* string

Issue Jira comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#jira_comment AutomationRuleJiraAddComment#jira_comment}

---

##### `JiraProjectKey`<sup>Optional</sup> <a name="JiraProjectKey" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraProjectKey"></a>

```csharp
public string JiraProjectKey { get; set; }
```

- *Type:* string

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#jira_project_key AutomationRuleJiraAddComment#jira_project_key}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_add_comment#project_id AutomationRuleJiraAddComment#project_id}

---



