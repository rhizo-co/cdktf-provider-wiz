# `wiz_automation_rule_servicenow_create_ticket`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_servicenow_create_ticket`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket).

# `automationRuleServicenowCreateTicket` Submodule <a name="`automationRuleServicenowCreateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleServicenowCreateTicket <a name="AutomationRuleServicenowCreateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket wiz_automation_rule_servicenow_create_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new AutomationRuleServicenowCreateTicket(Construct Scope, string Id, AutomationRuleServicenowCreateTicketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig">AutomationRuleServicenowCreateTicketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig">AutomationRuleServicenowCreateTicketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowAttachEvidenceCsv">ResetServicenowAttachEvidenceCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowCustomFields">ResetServicenowCustomFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowDescription">ResetServicenowDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowSummary">ResetServicenowSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowTableName">ResetServicenowTableName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetServicenowAttachEvidenceCsv` <a name="ResetServicenowAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowAttachEvidenceCsv"></a>

```csharp
private void ResetServicenowAttachEvidenceCsv()
```

##### `ResetServicenowCustomFields` <a name="ResetServicenowCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowCustomFields"></a>

```csharp
private void ResetServicenowCustomFields()
```

##### `ResetServicenowDescription` <a name="ResetServicenowDescription" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowDescription"></a>

```csharp
private void ResetServicenowDescription()
```

##### `ResetServicenowSummary` <a name="ResetServicenowSummary" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowSummary"></a>

```csharp
private void ResetServicenowSummary()
```

##### `ResetServicenowTableName` <a name="ResetServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowTableName"></a>

```csharp
private void ResetServicenowTableName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleServicenowCreateTicket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleServicenowCreateTicket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleServicenowCreateTicket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filtersInput">FiltersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationIdInput">IntegrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsvInput">ServicenowAttachEvidenceCsvInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFieldsInput">ServicenowCustomFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescriptionInput">ServicenowDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummaryInput">ServicenowSummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableNameInput">ServicenowTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSourceInput">TriggerSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filters">Filters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsv">ServicenowAttachEvidenceCsv</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFields">ServicenowCustomFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescription">ServicenowDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummary">ServicenowSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableName">ServicenowTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSource">TriggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerType">TriggerType</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filtersInput"></a>

```csharp
public string FiltersInput { get; }
```

- *Type:* string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationIdInput"></a>

```csharp
public string IntegrationIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ServicenowAttachEvidenceCsvInput`<sup>Optional</sup> <a name="ServicenowAttachEvidenceCsvInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsvInput"></a>

```csharp
public object ServicenowAttachEvidenceCsvInput { get; }
```

- *Type:* object

---

##### `ServicenowCustomFieldsInput`<sup>Optional</sup> <a name="ServicenowCustomFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFieldsInput"></a>

```csharp
public string ServicenowCustomFieldsInput { get; }
```

- *Type:* string

---

##### `ServicenowDescriptionInput`<sup>Optional</sup> <a name="ServicenowDescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescriptionInput"></a>

```csharp
public string ServicenowDescriptionInput { get; }
```

- *Type:* string

---

##### `ServicenowSummaryInput`<sup>Optional</sup> <a name="ServicenowSummaryInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummaryInput"></a>

```csharp
public string ServicenowSummaryInput { get; }
```

- *Type:* string

---

##### `ServicenowTableNameInput`<sup>Optional</sup> <a name="ServicenowTableNameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableNameInput"></a>

```csharp
public string ServicenowTableNameInput { get; }
```

- *Type:* string

---

##### `TriggerSourceInput`<sup>Optional</sup> <a name="TriggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSourceInput"></a>

```csharp
public string TriggerSourceInput { get; }
```

- *Type:* string

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerTypeInput"></a>

```csharp
public string[] TriggerTypeInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filters"></a>

```csharp
public string Filters { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ServicenowAttachEvidenceCsv`<sup>Required</sup> <a name="ServicenowAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsv"></a>

```csharp
public object ServicenowAttachEvidenceCsv { get; }
```

- *Type:* object

---

##### `ServicenowCustomFields`<sup>Required</sup> <a name="ServicenowCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFields"></a>

```csharp
public string ServicenowCustomFields { get; }
```

- *Type:* string

---

##### `ServicenowDescription`<sup>Required</sup> <a name="ServicenowDescription" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescription"></a>

```csharp
public string ServicenowDescription { get; }
```

- *Type:* string

---

##### `ServicenowSummary`<sup>Required</sup> <a name="ServicenowSummary" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummary"></a>

```csharp
public string ServicenowSummary { get; }
```

- *Type:* string

---

##### `ServicenowTableName`<sup>Required</sup> <a name="ServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableName"></a>

```csharp
public string ServicenowTableName { get; }
```

- *Type:* string

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSource"></a>

```csharp
public string TriggerSource { get; }
```

- *Type:* string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerType"></a>

```csharp
public string[] TriggerType { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleServicenowCreateTicketConfig <a name="AutomationRuleServicenowCreateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new AutomationRuleServicenowCreateTicketConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    string Filters,
    string IntegrationId,
    string Name,
    string TriggerSource,
    string[] TriggerType,
    object Enabled = null,
    string ProjectId = null,
    object ServicenowAttachEvidenceCsv = null,
    string ServicenowCustomFields = null,
    string ServicenowDescription = null,
    string ServicenowSummary = null,
    string ServicenowTableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.description">Description</a></code> | <code>string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.filters">Filters</a></code> | <code>string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.integrationId">IntegrationId</a></code> | <code>string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.name">Name</a></code> | <code>string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerSource">TriggerSource</a></code> | <code>string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerType">TriggerType</a></code> | <code>string[]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Wiz internal ID for a project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowAttachEvidenceCsv">ServicenowAttachEvidenceCsv</a></code> | <code>object</code> | Upload issue evidence CSV as attachment? - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowCustomFields">ServicenowCustomFields</a></code> | <code>string</code> | Custom configuration fields as specified in Service Now. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowDescription">ServicenowDescription</a></code> | <code>string</code> | Ticket description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowSummary">ServicenowSummary</a></code> | <code>string</code> | Ticket summary - Defaults to `{{`Wiz Issue: {{issue.control.name}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowTableName">ServicenowTableName</a></code> | <code>string</code> | Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#description AutomationRuleServicenowCreateTicket#description}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.filters"></a>

```csharp
public string Filters { get; set; }
```

- *Type:* string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#filters AutomationRuleServicenowCreateTicket#filters}

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.integrationId"></a>

```csharp
public string IntegrationId { get; set; }
```

- *Type:* string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#integration_id AutomationRuleServicenowCreateTicket#integration_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#name AutomationRuleServicenowCreateTicket#name}

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#trigger_source AutomationRuleServicenowCreateTicket#trigger_source}

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerType"></a>

```csharp
public string[] TriggerType { get; set; }
```

- *Type:* string[]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_servicenow_create_ticket.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#trigger_type AutomationRuleServicenowCreateTicket#trigger_type}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#enabled AutomationRuleServicenowCreateTicket#enabled}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#project_id AutomationRuleServicenowCreateTicket#project_id}

---

##### `ServicenowAttachEvidenceCsv`<sup>Optional</sup> <a name="ServicenowAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowAttachEvidenceCsv"></a>

```csharp
public object ServicenowAttachEvidenceCsv { get; set; }
```

- *Type:* object

Upload issue evidence CSV as attachment? - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_attach_evidence_csv AutomationRuleServicenowCreateTicket#servicenow_attach_evidence_csv}

---

##### `ServicenowCustomFields`<sup>Optional</sup> <a name="ServicenowCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowCustomFields"></a>

```csharp
public string ServicenowCustomFields { get; set; }
```

- *Type:* string

Custom configuration fields as specified in Service Now.

Make sure you add the fields that are configured as required in Service Now Project, otherwise ticket creation will fail. Must be valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_custom_fields AutomationRuleServicenowCreateTicket#servicenow_custom_fields}

---

##### `ServicenowDescription`<sup>Optional</sup> <a name="ServicenowDescription" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowDescription"></a>

```csharp
public string ServicenowDescription { get; set; }
```

- *Type:* string

Ticket description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_description AutomationRuleServicenowCreateTicket#servicenow_description}

---

##### `ServicenowSummary`<sup>Optional</sup> <a name="ServicenowSummary" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowSummary"></a>

```csharp
public string ServicenowSummary { get; set; }
```

- *Type:* string

Ticket summary - Defaults to `{{`Wiz Issue: {{issue.control.name}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_summary AutomationRuleServicenowCreateTicket#servicenow_summary}

---

##### `ServicenowTableName`<sup>Optional</sup> <a name="ServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowTableName"></a>

```csharp
public string ServicenowTableName { get; set; }
```

- *Type:* string

Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_table_name AutomationRuleServicenowCreateTicket#servicenow_table_name}

---



