# `data_wiz_subscription_resource_groups`

Refer to the Terraform Registory for docs: [`data_wiz_subscription_resource_groups`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups).

# `dataWizSubscriptionResourceGroups` Submodule <a name="`dataWizSubscriptionResourceGroups` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizSubscriptionResourceGroups <a name="DataWizSubscriptionResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups wiz_subscription_resource_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizSubscriptionResourceGroups(Construct Scope, string Id, DataWizSubscriptionResourceGroupsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig">DataWizSubscriptionResourceGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig">DataWizSubscriptionResourceGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetRelationshipType">ResetRelationshipType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFirst` <a name="ResetFirst" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetRelationshipType` <a name="ResetRelationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetRelationshipType"></a>

```csharp
private void ResetRelationshipType()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizSubscriptionResourceGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizSubscriptionResourceGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizSubscriptionResourceGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.resourceGroups">ResourceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList">DataWizSubscriptionResourceGroupsResourceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipTypeInput">RelationshipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipType">RelationshipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.resourceGroups"></a>

```csharp
public DataWizSubscriptionResourceGroupsResourceGroupsList ResourceGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList">DataWizSubscriptionResourceGroupsResourceGroupsList</a>

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `RelationshipTypeInput`<sup>Optional</sup> <a name="RelationshipTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipTypeInput"></a>

```csharp
public string RelationshipTypeInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `First`<sup>Required</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `RelationshipType`<sup>Required</sup> <a name="RelationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipType"></a>

```csharp
public string RelationshipType { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizSubscriptionResourceGroupsConfig <a name="DataWizSubscriptionResourceGroupsConfig" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizSubscriptionResourceGroupsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double First = null,
    string RelationshipType = null,
    string SubscriptionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.first">First</a></code> | <code>double</code> | How many matches to return. - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.relationshipType">RelationshipType</a></code> | <code>string</code> | Relationship type, will default to `CONTAINS` if not specified. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | The Wiz subscription ID to search by. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `First`<sup>Optional</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

How many matches to return. - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#first DataWizSubscriptionResourceGroups#first}

---

##### `RelationshipType`<sup>Optional</sup> <a name="RelationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.relationshipType"></a>

```csharp
public string RelationshipType { get; set; }
```

- *Type:* string

Relationship type, will default to `CONTAINS` if not specified.

* Allowed values:

  * ANY
  * ANY_OUTGOING
  * ACTING_AS
  * ADMINISTRATE
  * ALERTED_ON
  * ALLOWS
  * ALLOWS_ACCESS_TO
  * APPLIES_TO
  * ASSIGNED_TO
  * ATTACHED_TO
  * BEHIND
  * BOOTS
  * BUILT_FROM
  * CAUSES
  * COLLABORATES
  * CONNECTED_TO
  * CONTAINS
  * CONTAINS_DST_IP_RANGE
  * CONTAINS_DST_PORT_RANGE
  * CONTAINS_SRC_IP_RANGE
  * CONTAINS_SRC_PORT_RANGE
  * DENIES
  * DEPENDS_ON
  * DEPLOYED_TO
  * ENCRYPTS
  * ENCRYPTS_PARTITION
  * ENTITLES
  * EXCLUDES
  * EXPOSES
  * GOVERNS
  * HAS
  * HAS_BOUNDARY_POLICY
  * HAS_DATA_FINDING
  * HAS_DATA_INVENTORY
  * HAS_DATA_SCHEMA
  * HAS_DATA_STORE
  * HAS_ORGANIZATION_POLICY
  * HAS_PRINCIPAL_POLICY
  * HAS_RESOURCE_POLICY
  * HAS_SNAPSHOT
  * HAS_SOURCE
  * HAS_STANDARD_WEB_ACCESS_FROM
  * HAS_TECH
  * HOSTS
  * IGNORES
  * IMPLEMENTS
  * INCLUDES
  * INFECTS
  * INSIDE
  * INSTANCE_OF
  * INVOKES
  * LOGS_DATA_FOR
  * MANAGES
  * MOUNTS
  * OWNS
  * PART_OF
  * PEERED_TO
  * PERFORMED
  * PERFORMED_IMPERSONATED
  * PERMITS
  * POINTS_TO
  * PROTECTS
  * READS_DATA_FROM
  * REFERENCED_BY
  * REPLICA_OF
  * ROUTES_TRAFFIC_FROM
  * ROUTES_TRAFFIC_TO
  * RUNS
  * SCANNED
  * SEND_MESSAGES_TO
  * SERVES
  * STORES_DATA_IN
  * TRANSIT_PEERED_TO
  * USES
  * VALIDATES
* Defaults to `{{`CONTAINS`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#relationship_type DataWizSubscriptionResourceGroups#relationship_type}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

The Wiz subscription ID to search by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#subscription_id DataWizSubscriptionResourceGroups#subscription_id}

---

### DataWizSubscriptionResourceGroupsResourceGroups <a name="DataWizSubscriptionResourceGroupsResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizSubscriptionResourceGroupsResourceGroups {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizSubscriptionResourceGroupsResourceGroupsList <a name="DataWizSubscriptionResourceGroupsResourceGroupsList" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizSubscriptionResourceGroupsResourceGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get"></a>

```csharp
private DataWizSubscriptionResourceGroupsResourceGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataWizSubscriptionResourceGroupsResourceGroupsOutputReference <a name="DataWizSubscriptionResourceGroupsResourceGroupsOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizSubscriptionResourceGroupsResourceGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups">DataWizSubscriptionResourceGroupsResourceGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.internalValue"></a>

```csharp
public DataWizSubscriptionResourceGroupsResourceGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups">DataWizSubscriptionResourceGroupsResourceGroups</a>

---



