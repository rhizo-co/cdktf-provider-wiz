# `data_wiz_host_config_rules`

Refer to the Terraform Registory for docs: [`data_wiz_host_config_rules`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules).

# `dataWizHostConfigRules` Submodule <a name="`dataWizHostConfigRules` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizHostConfigRules <a name="DataWizHostConfigRules" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules wiz_host_config_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizHostConfigRules(Construct Scope, string Id, DataWizHostConfigRulesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig">DataWizHostConfigRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig">DataWizHostConfigRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetFrameworkCategory">ResetFrameworkCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetTargetPlatform">ResetTargetPlatform</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFirst` <a name="ResetFirst" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetFrameworkCategory` <a name="ResetFrameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetFrameworkCategory"></a>

```csharp
private void ResetFrameworkCategory()
```

##### `ResetSearch` <a name="ResetSearch" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetTargetPlatform` <a name="ResetTargetPlatform" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.resetTargetPlatform"></a>

```csharp
private void ResetTargetPlatform()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizHostConfigRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizHostConfigRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizHostConfigRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.hostConfigurationRules">HostConfigurationRules</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList">DataWizHostConfigRulesHostConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.frameworkCategoryInput">FrameworkCategoryInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.targetPlatformInput">TargetPlatformInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.frameworkCategory">FrameworkCategory</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.targetPlatform">TargetPlatform</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `HostConfigurationRules`<sup>Required</sup> <a name="HostConfigurationRules" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.hostConfigurationRules"></a>

```csharp
public DataWizHostConfigRulesHostConfigurationRulesList HostConfigurationRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList">DataWizHostConfigRulesHostConfigurationRulesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `FrameworkCategoryInput`<sup>Optional</sup> <a name="FrameworkCategoryInput" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.frameworkCategoryInput"></a>

```csharp
public string[] FrameworkCategoryInput { get; }
```

- *Type:* string[]

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `TargetPlatformInput`<sup>Optional</sup> <a name="TargetPlatformInput" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.targetPlatformInput"></a>

```csharp
public string[] TargetPlatformInput { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `First`<sup>Required</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `FrameworkCategory`<sup>Required</sup> <a name="FrameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.frameworkCategory"></a>

```csharp
public string[] FrameworkCategory { get; }
```

- *Type:* string[]

---

##### `Search`<sup>Required</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `TargetPlatform`<sup>Required</sup> <a name="TargetPlatform" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.targetPlatform"></a>

```csharp
public string[] TargetPlatform { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizHostConfigRulesConfig <a name="DataWizHostConfigRulesConfig" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizHostConfigRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled = null,
    double First = null,
    string[] FrameworkCategory = null,
    string Search = null,
    string[] TargetPlatform = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.enabled">Enabled</a></code> | <code>object</code> | Host Configuration Rule enabled status. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.first">First</a></code> | <code>double</code> | How many results to return - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.frameworkCategory">FrameworkCategory</a></code> | <code>string[]</code> | Search rules by any of securityFramework \| securitySubCategory \| securityCategory. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.search">Search</a></code> | <code>string</code> | Free text search on id, name, externalId. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.targetPlatform">TargetPlatform</a></code> | <code>string[]</code> | Search by target platforms. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Host Configuration Rule enabled status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules#enabled DataWizHostConfigRules#enabled}

---

##### `First`<sup>Optional</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

How many results to return - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules#first DataWizHostConfigRules#first}

---

##### `FrameworkCategory`<sup>Optional</sup> <a name="FrameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.frameworkCategory"></a>

```csharp
public string[] FrameworkCategory { get; set; }
```

- *Type:* string[]

Search rules by any of securityFramework | securitySubCategory | securityCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules#framework_category DataWizHostConfigRules#framework_category}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Free text search on id, name, externalId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules#search DataWizHostConfigRules#search}

---

##### `TargetPlatform`<sup>Optional</sup> <a name="TargetPlatform" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesConfig.property.targetPlatform"></a>

```csharp
public string[] TargetPlatform { get; set; }
```

- *Type:* string[]

Search by target platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules#target_platform DataWizHostConfigRules#target_platform}

---

### DataWizHostConfigRulesHostConfigurationRules <a name="DataWizHostConfigRulesHostConfigurationRules" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizHostConfigRulesHostConfigurationRules {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizHostConfigRulesHostConfigurationRulesList <a name="DataWizHostConfigRulesHostConfigurationRulesList" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizHostConfigRulesHostConfigurationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.get"></a>

```csharp
private DataWizHostConfigRulesHostConfigurationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataWizHostConfigRulesHostConfigurationRulesOutputReference <a name="DataWizHostConfigRulesHostConfigurationRulesOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizHostConfigRulesHostConfigurationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.builtin">Builtin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.directOval">DirectOval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.securitySubCategoryIds">SecuritySubCategoryIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.targetPlatformIds">TargetPlatformIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRules">DataWizHostConfigRulesHostConfigurationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Builtin`<sup>Required</sup> <a name="Builtin" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.builtin"></a>

```csharp
public IResolvable Builtin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DirectOval`<sup>Required</sup> <a name="DirectOval" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.directOval"></a>

```csharp
public string DirectOval { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecuritySubCategoryIds`<sup>Required</sup> <a name="SecuritySubCategoryIds" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.securitySubCategoryIds"></a>

```csharp
public string[] SecuritySubCategoryIds { get; }
```

- *Type:* string[]

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

##### `TargetPlatformIds`<sup>Required</sup> <a name="TargetPlatformIds" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.targetPlatformIds"></a>

```csharp
public string[] TargetPlatformIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRulesOutputReference.property.internalValue"></a>

```csharp
public DataWizHostConfigRulesHostConfigurationRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizHostConfigRules.DataWizHostConfigRulesHostConfigurationRules">DataWizHostConfigRulesHostConfigurationRules</a>

---



