# `dataWizCloudConfigRules` Submodule <a name="`dataWizCloudConfigRules` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizCloudConfigRules <a name="DataWizCloudConfigRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules wiz_cloud_config_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudConfigRules(Construct Scope, string Id, DataWizCloudConfigRulesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig">DataWizCloudConfigRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig">DataWizCloudConfigRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCloudProvider">ResetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFrameworkCategory">ResetFrameworkCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFunctionAsControl">ResetFunctionAsControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasAutoRemediation">ResetHasAutoRemediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasRemediation">ResetHasRemediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIds">ResetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIsOpaPolicy">ResetIsOpaPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetMatcherType">ResetMatcherType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAll">ResetRiskEqualsAll</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAny">ResetRiskEqualsAny</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetScopeAccountIds">ResetScopeAccountIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetServiceType">ResetServiceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSubjectEntityType">ResetSubjectEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetTargetNativeType">ResetTargetNativeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCloudProvider` <a name="ResetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCloudProvider"></a>

```csharp
private void ResetCloudProvider()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFirst` <a name="ResetFirst" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetFrameworkCategory` <a name="ResetFrameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFrameworkCategory"></a>

```csharp
private void ResetFrameworkCategory()
```

##### `ResetFunctionAsControl` <a name="ResetFunctionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFunctionAsControl"></a>

```csharp
private void ResetFunctionAsControl()
```

##### `ResetHasAutoRemediation` <a name="ResetHasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasAutoRemediation"></a>

```csharp
private void ResetHasAutoRemediation()
```

##### `ResetHasRemediation` <a name="ResetHasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasRemediation"></a>

```csharp
private void ResetHasRemediation()
```

##### `ResetIds` <a name="ResetIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIds"></a>

```csharp
private void ResetIds()
```

##### `ResetIsOpaPolicy` <a name="ResetIsOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIsOpaPolicy"></a>

```csharp
private void ResetIsOpaPolicy()
```

##### `ResetMatcherType` <a name="ResetMatcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetMatcherType"></a>

```csharp
private void ResetMatcherType()
```

##### `ResetProject` <a name="ResetProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRiskEqualsAll` <a name="ResetRiskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAll"></a>

```csharp
private void ResetRiskEqualsAll()
```

##### `ResetRiskEqualsAny` <a name="ResetRiskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAny"></a>

```csharp
private void ResetRiskEqualsAny()
```

##### `ResetScopeAccountIds` <a name="ResetScopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetScopeAccountIds"></a>

```csharp
private void ResetScopeAccountIds()
```

##### `ResetSearch` <a name="ResetSearch" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetServiceType` <a name="ResetServiceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetServiceType"></a>

```csharp
private void ResetServiceType()
```

##### `ResetSeverity` <a name="ResetSeverity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetSubjectEntityType` <a name="ResetSubjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSubjectEntityType"></a>

```csharp
private void ResetSubjectEntityType()
```

##### `ResetTargetNativeType` <a name="ResetTargetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetTargetNativeType"></a>

```csharp
private void ResetTargetNativeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataWizCloudConfigRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizCloudConfigRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizCloudConfigRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizCloudConfigRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizCloudConfigRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataWizCloudConfigRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataWizCloudConfigRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataWizCloudConfigRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataWizCloudConfigRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudConfigurationRules">CloudConfigurationRules</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList">DataWizCloudConfigRulesCloudConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProviderInput">CloudProviderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdByInput">CreatedByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategoryInput">FrameworkCategoryInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControlInput">FunctionAsControlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediationInput">HasAutoRemediationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediationInput">HasRemediationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.idsInput">IdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicyInput">IsOpaPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherTypeInput">MatcherTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.projectInput">ProjectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAllInput">RiskEqualsAllInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAnyInput">RiskEqualsAnyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIdsInput">ScopeAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severityInput">SeverityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityTypeInput">SubjectEntityTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeTypeInput">TargetNativeTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProvider">CloudProvider</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdBy">CreatedBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategory">FrameworkCategory</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControl">FunctionAsControl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediation">HasAutoRemediation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediation">HasRemediation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicy">IsOpaPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherType">MatcherType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.project">Project</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAll">RiskEqualsAll</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAny">RiskEqualsAny</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIds">ScopeAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceType">ServiceType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severity">Severity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityType">SubjectEntityType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeType">TargetNativeType</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CloudConfigurationRules`<sup>Required</sup> <a name="CloudConfigurationRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudConfigurationRules"></a>

```csharp
public DataWizCloudConfigRulesCloudConfigurationRulesList CloudConfigurationRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList">DataWizCloudConfigRulesCloudConfigurationRulesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProviderInput"></a>

```csharp
public string[] CloudProviderInput { get; }
```

- *Type:* string[]

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdByInput"></a>

```csharp
public string[] CreatedByInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `FrameworkCategoryInput`<sup>Optional</sup> <a name="FrameworkCategoryInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategoryInput"></a>

```csharp
public string[] FrameworkCategoryInput { get; }
```

- *Type:* string[]

---

##### `FunctionAsControlInput`<sup>Optional</sup> <a name="FunctionAsControlInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControlInput"></a>

```csharp
public object FunctionAsControlInput { get; }
```

- *Type:* object

---

##### `HasAutoRemediationInput`<sup>Optional</sup> <a name="HasAutoRemediationInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediationInput"></a>

```csharp
public object HasAutoRemediationInput { get; }
```

- *Type:* object

---

##### `HasRemediationInput`<sup>Optional</sup> <a name="HasRemediationInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediationInput"></a>

```csharp
public object HasRemediationInput { get; }
```

- *Type:* object

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.idsInput"></a>

```csharp
public string[] IdsInput { get; }
```

- *Type:* string[]

---

##### `IsOpaPolicyInput`<sup>Optional</sup> <a name="IsOpaPolicyInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicyInput"></a>

```csharp
public object IsOpaPolicyInput { get; }
```

- *Type:* object

---

##### `MatcherTypeInput`<sup>Optional</sup> <a name="MatcherTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherTypeInput"></a>

```csharp
public string[] MatcherTypeInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.projectInput"></a>

```csharp
public string[] ProjectInput { get; }
```

- *Type:* string[]

---

##### `RiskEqualsAllInput`<sup>Optional</sup> <a name="RiskEqualsAllInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAllInput"></a>

```csharp
public string[] RiskEqualsAllInput { get; }
```

- *Type:* string[]

---

##### `RiskEqualsAnyInput`<sup>Optional</sup> <a name="RiskEqualsAnyInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAnyInput"></a>

```csharp
public string[] RiskEqualsAnyInput { get; }
```

- *Type:* string[]

---

##### `ScopeAccountIdsInput`<sup>Optional</sup> <a name="ScopeAccountIdsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIdsInput"></a>

```csharp
public string[] ScopeAccountIdsInput { get; }
```

- *Type:* string[]

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceTypeInput"></a>

```csharp
public string[] ServiceTypeInput { get; }
```

- *Type:* string[]

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severityInput"></a>

```csharp
public string[] SeverityInput { get; }
```

- *Type:* string[]

---

##### `SubjectEntityTypeInput`<sup>Optional</sup> <a name="SubjectEntityTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityTypeInput"></a>

```csharp
public string[] SubjectEntityTypeInput { get; }
```

- *Type:* string[]

---

##### `TargetNativeTypeInput`<sup>Optional</sup> <a name="TargetNativeTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeTypeInput"></a>

```csharp
public string[] TargetNativeTypeInput { get; }
```

- *Type:* string[]

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProvider"></a>

```csharp
public string[] CloudProvider { get; }
```

- *Type:* string[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdBy"></a>

```csharp
public string[] CreatedBy { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `First`<sup>Required</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `FrameworkCategory`<sup>Required</sup> <a name="FrameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategory"></a>

```csharp
public string[] FrameworkCategory { get; }
```

- *Type:* string[]

---

##### `FunctionAsControl`<sup>Required</sup> <a name="FunctionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControl"></a>

```csharp
public object FunctionAsControl { get; }
```

- *Type:* object

---

##### `HasAutoRemediation`<sup>Required</sup> <a name="HasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediation"></a>

```csharp
public object HasAutoRemediation { get; }
```

- *Type:* object

---

##### `HasRemediation`<sup>Required</sup> <a name="HasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediation"></a>

```csharp
public object HasRemediation { get; }
```

- *Type:* object

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `IsOpaPolicy`<sup>Required</sup> <a name="IsOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicy"></a>

```csharp
public object IsOpaPolicy { get; }
```

- *Type:* object

---

##### `MatcherType`<sup>Required</sup> <a name="MatcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherType"></a>

```csharp
public string[] MatcherType { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.project"></a>

```csharp
public string[] Project { get; }
```

- *Type:* string[]

---

##### `RiskEqualsAll`<sup>Required</sup> <a name="RiskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAll"></a>

```csharp
public string[] RiskEqualsAll { get; }
```

- *Type:* string[]

---

##### `RiskEqualsAny`<sup>Required</sup> <a name="RiskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAny"></a>

```csharp
public string[] RiskEqualsAny { get; }
```

- *Type:* string[]

---

##### `ScopeAccountIds`<sup>Required</sup> <a name="ScopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIds"></a>

```csharp
public string[] ScopeAccountIds { get; }
```

- *Type:* string[]

---

##### `Search`<sup>Required</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceType"></a>

```csharp
public string[] ServiceType { get; }
```

- *Type:* string[]

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severity"></a>

```csharp
public string[] Severity { get; }
```

- *Type:* string[]

---

##### `SubjectEntityType`<sup>Required</sup> <a name="SubjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityType"></a>

```csharp
public string[] SubjectEntityType { get; }
```

- *Type:* string[]

---

##### `TargetNativeType`<sup>Required</sup> <a name="TargetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeType"></a>

```csharp
public string[] TargetNativeType { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizCloudConfigRulesCloudConfigurationRules <a name="DataWizCloudConfigRulesCloudConfigurationRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudConfigRulesCloudConfigurationRules {

};
```


### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences {

};
```


### DataWizCloudConfigRulesConfig <a name="DataWizCloudConfigRulesConfig" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudConfigRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] CloudProvider = null,
    string[] CreatedBy = null,
    object Enabled = null,
    double First = null,
    string[] FrameworkCategory = null,
    object FunctionAsControl = null,
    object HasAutoRemediation = null,
    object HasRemediation = null,
    string[] Ids = null,
    object IsOpaPolicy = null,
    string[] MatcherType = null,
    string[] Project = null,
    string[] RiskEqualsAll = null,
    string[] RiskEqualsAny = null,
    string[] ScopeAccountIds = null,
    string Search = null,
    string[] ServiceType = null,
    string[] Severity = null,
    string[] SubjectEntityType = null,
    string[] TargetNativeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.cloudProvider">CloudProvider</a></code> | <code>string[]</code> | Find CSPM rules related to cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.createdBy">CreatedBy</a></code> | <code>string[]</code> | Search rules by user. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.enabled">Enabled</a></code> | <code>object</code> | CSPM Rule enabled status. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.first">First</a></code> | <code>double</code> | How many results to return     - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.frameworkCategory">FrameworkCategory</a></code> | <code>string[]</code> | Search rules by any of securityFramework \| securitySubCategory \| securityCategory. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.functionAsControl">FunctionAsControl</a></code> | <code>object</code> | Search by function as control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasAutoRemediation">HasAutoRemediation</a></code> | <code>object</code> | Rule has auto remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasRemediation">HasRemediation</a></code> | <code>object</code> | Rule has remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.ids">Ids</a></code> | <code>string[]</code> | GetSearch by IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.isOpaPolicy">IsOpaPolicy</a></code> | <code>object</code> | Search by opaPolicy presence. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.matcherType">MatcherType</a></code> | <code>string[]</code> | Search rules by target native type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.project">Project</a></code> | <code>string[]</code> | Search by project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAll">RiskEqualsAll</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAny">RiskEqualsAny</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.scopeAccountIds">ScopeAccountIds</a></code> | <code>string[]</code> | Find CSPM rules applied on cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.search">Search</a></code> | <code>string</code> | Free text search on CSPM name or resource ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.serviceType">ServiceType</a></code> | <code>string[]</code> | Find CSPM rules related to the service. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.severity">Severity</a></code> | <code>string[]</code> | CSPM Rule severity. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.subjectEntityType">SubjectEntityType</a></code> | <code>string[]</code> | Find rules by their entity type subject. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.targetNativeType">TargetNativeType</a></code> | <code>string[]</code> | Search rules by target native type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudProvider`<sup>Optional</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.cloudProvider"></a>

```csharp
public string[] CloudProvider { get; set; }
```

- *Type:* string[]

Find CSPM rules related to cloud provider.

* Allowed values:
  - GCP
  - AWS
  - Azure
  - OCI
  - Alibaba
  - vSphere
  - OpenShift
  - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#cloud_provider DataWizCloudConfigRules#cloud_provider}

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.createdBy"></a>

```csharp
public string[] CreatedBy { get; set; }
```

- *Type:* string[]

Search rules by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#created_by DataWizCloudConfigRules#created_by}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

CSPM Rule enabled status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#enabled DataWizCloudConfigRules#enabled}

---

##### `First`<sup>Optional</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

How many results to return     - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#first DataWizCloudConfigRules#first}

---

##### `FrameworkCategory`<sup>Optional</sup> <a name="FrameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.frameworkCategory"></a>

```csharp
public string[] FrameworkCategory { get; set; }
```

- *Type:* string[]

Search rules by any of securityFramework | securitySubCategory | securityCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#framework_category DataWizCloudConfigRules#framework_category}

---

##### `FunctionAsControl`<sup>Optional</sup> <a name="FunctionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.functionAsControl"></a>

```csharp
public object FunctionAsControl { get; set; }
```

- *Type:* object

Search by function as control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#function_as_control DataWizCloudConfigRules#function_as_control}

---

##### `HasAutoRemediation`<sup>Optional</sup> <a name="HasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasAutoRemediation"></a>

```csharp
public object HasAutoRemediation { get; set; }
```

- *Type:* object

Rule has auto remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#has_auto_remediation DataWizCloudConfigRules#has_auto_remediation}

---

##### `HasRemediation`<sup>Optional</sup> <a name="HasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasRemediation"></a>

```csharp
public object HasRemediation { get; set; }
```

- *Type:* object

Rule has remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#has_remediation DataWizCloudConfigRules#has_remediation}

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.ids"></a>

```csharp
public string[] Ids { get; set; }
```

- *Type:* string[]

GetSearch by IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#ids DataWizCloudConfigRules#ids}

---

##### `IsOpaPolicy`<sup>Optional</sup> <a name="IsOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.isOpaPolicy"></a>

```csharp
public object IsOpaPolicy { get; set; }
```

- *Type:* object

Search by opaPolicy presence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#is_opa_policy DataWizCloudConfigRules#is_opa_policy}

---

##### `MatcherType`<sup>Optional</sup> <a name="MatcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.matcherType"></a>

```csharp
public string[] MatcherType { get; set; }
```

- *Type:* string[]

Search rules by target native type.

* Allowed values:
  - CLOUD
  - TERRAFORM
  - CLOUD_FORMATION
  - KUBERNETES
  - AZURE_RESOURCE_MANAGER
  - DOCKER_FILE
  - ADMISSION_CONTROLLER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#matcher_type DataWizCloudConfigRules#matcher_type}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.project"></a>

```csharp
public string[] Project { get; set; }
```

- *Type:* string[]

Search by project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#project DataWizCloudConfigRules#project}

---

##### `RiskEqualsAll`<sup>Optional</sup> <a name="RiskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAll"></a>

```csharp
public string[] RiskEqualsAll { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}.

---

##### `RiskEqualsAny`<sup>Optional</sup> <a name="RiskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAny"></a>

```csharp
public string[] RiskEqualsAny { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}.

---

##### `ScopeAccountIds`<sup>Optional</sup> <a name="ScopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.scopeAccountIds"></a>

```csharp
public string[] ScopeAccountIds { get; set; }
```

- *Type:* string[]

Find CSPM rules applied on cloud account IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#scope_account_ids DataWizCloudConfigRules#scope_account_ids}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Free text search on CSPM name or resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#search DataWizCloudConfigRules#search}

---

##### `ServiceType`<sup>Optional</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.serviceType"></a>

```csharp
public string[] ServiceType { get; set; }
```

- *Type:* string[]

Find CSPM rules related to the service.

* Allowed values:
  - AWS
  - Azure
  - GCP
  - OCI
  - Alibaba
  - AKS
  - EKS
  - GKE
  - Kubernetes
  - OKE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#service_type DataWizCloudConfigRules#service_type}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.severity"></a>

```csharp
public string[] Severity { get; set; }
```

- *Type:* string[]

CSPM Rule severity.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#severity DataWizCloudConfigRules#severity}

---

##### `SubjectEntityType`<sup>Optional</sup> <a name="SubjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.subjectEntityType"></a>

```csharp
public string[] SubjectEntityType { get; set; }
```

- *Type:* string[]

Find rules by their entity type subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#subject_entity_type DataWizCloudConfigRules#subject_entity_type}

---

##### `TargetNativeType`<sup>Optional</sup> <a name="TargetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.targetNativeType"></a>

```csharp
public string[] TargetNativeType { get; set; }
```

- *Type:* string[]

Search rules by target native type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#target_native_type DataWizCloudConfigRules#target_native_type}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get"></a>

```csharp
private DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.internalValue"></a>

```csharp
public DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences</a>

---


### DataWizCloudConfigRulesCloudConfigurationRulesList <a name="DataWizCloudConfigRulesCloudConfigurationRulesList" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudConfigRulesCloudConfigurationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get"></a>

```csharp
private DataWizCloudConfigRulesCloudConfigurationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataWizCloudConfigRulesCloudConfigurationRulesOutputReference <a name="DataWizCloudConfigRulesCloudConfigurationRulesOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizCloudConfigRulesCloudConfigurationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.builtin">Builtin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.controlId">ControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.externalReferences">ExternalReferences</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.functionAsControl">FunctionAsControl</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.graphId">GraphId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.hasAutoRemediation">HasAutoRemediation</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.iacMatcherIds">IacMatcherIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.opaPolicy">OpaPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.remediationInstructions">RemediationInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.scopeAccounts">ScopeAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.securitySubCategoryIds">SecuritySubCategoryIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.shortId">ShortId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.subjectEntityType">SubjectEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.supportsNrt">SupportsNrt</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.targetNativeTypes">TargetNativeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules">DataWizCloudConfigRulesCloudConfigurationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Builtin`<sup>Required</sup> <a name="Builtin" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.builtin"></a>

```csharp
public IResolvable Builtin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `ControlId`<sup>Required</sup> <a name="ControlId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.controlId"></a>

```csharp
public string ControlId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExternalReferences`<sup>Required</sup> <a name="ExternalReferences" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.externalReferences"></a>

```csharp
public DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList ExternalReferences { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList</a>

---

##### `FunctionAsControl`<sup>Required</sup> <a name="FunctionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.functionAsControl"></a>

```csharp
public IResolvable FunctionAsControl { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `GraphId`<sup>Required</sup> <a name="GraphId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.graphId"></a>

```csharp
public string GraphId { get; }
```

- *Type:* string

---

##### `HasAutoRemediation`<sup>Required</sup> <a name="HasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.hasAutoRemediation"></a>

```csharp
public IResolvable HasAutoRemediation { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IacMatcherIds`<sup>Required</sup> <a name="IacMatcherIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.iacMatcherIds"></a>

```csharp
public string[] IacMatcherIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpaPolicy`<sup>Required</sup> <a name="OpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.opaPolicy"></a>

```csharp
public string OpaPolicy { get; }
```

- *Type:* string

---

##### `RemediationInstructions`<sup>Required</sup> <a name="RemediationInstructions" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.remediationInstructions"></a>

```csharp
public string RemediationInstructions { get; }
```

- *Type:* string

---

##### `ScopeAccounts`<sup>Required</sup> <a name="ScopeAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.scopeAccounts"></a>

```csharp
public string[] ScopeAccounts { get; }
```

- *Type:* string[]

---

##### `SecuritySubCategoryIds`<sup>Required</sup> <a name="SecuritySubCategoryIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.securitySubCategoryIds"></a>

```csharp
public string[] SecuritySubCategoryIds { get; }
```

- *Type:* string[]

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `ShortId`<sup>Required</sup> <a name="ShortId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.shortId"></a>

```csharp
public string ShortId { get; }
```

- *Type:* string

---

##### `SubjectEntityType`<sup>Required</sup> <a name="SubjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.subjectEntityType"></a>

```csharp
public string SubjectEntityType { get; }
```

- *Type:* string

---

##### `SupportsNrt`<sup>Required</sup> <a name="SupportsNrt" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.supportsNrt"></a>

```csharp
public IResolvable SupportsNrt { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TargetNativeTypes`<sup>Required</sup> <a name="TargetNativeTypes" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.targetNativeTypes"></a>

```csharp
public string[] TargetNativeTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.internalValue"></a>

```csharp
public DataWizCloudConfigRulesCloudConfigurationRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules">DataWizCloudConfigRulesCloudConfigurationRules</a>

---



