# `wiz_automation_rule_jira_create_ticket`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_jira_create_ticket`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket).

# `automationRuleJiraCreateTicket` Submodule <a name="`automationRuleJiraCreateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraCreateTicket <a name="AutomationRuleJiraCreateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket wiz_automation_rule_jira_create_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new AutomationRuleJiraCreateTicket(Construct Scope, string Id, AutomationRuleJiraCreateTicketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig">AutomationRuleJiraCreateTicketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig">AutomationRuleJiraCreateTicketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAlternativeDescriptionField">ResetJiraAlternativeDescriptionField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAssignee">ResetJiraAssignee</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAttachEvidenceCsv">ResetJiraAttachEvidenceCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraComponents">ResetJiraComponents</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraCustomFields">ResetJiraCustomFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraDescription">ResetJiraDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraFixVersion">ResetJiraFixVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraIssueType">ResetJiraIssueType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraLabels">ResetJiraLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraPriority">ResetJiraPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraProject">ResetJiraProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraSummary">ResetJiraSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetJiraAlternativeDescriptionField` <a name="ResetJiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAlternativeDescriptionField"></a>

```csharp
private void ResetJiraAlternativeDescriptionField()
```

##### `ResetJiraAssignee` <a name="ResetJiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAssignee"></a>

```csharp
private void ResetJiraAssignee()
```

##### `ResetJiraAttachEvidenceCsv` <a name="ResetJiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAttachEvidenceCsv"></a>

```csharp
private void ResetJiraAttachEvidenceCsv()
```

##### `ResetJiraComponents` <a name="ResetJiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraComponents"></a>

```csharp
private void ResetJiraComponents()
```

##### `ResetJiraCustomFields` <a name="ResetJiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraCustomFields"></a>

```csharp
private void ResetJiraCustomFields()
```

##### `ResetJiraDescription` <a name="ResetJiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraDescription"></a>

```csharp
private void ResetJiraDescription()
```

##### `ResetJiraFixVersion` <a name="ResetJiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraFixVersion"></a>

```csharp
private void ResetJiraFixVersion()
```

##### `ResetJiraIssueType` <a name="ResetJiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraIssueType"></a>

```csharp
private void ResetJiraIssueType()
```

##### `ResetJiraLabels` <a name="ResetJiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraLabels"></a>

```csharp
private void ResetJiraLabels()
```

##### `ResetJiraPriority` <a name="ResetJiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraPriority"></a>

```csharp
private void ResetJiraPriority()
```

##### `ResetJiraProject` <a name="ResetJiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraProject"></a>

```csharp
private void ResetJiraProject()
```

##### `ResetJiraSummary` <a name="ResetJiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraSummary"></a>

```csharp
private void ResetJiraSummary()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleJiraCreateTicket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleJiraCreateTicket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleJiraCreateTicket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filtersInput">FiltersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationIdInput">IntegrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionFieldInput">JiraAlternativeDescriptionFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssigneeInput">JiraAssigneeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsvInput">JiraAttachEvidenceCsvInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponentsInput">JiraComponentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFieldsInput">JiraCustomFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescriptionInput">JiraDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersionInput">JiraFixVersionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueTypeInput">JiraIssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabelsInput">JiraLabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriorityInput">JiraPriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProjectInput">JiraProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummaryInput">JiraSummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSourceInput">TriggerSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filters">Filters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionField">JiraAlternativeDescriptionField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssignee">JiraAssignee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsv">JiraAttachEvidenceCsv</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponents">JiraComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFields">JiraCustomFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescription">JiraDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersion">JiraFixVersion</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueType">JiraIssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabels">JiraLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriority">JiraPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProject">JiraProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummary">JiraSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSource">TriggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerType">TriggerType</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filtersInput"></a>

```csharp
public string FiltersInput { get; }
```

- *Type:* string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationIdInput"></a>

```csharp
public string IntegrationIdInput { get; }
```

- *Type:* string

---

##### `JiraAlternativeDescriptionFieldInput`<sup>Optional</sup> <a name="JiraAlternativeDescriptionFieldInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionFieldInput"></a>

```csharp
public string JiraAlternativeDescriptionFieldInput { get; }
```

- *Type:* string

---

##### `JiraAssigneeInput`<sup>Optional</sup> <a name="JiraAssigneeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssigneeInput"></a>

```csharp
public string JiraAssigneeInput { get; }
```

- *Type:* string

---

##### `JiraAttachEvidenceCsvInput`<sup>Optional</sup> <a name="JiraAttachEvidenceCsvInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsvInput"></a>

```csharp
public object JiraAttachEvidenceCsvInput { get; }
```

- *Type:* object

---

##### `JiraComponentsInput`<sup>Optional</sup> <a name="JiraComponentsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponentsInput"></a>

```csharp
public string[] JiraComponentsInput { get; }
```

- *Type:* string[]

---

##### `JiraCustomFieldsInput`<sup>Optional</sup> <a name="JiraCustomFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFieldsInput"></a>

```csharp
public string JiraCustomFieldsInput { get; }
```

- *Type:* string

---

##### `JiraDescriptionInput`<sup>Optional</sup> <a name="JiraDescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescriptionInput"></a>

```csharp
public string JiraDescriptionInput { get; }
```

- *Type:* string

---

##### `JiraFixVersionInput`<sup>Optional</sup> <a name="JiraFixVersionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersionInput"></a>

```csharp
public string[] JiraFixVersionInput { get; }
```

- *Type:* string[]

---

##### `JiraIssueTypeInput`<sup>Optional</sup> <a name="JiraIssueTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueTypeInput"></a>

```csharp
public string JiraIssueTypeInput { get; }
```

- *Type:* string

---

##### `JiraLabelsInput`<sup>Optional</sup> <a name="JiraLabelsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabelsInput"></a>

```csharp
public string[] JiraLabelsInput { get; }
```

- *Type:* string[]

---

##### `JiraPriorityInput`<sup>Optional</sup> <a name="JiraPriorityInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriorityInput"></a>

```csharp
public string JiraPriorityInput { get; }
```

- *Type:* string

---

##### `JiraProjectInput`<sup>Optional</sup> <a name="JiraProjectInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProjectInput"></a>

```csharp
public string JiraProjectInput { get; }
```

- *Type:* string

---

##### `JiraSummaryInput`<sup>Optional</sup> <a name="JiraSummaryInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummaryInput"></a>

```csharp
public string JiraSummaryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TriggerSourceInput`<sup>Optional</sup> <a name="TriggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSourceInput"></a>

```csharp
public string TriggerSourceInput { get; }
```

- *Type:* string

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerTypeInput"></a>

```csharp
public string[] TriggerTypeInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filters"></a>

```csharp
public string Filters { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `JiraAlternativeDescriptionField`<sup>Required</sup> <a name="JiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionField"></a>

```csharp
public string JiraAlternativeDescriptionField { get; }
```

- *Type:* string

---

##### `JiraAssignee`<sup>Required</sup> <a name="JiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssignee"></a>

```csharp
public string JiraAssignee { get; }
```

- *Type:* string

---

##### `JiraAttachEvidenceCsv`<sup>Required</sup> <a name="JiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsv"></a>

```csharp
public object JiraAttachEvidenceCsv { get; }
```

- *Type:* object

---

##### `JiraComponents`<sup>Required</sup> <a name="JiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponents"></a>

```csharp
public string[] JiraComponents { get; }
```

- *Type:* string[]

---

##### `JiraCustomFields`<sup>Required</sup> <a name="JiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFields"></a>

```csharp
public string JiraCustomFields { get; }
```

- *Type:* string

---

##### `JiraDescription`<sup>Required</sup> <a name="JiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescription"></a>

```csharp
public string JiraDescription { get; }
```

- *Type:* string

---

##### `JiraFixVersion`<sup>Required</sup> <a name="JiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersion"></a>

```csharp
public string[] JiraFixVersion { get; }
```

- *Type:* string[]

---

##### `JiraIssueType`<sup>Required</sup> <a name="JiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueType"></a>

```csharp
public string JiraIssueType { get; }
```

- *Type:* string

---

##### `JiraLabels`<sup>Required</sup> <a name="JiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabels"></a>

```csharp
public string[] JiraLabels { get; }
```

- *Type:* string[]

---

##### `JiraPriority`<sup>Required</sup> <a name="JiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriority"></a>

```csharp
public string JiraPriority { get; }
```

- *Type:* string

---

##### `JiraProject`<sup>Required</sup> <a name="JiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProject"></a>

```csharp
public string JiraProject { get; }
```

- *Type:* string

---

##### `JiraSummary`<sup>Required</sup> <a name="JiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummary"></a>

```csharp
public string JiraSummary { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSource"></a>

```csharp
public string TriggerSource { get; }
```

- *Type:* string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerType"></a>

```csharp
public string[] TriggerType { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraCreateTicketConfig <a name="AutomationRuleJiraCreateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new AutomationRuleJiraCreateTicketConfig {
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
    string JiraAlternativeDescriptionField = null,
    string JiraAssignee = null,
    object JiraAttachEvidenceCsv = null,
    string[] JiraComponents = null,
    string JiraCustomFields = null,
    string JiraDescription = null,
    string[] JiraFixVersion = null,
    string JiraIssueType = null,
    string[] JiraLabels = null,
    string JiraPriority = null,
    string JiraProject = null,
    string JiraSummary = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.filters">Filters</a></code> | <code>string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.integrationId">IntegrationId</a></code> | <code>string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.name">Name</a></code> | <code>string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerSource">TriggerSource</a></code> | <code>string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerType">TriggerType</a></code> | <code>string[]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.description">Description</a></code> | <code>string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAlternativeDescriptionField">JiraAlternativeDescriptionField</a></code> | <code>string</code> | Issue alternative description field. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAssignee">JiraAssignee</a></code> | <code>string</code> | Issue assignee. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAttachEvidenceCsv">JiraAttachEvidenceCsv</a></code> | <code>object</code> | Upload issue evidence CSV as attachment? - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraComponents">JiraComponents</a></code> | <code>string[]</code> | Issue components. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraCustomFields">JiraCustomFields</a></code> | <code>string</code> | Custom configuration fields as specified in Jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraDescription">JiraDescription</a></code> | <code>string</code> | Issue description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraFixVersion">JiraFixVersion</a></code> | <code>string[]</code> | Issue fix versions. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraIssueType">JiraIssueType</a></code> | <code>string</code> | Issue type - Defaults to `{{`Vulnerability`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraLabels">JiraLabels</a></code> | <code>string[]</code> | Issue labels. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraPriority">JiraPriority</a></code> | <code>string</code> | Issue priority. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraProject">JiraProject</a></code> | <code>string</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraSummary">JiraSummary</a></code> | <code>string</code> | Issue summary - Defaults to `{{`Wiz Issue: {{control.name}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Wiz internal ID for a project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.filters"></a>

```csharp
public string Filters { get; set; }
```

- *Type:* string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#filters AutomationRuleJiraCreateTicket#filters}

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.integrationId"></a>

```csharp
public string IntegrationId { get; set; }
```

- *Type:* string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#integration_id AutomationRuleJiraCreateTicket#integration_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#name AutomationRuleJiraCreateTicket#name}

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#trigger_source AutomationRuleJiraCreateTicket#trigger_source}

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerType"></a>

```csharp
public string[] TriggerType { get; set; }
```

- *Type:* string[]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_create_ticket.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#trigger_type AutomationRuleJiraCreateTicket#trigger_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#description AutomationRuleJiraCreateTicket#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#enabled AutomationRuleJiraCreateTicket#enabled}

---

##### `JiraAlternativeDescriptionField`<sup>Optional</sup> <a name="JiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAlternativeDescriptionField"></a>

```csharp
public string JiraAlternativeDescriptionField { get; set; }
```

- *Type:* string

Issue alternative description field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_alternative_description_field AutomationRuleJiraCreateTicket#jira_alternative_description_field}

---

##### `JiraAssignee`<sup>Optional</sup> <a name="JiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAssignee"></a>

```csharp
public string JiraAssignee { get; set; }
```

- *Type:* string

Issue assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_assignee AutomationRuleJiraCreateTicket#jira_assignee}

---

##### `JiraAttachEvidenceCsv`<sup>Optional</sup> <a name="JiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAttachEvidenceCsv"></a>

```csharp
public object JiraAttachEvidenceCsv { get; set; }
```

- *Type:* object

Upload issue evidence CSV as attachment? - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_attach_evidence_csv AutomationRuleJiraCreateTicket#jira_attach_evidence_csv}

---

##### `JiraComponents`<sup>Optional</sup> <a name="JiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraComponents"></a>

```csharp
public string[] JiraComponents { get; set; }
```

- *Type:* string[]

Issue components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_components AutomationRuleJiraCreateTicket#jira_components}

---

##### `JiraCustomFields`<sup>Optional</sup> <a name="JiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraCustomFields"></a>

```csharp
public string JiraCustomFields { get; set; }
```

- *Type:* string

Custom configuration fields as specified in Jira.

Make sure you add the fields that are configured as required in Jira Project, otherwise ticket creation will fail. Must be valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_custom_fields AutomationRuleJiraCreateTicket#jira_custom_fields}

---

##### `JiraDescription`<sup>Optional</sup> <a name="JiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraDescription"></a>

```csharp
public string JiraDescription { get; set; }
```

- *Type:* string

Issue description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_description AutomationRuleJiraCreateTicket#jira_description}

---

##### `JiraFixVersion`<sup>Optional</sup> <a name="JiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraFixVersion"></a>

```csharp
public string[] JiraFixVersion { get; set; }
```

- *Type:* string[]

Issue fix versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_fix_version AutomationRuleJiraCreateTicket#jira_fix_version}

---

##### `JiraIssueType`<sup>Optional</sup> <a name="JiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraIssueType"></a>

```csharp
public string JiraIssueType { get; set; }
```

- *Type:* string

Issue type - Defaults to `{{`Vulnerability`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_issue_type AutomationRuleJiraCreateTicket#jira_issue_type}

---

##### `JiraLabels`<sup>Optional</sup> <a name="JiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraLabels"></a>

```csharp
public string[] JiraLabels { get; set; }
```

- *Type:* string[]

Issue labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_labels AutomationRuleJiraCreateTicket#jira_labels}

---

##### `JiraPriority`<sup>Optional</sup> <a name="JiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraPriority"></a>

```csharp
public string JiraPriority { get; set; }
```

- *Type:* string

Issue priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_priority AutomationRuleJiraCreateTicket#jira_priority}

---

##### `JiraProject`<sup>Optional</sup> <a name="JiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraProject"></a>

```csharp
public string JiraProject { get; set; }
```

- *Type:* string

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_project AutomationRuleJiraCreateTicket#jira_project}

---

##### `JiraSummary`<sup>Optional</sup> <a name="JiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraSummary"></a>

```csharp
public string JiraSummary { get; set; }
```

- *Type:* string

Issue summary - Defaults to `{{`Wiz Issue: {{control.name}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_summary AutomationRuleJiraCreateTicket#jira_summary}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#project_id AutomationRuleJiraCreateTicket#project_id}

---



