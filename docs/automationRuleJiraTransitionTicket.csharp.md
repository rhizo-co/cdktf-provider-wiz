# `automationRuleJiraTransitionTicket` Submodule <a name="`automationRuleJiraTransitionTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraTransitionTicket <a name="AutomationRuleJiraTransitionTicket" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket wiz_automation_rule_jira_transition_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new AutomationRuleJiraTransitionTicket(Construct Scope, string Id, AutomationRuleJiraTransitionTicketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig">AutomationRuleJiraTransitionTicketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig">AutomationRuleJiraTransitionTicketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAdvancedFields">ResetJiraAdvancedFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAttachEvidenceCsv">ResetJiraAttachEvidenceCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraComment">ResetJiraComment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraCommentOnTransition">ResetJiraCommentOnTransition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraProject">ResetJiraProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraTransitionId">ResetJiraTransitionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetJiraAdvancedFields` <a name="ResetJiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAdvancedFields"></a>

```csharp
private void ResetJiraAdvancedFields()
```

##### `ResetJiraAttachEvidenceCsv` <a name="ResetJiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAttachEvidenceCsv"></a>

```csharp
private void ResetJiraAttachEvidenceCsv()
```

##### `ResetJiraComment` <a name="ResetJiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraComment"></a>

```csharp
private void ResetJiraComment()
```

##### `ResetJiraCommentOnTransition` <a name="ResetJiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraCommentOnTransition"></a>

```csharp
private void ResetJiraCommentOnTransition()
```

##### `ResetJiraProject` <a name="ResetJiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraProject"></a>

```csharp
private void ResetJiraProject()
```

##### `ResetJiraTransitionId` <a name="ResetJiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraTransitionId"></a>

```csharp
private void ResetJiraTransitionId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationRuleJiraTransitionTicket resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleJiraTransitionTicket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleJiraTransitionTicket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleJiraTransitionTicket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleJiraTransitionTicket.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AutomationRuleJiraTransitionTicket resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomationRuleJiraTransitionTicket to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomationRuleJiraTransitionTicket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AutomationRuleJiraTransitionTicket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filtersInput">FiltersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationIdInput">IntegrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFieldsInput">JiraAdvancedFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsvInput">JiraAttachEvidenceCsvInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentInput">JiraCommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransitionInput">JiraCommentOnTransitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProjectInput">JiraProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionIdInput">JiraTransitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSourceInput">TriggerSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filters">Filters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFields">JiraAdvancedFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsv">JiraAttachEvidenceCsv</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraComment">JiraComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransition">JiraCommentOnTransition</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProject">JiraProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionId">JiraTransitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSource">TriggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerType">TriggerType</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filtersInput"></a>

```csharp
public string FiltersInput { get; }
```

- *Type:* string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationIdInput"></a>

```csharp
public string IntegrationIdInput { get; }
```

- *Type:* string

---

##### `JiraAdvancedFieldsInput`<sup>Optional</sup> <a name="JiraAdvancedFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFieldsInput"></a>

```csharp
public string JiraAdvancedFieldsInput { get; }
```

- *Type:* string

---

##### `JiraAttachEvidenceCsvInput`<sup>Optional</sup> <a name="JiraAttachEvidenceCsvInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsvInput"></a>

```csharp
public object JiraAttachEvidenceCsvInput { get; }
```

- *Type:* object

---

##### `JiraCommentInput`<sup>Optional</sup> <a name="JiraCommentInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentInput"></a>

```csharp
public string JiraCommentInput { get; }
```

- *Type:* string

---

##### `JiraCommentOnTransitionInput`<sup>Optional</sup> <a name="JiraCommentOnTransitionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransitionInput"></a>

```csharp
public object JiraCommentOnTransitionInput { get; }
```

- *Type:* object

---

##### `JiraProjectInput`<sup>Optional</sup> <a name="JiraProjectInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProjectInput"></a>

```csharp
public string JiraProjectInput { get; }
```

- *Type:* string

---

##### `JiraTransitionIdInput`<sup>Optional</sup> <a name="JiraTransitionIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionIdInput"></a>

```csharp
public string JiraTransitionIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TriggerSourceInput`<sup>Optional</sup> <a name="TriggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSourceInput"></a>

```csharp
public string TriggerSourceInput { get; }
```

- *Type:* string

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerTypeInput"></a>

```csharp
public string[] TriggerTypeInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filters"></a>

```csharp
public string Filters { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `JiraAdvancedFields`<sup>Required</sup> <a name="JiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFields"></a>

```csharp
public string JiraAdvancedFields { get; }
```

- *Type:* string

---

##### `JiraAttachEvidenceCsv`<sup>Required</sup> <a name="JiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsv"></a>

```csharp
public object JiraAttachEvidenceCsv { get; }
```

- *Type:* object

---

##### `JiraComment`<sup>Required</sup> <a name="JiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraComment"></a>

```csharp
public string JiraComment { get; }
```

- *Type:* string

---

##### `JiraCommentOnTransition`<sup>Required</sup> <a name="JiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransition"></a>

```csharp
public object JiraCommentOnTransition { get; }
```

- *Type:* object

---

##### `JiraProject`<sup>Required</sup> <a name="JiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProject"></a>

```csharp
public string JiraProject { get; }
```

- *Type:* string

---

##### `JiraTransitionId`<sup>Required</sup> <a name="JiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionId"></a>

```csharp
public string JiraTransitionId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSource"></a>

```csharp
public string TriggerSource { get; }
```

- *Type:* string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerType"></a>

```csharp
public string[] TriggerType { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraTransitionTicketConfig <a name="AutomationRuleJiraTransitionTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new AutomationRuleJiraTransitionTicketConfig {
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
    string JiraAdvancedFields = null,
    object JiraAttachEvidenceCsv = null,
    string JiraComment = null,
    object JiraCommentOnTransition = null,
    string JiraProject = null,
    string JiraTransitionId = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.filters">Filters</a></code> | <code>string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.integrationId">IntegrationId</a></code> | <code>string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.name">Name</a></code> | <code>string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerSource">TriggerSource</a></code> | <code>string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerType">TriggerType</a></code> | <code>string[]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.description">Description</a></code> | <code>string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enabled?     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAdvancedFields">JiraAdvancedFields</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAttachEvidenceCsv">JiraAttachEvidenceCsv</a></code> | <code>object</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraComment">JiraComment</a></code> | <code>string</code> | Issue Jira comment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraCommentOnTransition">JiraCommentOnTransition</a></code> | <code>object</code> | Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraProject">JiraProject</a></code> | <code>string</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraTransitionId">JiraTransitionId</a></code> | <code>string</code> | Issue transition ID or Name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Wiz internal ID for a project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.filters"></a>

```csharp
public string Filters { get; set; }
```

- *Type:* string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#filters AutomationRuleJiraTransitionTicket#filters}

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.integrationId"></a>

```csharp
public string IntegrationId { get; set; }
```

- *Type:* string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#integration_id AutomationRuleJiraTransitionTicket#integration_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#name AutomationRuleJiraTransitionTicket#name}

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerSource"></a>

```csharp
public string TriggerSource { get; set; }
```

- *Type:* string

Trigger source.

* Allowed values:
  - ISSUES
  - CLOUD_EVENTS
  - CONTROL
  - CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#trigger_source AutomationRuleJiraTransitionTicket#trigger_source}

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerType"></a>

```csharp
public string[] TriggerType { get; set; }
```

- *Type:* string[]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_transition_ticket.
- Allowed values:
- CREATED
- UPDATED
- RESOLVED
- REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#trigger_type AutomationRuleJiraTransitionTicket#trigger_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#description AutomationRuleJiraTransitionTicket#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enabled?     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#enabled AutomationRuleJiraTransitionTicket#enabled}

---

##### `JiraAdvancedFields`<sup>Optional</sup> <a name="JiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAdvancedFields"></a>

```csharp
public string JiraAdvancedFields { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}.

---

##### `JiraAttachEvidenceCsv`<sup>Optional</sup> <a name="JiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAttachEvidenceCsv"></a>

```csharp
public object JiraAttachEvidenceCsv { get; set; }
```

- *Type:* object

Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_attach_evidence_csv AutomationRuleJiraTransitionTicket#jira_attach_evidence_csv}

---

##### `JiraComment`<sup>Optional</sup> <a name="JiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraComment"></a>

```csharp
public string JiraComment { get; set; }
```

- *Type:* string

Issue Jira comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_comment AutomationRuleJiraTransitionTicket#jira_comment}

---

##### `JiraCommentOnTransition`<sup>Optional</sup> <a name="JiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraCommentOnTransition"></a>

```csharp
public object JiraCommentOnTransition { get; set; }
```

- *Type:* object

Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_comment_on_transition AutomationRuleJiraTransitionTicket#jira_comment_on_transition}

---

##### `JiraProject`<sup>Optional</sup> <a name="JiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraProject"></a>

```csharp
public string JiraProject { get; set; }
```

- *Type:* string

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_project AutomationRuleJiraTransitionTicket#jira_project}

---

##### `JiraTransitionId`<sup>Optional</sup> <a name="JiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraTransitionId"></a>

```csharp
public string JiraTransitionId { get; set; }
```

- *Type:* string

Issue transition ID or Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_transition_id AutomationRuleJiraTransitionTicket#jira_transition_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#project_id AutomationRuleJiraTransitionTicket#project_id}

---



