# `dataDatabricksDbfsFilePaths` Submodule <a name="`dataDatabricksDbfsFilePaths` Submodule" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDbfsFilePaths <a name="DataDatabricksDbfsFilePaths" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/d/dbfs_file_paths databricks_dbfs_file_paths}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDbfsFilePaths(Construct Scope, string Id, DataDatabricksDbfsFilePathsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig">DataDatabricksDbfsFilePathsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig">DataDatabricksDbfsFilePathsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDbfsFilePaths.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDbfsFilePaths.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDbfsFilePaths.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathList">PathList</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList">DataDatabricksDbfsFilePathsPathListList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursiveInput">RecursiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursive">Recursive</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `PathList`<sup>Required</sup> <a name="PathList" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathList"></a>

```csharp
public DataDatabricksDbfsFilePathsPathListList PathList { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList">DataDatabricksDbfsFilePathsPathListList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RecursiveInput`<sup>Optional</sup> <a name="RecursiveInput" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursiveInput"></a>

```csharp
public object RecursiveInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Recursive`<sup>Required</sup> <a name="Recursive" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursive"></a>

```csharp
public object Recursive { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDbfsFilePathsConfig <a name="DataDatabricksDbfsFilePathsConfig" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDbfsFilePathsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Path,
    object Recursive,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/dbfs_file_paths#path DataDatabricksDbfsFilePaths#path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.recursive">Recursive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/dbfs_file_paths#recursive DataDatabricksDbfsFilePaths#recursive}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/dbfs_file_paths#id DataDatabricksDbfsFilePaths#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/dbfs_file_paths#path DataDatabricksDbfsFilePaths#path}.

---

##### `Recursive`<sup>Required</sup> <a name="Recursive" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.recursive"></a>

```csharp
public object Recursive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/dbfs_file_paths#recursive DataDatabricksDbfsFilePaths#recursive}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/dbfs_file_paths#id DataDatabricksDbfsFilePaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksDbfsFilePathsPathList <a name="DataDatabricksDbfsFilePathsPathList" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDbfsFilePathsPathList {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDbfsFilePathsPathListList <a name="DataDatabricksDbfsFilePathsPathListList" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDbfsFilePathsPathListList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.get"></a>

```csharp
private DataDatabricksDbfsFilePathsPathListOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatabricksDbfsFilePathsPathListOutputReference <a name="DataDatabricksDbfsFilePathsPathListOutputReference" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDbfsFilePathsPathListOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.property.fileSize">FileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathList">DataDatabricksDbfsFilePathsPathList</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileSize`<sup>Required</sup> <a name="FileSize" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.property.fileSize"></a>

```csharp
public double FileSize { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDbfsFilePathsPathList InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathList">DataDatabricksDbfsFilePathsPathList</a>

---


