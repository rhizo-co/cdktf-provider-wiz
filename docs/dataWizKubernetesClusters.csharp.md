# `data_wiz_kubernetes_clusters`

Refer to the Terraform Registory for docs: [`data_wiz_kubernetes_clusters`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/kubernetes_clusters).

# `dataWizKubernetesClusters` Submodule <a name="`dataWizKubernetesClusters` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizKubernetesClusters <a name="DataWizKubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/kubernetes_clusters wiz_kubernetes_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizKubernetesClusters(Construct Scope, string Id, DataWizKubernetesClustersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig">DataWizKubernetesClustersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig">DataWizKubernetesClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetCloudProvider">ResetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetExternalIds">ResetExternalIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetMaxPages">ResetMaxPages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCloudProvider` <a name="ResetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetCloudProvider"></a>

```csharp
private void ResetCloudProvider()
```

##### `ResetExternalIds` <a name="ResetExternalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetExternalIds"></a>

```csharp
private void ResetExternalIds()
```

##### `ResetFirst` <a name="ResetFirst" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetKind` <a name="ResetKind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetMaxPages` <a name="ResetMaxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetMaxPages"></a>

```csharp
private void ResetMaxPages()
```

##### `ResetSearch` <a name="ResetSearch" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetSearch"></a>

```csharp
private void ResetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizKubernetesClusters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizKubernetesClusters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

DataWizKubernetesClusters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kubernetesClusters">KubernetesClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList">DataWizKubernetesClustersKubernetesClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProviderInput">CloudProviderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIdsInput">ExternalIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kindInput">KindInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPagesInput">MaxPagesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProvider">CloudProvider</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIds">ExternalIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kind">Kind</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPages">MaxPages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.search">Search</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubernetesClusters`<sup>Required</sup> <a name="KubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kubernetesClusters"></a>

```csharp
public DataWizKubernetesClustersKubernetesClustersList KubernetesClusters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList">DataWizKubernetesClustersKubernetesClustersList</a>

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProviderInput"></a>

```csharp
public string[] CloudProviderInput { get; }
```

- *Type:* string[]

---

##### `ExternalIdsInput`<sup>Optional</sup> <a name="ExternalIdsInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIdsInput"></a>

```csharp
public string[] ExternalIdsInput { get; }
```

- *Type:* string[]

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kindInput"></a>

```csharp
public string[] KindInput { get; }
```

- *Type:* string[]

---

##### `MaxPagesInput`<sup>Optional</sup> <a name="MaxPagesInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPagesInput"></a>

```csharp
public double MaxPagesInput { get; }
```

- *Type:* double

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProvider"></a>

```csharp
public string[] CloudProvider { get; }
```

- *Type:* string[]

---

##### `ExternalIds`<sup>Required</sup> <a name="ExternalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIds"></a>

```csharp
public string[] ExternalIds { get; }
```

- *Type:* string[]

---

##### `First`<sup>Required</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kind"></a>

```csharp
public string[] Kind { get; }
```

- *Type:* string[]

---

##### `MaxPages`<sup>Required</sup> <a name="MaxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPages"></a>

```csharp
public double MaxPages { get; }
```

- *Type:* double

---

##### `Search`<sup>Required</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizKubernetesClustersConfig <a name="DataWizKubernetesClustersConfig" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizKubernetesClustersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] CloudProvider = null,
    string[] ExternalIds = null,
    double First = null,
    string[] Kind = null,
    double MaxPages = null,
    string Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.cloudProvider">CloudProvider</a></code> | <code>string[]</code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.externalIds">ExternalIds</a></code> | <code>string[]</code> | The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.first">First</a></code> | <code>double</code> | How many matches to return, maximum is `500` per page. - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.kind">Kind</a></code> | <code>string[]</code> | Query Kubernetes Cluster of specific kind(s) or cloud provider(s). |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.maxPages">MaxPages</a></code> | <code>double</code> | How many pages to return. 0 means all pages. - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.search">Search</a></code> | <code>string</code> | Free text search. Specify empty string to return all kubernetes clusters. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudProvider`<sup>Optional</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.cloudProvider"></a>

```csharp
public string[] CloudProvider { get; set; }
```

- *Type:* string[]

Query cloud accounts of specific cloud provider.

* Allowed values:

  * GCP
  * AWS
  * Azure
  * OCI
  * Alibaba
  * vSphere
  * OpenShift
  * Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/kubernetes_clusters#cloud_provider DataWizKubernetesClusters#cloud_provider}

---

##### `ExternalIds`<sup>Optional</sup> <a name="ExternalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.externalIds"></a>

```csharp
public string[] ExternalIds { get; set; }
```

- *Type:* string[]

The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/kubernetes_clusters#external_ids DataWizKubernetesClusters#external_ids}

---

##### `First`<sup>Optional</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

How many matches to return, maximum is `500` per page. - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/kubernetes_clusters#first DataWizKubernetesClusters#first}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.kind"></a>

```csharp
public string[] Kind { get; set; }
```

- *Type:* string[]

Query Kubernetes Cluster of specific kind(s) or cloud provider(s).

* Allowed values:

  * EKS
  * GKE
  * AKS
  * OKE
  * OPEN_SHIFT
  * SELF_HOSTED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/kubernetes_clusters#kind DataWizKubernetesClusters#kind}

---

##### `MaxPages`<sup>Optional</sup> <a name="MaxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.maxPages"></a>

```csharp
public double MaxPages { get; set; }
```

- *Type:* double

How many pages to return. 0 means all pages. - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/kubernetes_clusters#max_pages DataWizKubernetesClusters#max_pages}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Free text search. Specify empty string to return all kubernetes clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/kubernetes_clusters#search DataWizKubernetesClusters#search}

---

### DataWizKubernetesClustersKubernetesClusters <a name="DataWizKubernetesClustersKubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizKubernetesClustersKubernetesClusters {

};
```


### DataWizKubernetesClustersKubernetesClustersCloudAccount <a name="DataWizKubernetesClustersKubernetesClustersCloudAccount" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizKubernetesClustersKubernetesClustersCloudAccount {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizKubernetesClustersKubernetesClustersCloudAccountList <a name="DataWizKubernetesClustersKubernetesClustersCloudAccountList" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizKubernetesClustersKubernetesClustersCloudAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get"></a>

```csharp
private DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference <a name="DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount">DataWizKubernetesClustersKubernetesClustersCloudAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.internalValue"></a>

```csharp
public DataWizKubernetesClustersKubernetesClustersCloudAccount InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount">DataWizKubernetesClustersKubernetesClustersCloudAccount</a>

---


### DataWizKubernetesClustersKubernetesClustersList <a name="DataWizKubernetesClustersKubernetesClustersList" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizKubernetesClustersKubernetesClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get"></a>

```csharp
private DataWizKubernetesClustersKubernetesClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataWizKubernetesClustersKubernetesClustersOutputReference <a name="DataWizKubernetesClustersKubernetesClustersOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new DataWizKubernetesClustersKubernetesClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.cloudAccount">CloudAccount</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList">DataWizKubernetesClustersKubernetesClustersCloudAccountList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters">DataWizKubernetesClustersKubernetesClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudAccount`<sup>Required</sup> <a name="CloudAccount" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.cloudAccount"></a>

```csharp
public DataWizKubernetesClustersKubernetesClustersCloudAccountList CloudAccount { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList">DataWizKubernetesClustersKubernetesClustersCloudAccountList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.internalValue"></a>

```csharp
public DataWizKubernetesClustersKubernetesClusters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters">DataWizKubernetesClustersKubernetesClusters</a>

---



