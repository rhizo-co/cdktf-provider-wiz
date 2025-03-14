# `dataWizCloudAccounts` Submodule <a name="`dataWizCloudAccounts` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizCloudAccounts <a name="DataWizCloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts wiz_cloud_accounts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudAccounts(Construct Scope, string Id, DataWizCloudAccountsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig">DataWizCloudAccountsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig">DataWizCloudAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetAssignedToProject">ResetAssignedToProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetCloudProvider">ResetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorId">ResetConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorIssueId">ResetConnectorIssueId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetHasMultipleConnectorSources">ResetHasMultipleConnectorSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetIds">ResetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetMaxPages">ResetMaxPages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAssignedToProject` <a name="ResetAssignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetAssignedToProject"></a>

```csharp
private void ResetAssignedToProject()
```

##### `ResetCloudProvider` <a name="ResetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetCloudProvider"></a>

```csharp
private void ResetCloudProvider()
```

##### `ResetConnectorId` <a name="ResetConnectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorId"></a>

```csharp
private void ResetConnectorId()
```

##### `ResetConnectorIssueId` <a name="ResetConnectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorIssueId"></a>

```csharp
private void ResetConnectorIssueId()
```

##### `ResetFirst` <a name="ResetFirst" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetHasMultipleConnectorSources` <a name="ResetHasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetHasMultipleConnectorSources"></a>

```csharp
private void ResetHasMultipleConnectorSources()
```

##### `ResetIds` <a name="ResetIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetIds"></a>

```csharp
private void ResetIds()
```

##### `ResetMaxPages` <a name="ResetMaxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetMaxPages"></a>

```csharp
private void ResetMaxPages()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetSearch` <a name="ResetSearch" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataWizCloudAccounts resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizCloudAccounts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizCloudAccounts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizCloudAccounts.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizCloudAccounts.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataWizCloudAccounts resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataWizCloudAccounts to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataWizCloudAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataWizCloudAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudAccounts">CloudAccounts</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList">DataWizCloudAccountsCloudAccountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProjectInput">AssignedToProjectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProviderInput">CloudProviderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIdInput">ConnectorIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueIdInput">ConnectorIssueIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSourcesInput">HasMultipleConnectorSourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.idsInput">IdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPagesInput">MaxPagesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.searchInput">SearchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.statusInput">StatusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProject">AssignedToProject</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProvider">CloudProvider</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorId">ConnectorId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueId">ConnectorIssueId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSources">HasMultipleConnectorSources</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPages">MaxPages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.search">Search</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.status">Status</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CloudAccounts`<sup>Required</sup> <a name="CloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudAccounts"></a>

```csharp
public DataWizCloudAccountsCloudAccountsList CloudAccounts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList">DataWizCloudAccountsCloudAccountsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AssignedToProjectInput`<sup>Optional</sup> <a name="AssignedToProjectInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProjectInput"></a>

```csharp
public object AssignedToProjectInput { get; }
```

- *Type:* object

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProviderInput"></a>

```csharp
public string[] CloudProviderInput { get; }
```

- *Type:* string[]

---

##### `ConnectorIdInput`<sup>Optional</sup> <a name="ConnectorIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIdInput"></a>

```csharp
public string[] ConnectorIdInput { get; }
```

- *Type:* string[]

---

##### `ConnectorIssueIdInput`<sup>Optional</sup> <a name="ConnectorIssueIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueIdInput"></a>

```csharp
public string[] ConnectorIssueIdInput { get; }
```

- *Type:* string[]

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `HasMultipleConnectorSourcesInput`<sup>Optional</sup> <a name="HasMultipleConnectorSourcesInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSourcesInput"></a>

```csharp
public object HasMultipleConnectorSourcesInput { get; }
```

- *Type:* object

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.idsInput"></a>

```csharp
public string[] IdsInput { get; }
```

- *Type:* string[]

---

##### `MaxPagesInput`<sup>Optional</sup> <a name="MaxPagesInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPagesInput"></a>

```csharp
public double MaxPagesInput { get; }
```

- *Type:* double

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.searchInput"></a>

```csharp
public string[] SearchInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.statusInput"></a>

```csharp
public string[] StatusInput { get; }
```

- *Type:* string[]

---

##### `AssignedToProject`<sup>Required</sup> <a name="AssignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProject"></a>

```csharp
public object AssignedToProject { get; }
```

- *Type:* object

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProvider"></a>

```csharp
public string[] CloudProvider { get; }
```

- *Type:* string[]

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorId"></a>

```csharp
public string[] ConnectorId { get; }
```

- *Type:* string[]

---

##### `ConnectorIssueId`<sup>Required</sup> <a name="ConnectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueId"></a>

```csharp
public string[] ConnectorIssueId { get; }
```

- *Type:* string[]

---

##### `First`<sup>Required</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `HasMultipleConnectorSources`<sup>Required</sup> <a name="HasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSources"></a>

```csharp
public object HasMultipleConnectorSources { get; }
```

- *Type:* object

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `MaxPages`<sup>Required</sup> <a name="MaxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPages"></a>

```csharp
public double MaxPages { get; }
```

- *Type:* double

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.search"></a>

```csharp
public string[] Search { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.status"></a>

```csharp
public string[] Status { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizCloudAccountsCloudAccounts <a name="DataWizCloudAccountsCloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudAccountsCloudAccounts {

};
```


### DataWizCloudAccountsConfig <a name="DataWizCloudAccountsConfig" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudAccountsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AssignedToProject = null,
    string[] CloudProvider = null,
    string[] ConnectorId = null,
    string[] ConnectorIssueId = null,
    double First = null,
    object HasMultipleConnectorSources = null,
    string[] Ids = null,
    double MaxPages = null,
    string ProjectId = null,
    string[] Search = null,
    string[] Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.assignedToProject">AssignedToProject</a></code> | <code>object</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.cloudProvider">CloudProvider</a></code> | <code>string[]</code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorId">ConnectorId</a></code> | <code>string[]</code> | Query cloud accounts by specific connector ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorIssueId">ConnectorIssueId</a></code> | <code>string[]</code> | Query cloud accounts by specific connector issue ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.first">First</a></code> | <code>double</code> | How many results to return, maximum is `500` is per page.     - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.hasMultipleConnectorSources">HasMultipleConnectorSources</a></code> | <code>object</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.ids">Ids</a></code> | <code>string[]</code> | Get specific Cloud Accounts by their IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.maxPages">MaxPages</a></code> | <code>double</code> | How many pages to return. 0 means all pages.     - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Query cloud accounts of a specific linked project, given its id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.search">Search</a></code> | <code>string[]</code> | Free text search on cloud account name or tags or external-id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.status">Status</a></code> | <code>string[]</code> | Query cloud accounts by status. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssignedToProject`<sup>Optional</sup> <a name="AssignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.assignedToProject"></a>

```csharp
public object AssignedToProject { get; set; }
```

- *Type:* object

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#assigned_to_project DataWizCloudAccounts#assigned_to_project}

---

##### `CloudProvider`<sup>Optional</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.cloudProvider"></a>

```csharp
public string[] CloudProvider { get; set; }
```

- *Type:* string[]

Query cloud accounts of specific cloud provider.

* Allowed values:
  - GCP
  - AWS
  - Azure
  - OCI
  - Alibaba
  - vSphere
  - OpenShift
  - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#cloud_provider DataWizCloudAccounts#cloud_provider}

---

##### `ConnectorId`<sup>Optional</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorId"></a>

```csharp
public string[] ConnectorId { get; set; }
```

- *Type:* string[]

Query cloud accounts by specific connector ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#connector_id DataWizCloudAccounts#connector_id}

---

##### `ConnectorIssueId`<sup>Optional</sup> <a name="ConnectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorIssueId"></a>

```csharp
public string[] ConnectorIssueId { get; set; }
```

- *Type:* string[]

Query cloud accounts by specific connector issue ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#connector_issue_id DataWizCloudAccounts#connector_issue_id}

---

##### `First`<sup>Optional</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

How many results to return, maximum is `500` is per page.     - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#first DataWizCloudAccounts#first}

---

##### `HasMultipleConnectorSources`<sup>Optional</sup> <a name="HasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.hasMultipleConnectorSources"></a>

```csharp
public object HasMultipleConnectorSources { get; set; }
```

- *Type:* object

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#has_multiple_connector_sources DataWizCloudAccounts#has_multiple_connector_sources}

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.ids"></a>

```csharp
public string[] Ids { get; set; }
```

- *Type:* string[]

Get specific Cloud Accounts by their IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#ids DataWizCloudAccounts#ids}

---

##### `MaxPages`<sup>Optional</sup> <a name="MaxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.maxPages"></a>

```csharp
public double MaxPages { get; set; }
```

- *Type:* double

How many pages to return. 0 means all pages.     - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#max_pages DataWizCloudAccounts#max_pages}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Query cloud accounts of a specific linked project, given its id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#project_id DataWizCloudAccounts#project_id}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.search"></a>

```csharp
public string[] Search { get; set; }
```

- *Type:* string[]

Free text search on cloud account name or tags or external-id.

Specify list of empty string to return all cloud accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#search DataWizCloudAccounts#search}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.status"></a>

```csharp
public string[] Status { get; set; }
```

- *Type:* string[]

Query cloud accounts by status.

* Allowed values:
  - CONNECTED
  - ERROR
  - DISABLED
  - INITIAL_SCANNING
  - PARTIALLY_CONNECTED
  - DISCONNECTED
  - DISCOVERED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#status DataWizCloudAccounts#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizCloudAccountsCloudAccountsList <a name="DataWizCloudAccountsCloudAccountsList" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudAccountsCloudAccountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get"></a>

```csharp
private DataWizCloudAccountsCloudAccountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataWizCloudAccountsCloudAccountsOutputReference <a name="DataWizCloudAccountsCloudAccountsOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudAccountsCloudAccountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.linkedProjectIds">LinkedProjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.sourceConnectorIds">SourceConnectorIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts">DataWizCloudAccountsCloudAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkedProjectIds`<sup>Required</sup> <a name="LinkedProjectIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.linkedProjectIds"></a>

```csharp
public string[] LinkedProjectIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceConnectorIds`<sup>Required</sup> <a name="SourceConnectorIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.sourceConnectorIds"></a>

```csharp
public string[] SourceConnectorIds { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.internalValue"></a>

```csharp
public DataWizCloudAccountsCloudAccounts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts">DataWizCloudAccountsCloudAccounts</a>

---



