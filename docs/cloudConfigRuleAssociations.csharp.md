# `wiz_cloud_config_rule_associations`

Refer to the Terraform Registory for docs: [`wiz_cloud_config_rule_associations`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations).

# `cloudConfigRuleAssociations` Submodule <a name="`cloudConfigRuleAssociations` Submodule" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigRuleAssociations <a name="CloudConfigRuleAssociations" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations wiz_cloud_config_rule_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CloudConfigRuleAssociations(Construct Scope, string Id, CloudConfigRuleAssociationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig">CloudConfigRuleAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig">CloudConfigRuleAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetDetails">ResetDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDetails` <a name="ResetDetails" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetDetails"></a>

```csharp
private void ResetDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

CloudConfigRuleAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

CloudConfigRuleAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

CloudConfigRuleAssociations.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIdsInput">CloudConfigRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.detailsInput">DetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIdsInput">SecuritySubCategoryIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIds">CloudConfigRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIds">SecuritySubCategoryIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CloudConfigRuleIdsInput`<sup>Optional</sup> <a name="CloudConfigRuleIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIdsInput"></a>

```csharp
public string[] CloudConfigRuleIdsInput { get; }
```

- *Type:* string[]

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.detailsInput"></a>

```csharp
public string DetailsInput { get; }
```

- *Type:* string

---

##### `SecuritySubCategoryIdsInput`<sup>Optional</sup> <a name="SecuritySubCategoryIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIdsInput"></a>

```csharp
public string[] SecuritySubCategoryIdsInput { get; }
```

- *Type:* string[]

---

##### `CloudConfigRuleIds`<sup>Required</sup> <a name="CloudConfigRuleIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIds"></a>

```csharp
public string[] CloudConfigRuleIds { get; }
```

- *Type:* string[]

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `SecuritySubCategoryIds`<sup>Required</sup> <a name="SecuritySubCategoryIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIds"></a>

```csharp
public string[] SecuritySubCategoryIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigRuleAssociationsConfig <a name="CloudConfigRuleAssociationsConfig" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CloudConfigRuleAssociationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] CloudConfigRuleIds,
    string[] SecuritySubCategoryIds,
    string Details = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.cloudConfigRuleIds">CloudConfigRuleIds</a></code> | <code>string[]</code> | List of cloud configuration rule IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.securitySubCategoryIds">SecuritySubCategoryIds</a></code> | <code>string[]</code> | List of security sub-category IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.details">Details</a></code> | <code>string</code> | Details of the association. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudConfigRuleIds`<sup>Required</sup> <a name="CloudConfigRuleIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.cloudConfigRuleIds"></a>

```csharp
public string[] CloudConfigRuleIds { get; set; }
```

- *Type:* string[]

List of cloud configuration rule IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#cloud_config_rule_ids CloudConfigRuleAssociations#cloud_config_rule_ids}

---

##### `SecuritySubCategoryIds`<sup>Required</sup> <a name="SecuritySubCategoryIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.securitySubCategoryIds"></a>

```csharp
public string[] SecuritySubCategoryIds { get; set; }
```

- *Type:* string[]

List of security sub-category IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#security_sub_category_ids CloudConfigRuleAssociations#security_sub_category_ids}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.details"></a>

```csharp
public string Details { get; set; }
```

- *Type:* string

Details of the association.

This information is not used to manage resources but can serve as notes or documentation for the associations.

* Defaults to `{{`undefined`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#details CloudConfigRuleAssociations#details}

---



