# `wiz_automation_rule_servicenow_update_ticket`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_servicenow_update_ticket`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket).

# `automationRuleServicenowUpdateTicket` Submodule <a name="`automationRuleServicenowUpdateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleServicenowUpdateTicket <a name="AutomationRuleServicenowUpdateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket wiz_automation_rule_servicenow_update_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new AutomationRuleServicenowUpdateTicket(Construct Scope, string Id, AutomationRuleServicenowUpdateTicketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig">AutomationRuleServicenowUpdateTicketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig">AutomationRuleServicenowUpdateTicketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowAttachIssuesReport">ResetServicenowAttachIssuesReport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowFields">ResetServicenowFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowTableName">ResetServicenowTableName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetServicenowAttachIssuesReport` <a name="ResetServicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowAttachIssuesReport"></a>

```csharp
private void ResetServicenowAttachIssuesReport()
```

##### `ResetServicenowFields` <a name="ResetServicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowFields"></a>

```csharp
private void ResetServicenowFields()
```

##### `ResetServicenowTableName` <a name="ResetServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowTableName"></a>

```csharp
private void ResetServicenowTableName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleServicenowUpdateTicket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleServicenowUpdateTicket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

AutomationRuleServicenowUpdateTicket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filtersInput">FiltersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationIdInput">IntegrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReportInput">ServicenowAttachIssuesReportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFieldsInput">ServicenowFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableNameInput">ServicenowTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSourceInput">TriggerSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filters">Filters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReport">ServicenowAttachIssuesReport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFields">ServicenowFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableName">ServicenowTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSource">TriggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerType">TriggerType</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filtersInput"></a>

```csharp
public string FiltersInput { get; }
```

- *Type:* string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationIdInput"></a>

```csharp
public string IntegrationIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ServicenowAttachIssuesReportInput`<sup>Optional</sup> <a name="ServicenowAttachIssuesReportInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReportInput"></a>

```csharp
public object ServicenowAttachIssuesReportInput { get; }
```

- *Type:* object

---

##### `ServicenowFieldsInput`<sup>Optional</sup> <a name="ServicenowFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFieldsInput"></a>

```csharp
public string ServicenowFieldsInput { get; }
```

- *Type:* string

---

##### `ServicenowTableNameInput`<sup>Optional</sup> <a name="ServicenowTableNameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableNameInput"></a>

```csharp
public string ServicenowTableNameInput { get; }
```

- *Type:* string

---

##### `TriggerSourceInput`<sup>Optional</sup> <a name="TriggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSourceInput"></a>

```csharp
public string TriggerSourceInput { get; }
```

- *Type:* string

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerTypeInput"></a>

```csharp
public string[] TriggerTypeInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filters"></a>

```csharp
public string Filters { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ServicenowAttachIssuesReport`<sup>Required</sup> <a name="ServicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReport"></a>

```csharp
public object ServicenowAttachIssuesReport { get; }
```

- *Type:* object

---

##### `ServicenowFields`<sup>Required</sup> <a name="ServicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFields"></a>

```csharp
public string ServicenowFields { get; }
```

- *Type:* string

---

##### `ServicenowTableName`<sup>Required</sup> <a name="ServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableName"></a>

```csharp
public string ServicenowTableName { get; }
```

- *Type:* string

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSource"></a>

```csharp
public string TriggerSource { get; }
```

- *Type:* string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerType"></a>

```csharp
public string[] TriggerType { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleServicenowUpdateTicketConfig <a name="AutomationRuleServicenowUpdateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new AutomationRuleServicenowUpdateTicketConfig {
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
    object ServicenowAttachIssuesReport = null,
    string ServicenowFields = null,
    string ServicenowTableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.description">Description</a></code> | <code>string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.filters">Filters</a></code> | <code>string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.integrationId">IntegrationId</a></code> | <code>string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.name">Name</a></code> | <code>string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerSource">TriggerSource</a></code> | <code>string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerType">TriggerType</a></code> | <code>string[]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Wiz internal ID for a project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowAttachIssuesReport">ServicenowAttachIssuesReport</a></code> | <code>object</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowFields">ServicenowFields</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowTableName">ServicenowTableName</a></code> | <code>string</code> | Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#description AutomationRuleServicenowUpdateTicket#description}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.filters"></a>

```csharp
public string Filters { get; set; }
```

- *Type:* string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#filters AutomationRuleServicenowUpdateTicket#filters}

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.integrationId"></a>

```csharp
public string IntegrationId { get; set; }
```

- *Type:* string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#integration_id AutomationRuleServicenowUpdateTicket#integration_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#name AutomationRuleServicenowUpdateTicket#name}

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#trigger_source AutomationRuleServicenowUpdateTicket#trigger_source}

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerType"></a>

```csharp
public string[] TriggerType { get; set; }
```

- *Type:* string[]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_servicenow_update_ticket.

* Allowed values:

  * CREATED
  * UPDATED
  * RESOLVED
  * REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#trigger_type AutomationRuleServicenowUpdateTicket#trigger_type}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#enabled AutomationRuleServicenowUpdateTicket#enabled}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#project_id AutomationRuleServicenowUpdateTicket#project_id}

---

##### `ServicenowAttachIssuesReport`<sup>Optional</sup> <a name="ServicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowAttachIssuesReport"></a>

```csharp
public object ServicenowAttachIssuesReport { get; set; }
```

- *Type:* object

Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_attach_issues_report AutomationRuleServicenowUpdateTicket#servicenow_attach_issues_report}

---

##### `ServicenowFields`<sup>Optional</sup> <a name="ServicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowFields"></a>

```csharp
public string ServicenowFields { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}.

---

##### `ServicenowTableName`<sup>Optional</sup> <a name="ServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowTableName"></a>

```csharp
public string ServicenowTableName { get; set; }
```

- *Type:* string

Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_table_name AutomationRuleServicenowUpdateTicket#servicenow_table_name}

---



