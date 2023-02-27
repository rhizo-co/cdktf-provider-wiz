# `metastore` Submodule <a name="`metastore` Submodule" id="@cdktf/provider-databricks.metastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Metastore <a name="Metastore" id="@cdktf/provider-databricks.metastore.Metastore"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/r/metastore databricks_metastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastore.Metastore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new Metastore(Construct Scope, string Id, MetastoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig">MetastoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.metastore.Metastore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.metastore.Metastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.metastore.Metastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastore.MetastoreConfig">MetastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetCloud">ResetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetDefaultDataAccessConfigId">ResetDefaultDataAccessConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetDeltaSharingOrganizationName">ResetDeltaSharingOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetDeltaSharingRecipientTokenLifetimeInSeconds">ResetDeltaSharingRecipientTokenLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetDeltaSharingScope">ResetDeltaSharingScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetGlobalMetastoreId">ResetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.metastore.Metastore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.metastore.Metastore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.metastore.Metastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.metastore.Metastore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.metastore.Metastore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.metastore.Metastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.metastore.Metastore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.metastore.Metastore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.metastore.Metastore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.metastore.Metastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.metastore.Metastore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.metastore.Metastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCloud` <a name="ResetCloud" id="@cdktf/provider-databricks.metastore.Metastore.resetCloud"></a>

```csharp
private void ResetCloud()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.metastore.Metastore.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.metastore.Metastore.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetDefaultDataAccessConfigId` <a name="ResetDefaultDataAccessConfigId" id="@cdktf/provider-databricks.metastore.Metastore.resetDefaultDataAccessConfigId"></a>

```csharp
private void ResetDefaultDataAccessConfigId()
```

##### `ResetDeltaSharingOrganizationName` <a name="ResetDeltaSharingOrganizationName" id="@cdktf/provider-databricks.metastore.Metastore.resetDeltaSharingOrganizationName"></a>

```csharp
private void ResetDeltaSharingOrganizationName()
```

##### `ResetDeltaSharingRecipientTokenLifetimeInSeconds` <a name="ResetDeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.metastore.Metastore.resetDeltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
private void ResetDeltaSharingRecipientTokenLifetimeInSeconds()
```

##### `ResetDeltaSharingScope` <a name="ResetDeltaSharingScope" id="@cdktf/provider-databricks.metastore.Metastore.resetDeltaSharingScope"></a>

```csharp
private void ResetDeltaSharingScope()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-databricks.metastore.Metastore.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetGlobalMetastoreId` <a name="ResetGlobalMetastoreId" id="@cdktf/provider-databricks.metastore.Metastore.resetGlobalMetastoreId"></a>

```csharp
private void ResetGlobalMetastoreId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.metastore.Metastore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.metastore.Metastore.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.metastore.Metastore.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.metastore.Metastore.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.metastore.Metastore.resetUpdatedBy"></a>

```csharp
private void ResetUpdatedBy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.metastore.Metastore.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Metastore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.metastore.Metastore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.metastore.Metastore.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Metastore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.metastore.Metastore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.metastore.Metastore.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Metastore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.metastore.Metastore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.cloudInput">CloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigIdInput">DefaultDataAccessConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationNameInput">DeltaSharingOrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSecondsInput">DeltaSharingRecipientTokenLifetimeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingScopeInput">DeltaSharingScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.globalMetastoreIdInput">GlobalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.storageRootInput">StorageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.updatedAtInput">UpdatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.updatedByInput">UpdatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.cloud">Cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.storageRoot">StorageRoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.metastore.Metastore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.metastore.Metastore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.metastore.Metastore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.metastore.Metastore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.metastore.Metastore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.metastore.Metastore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.metastore.Metastore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.metastore.Metastore.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.metastore.Metastore.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.metastore.Metastore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.metastore.Metastore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.metastore.Metastore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.metastore.Metastore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.metastore.Metastore.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CloudInput`<sup>Optional</sup> <a name="CloudInput" id="@cdktf/provider-databricks.metastore.Metastore.property.cloudInput"></a>

```csharp
public string CloudInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.metastore.Metastore.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.metastore.Metastore.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `DefaultDataAccessConfigIdInput`<sup>Optional</sup> <a name="DefaultDataAccessConfigIdInput" id="@cdktf/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigIdInput"></a>

```csharp
public string DefaultDataAccessConfigIdInput { get; }
```

- *Type:* string

---

##### `DeltaSharingOrganizationNameInput`<sup>Optional</sup> <a name="DeltaSharingOrganizationNameInput" id="@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationNameInput"></a>

```csharp
public string DeltaSharingOrganizationNameInput { get; }
```

- *Type:* string

---

##### `DeltaSharingRecipientTokenLifetimeInSecondsInput`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSecondsInput" id="@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSecondsInput"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSecondsInput { get; }
```

- *Type:* double

---

##### `DeltaSharingScopeInput`<sup>Optional</sup> <a name="DeltaSharingScopeInput" id="@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingScopeInput"></a>

```csharp
public string DeltaSharingScopeInput { get; }
```

- *Type:* string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-databricks.metastore.Metastore.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `GlobalMetastoreIdInput`<sup>Optional</sup> <a name="GlobalMetastoreIdInput" id="@cdktf/provider-databricks.metastore.Metastore.property.globalMetastoreIdInput"></a>

```csharp
public string GlobalMetastoreIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.metastore.Metastore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.metastore.Metastore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.metastore.Metastore.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.metastore.Metastore.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktf/provider-databricks.metastore.Metastore.property.storageRootInput"></a>

```csharp
public string StorageRootInput { get; }
```

- *Type:* string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.metastore.Metastore.property.updatedAtInput"></a>

```csharp
public double UpdatedAtInput { get; }
```

- *Type:* double

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.metastore.Metastore.property.updatedByInput"></a>

```csharp
public string UpdatedByInput { get; }
```

- *Type:* string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktf/provider-databricks.metastore.Metastore.property.cloud"></a>

```csharp
public string Cloud { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.metastore.Metastore.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.metastore.Metastore.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DefaultDataAccessConfigId`<sup>Required</sup> <a name="DefaultDataAccessConfigId" id="@cdktf/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigId"></a>

```csharp
public string DefaultDataAccessConfigId { get; }
```

- *Type:* string

---

##### `DeltaSharingOrganizationName`<sup>Required</sup> <a name="DeltaSharingOrganizationName" id="@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationName"></a>

```csharp
public string DeltaSharingOrganizationName { get; }
```

- *Type:* string

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Required</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSeconds { get; }
```

- *Type:* double

---

##### `DeltaSharingScope`<sup>Required</sup> <a name="DeltaSharingScope" id="@cdktf/provider-databricks.metastore.Metastore.property.deltaSharingScope"></a>

```csharp
public string DeltaSharingScope { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-databricks.metastore.Metastore.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.metastore.Metastore.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.metastore.Metastore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.metastore.Metastore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.metastore.Metastore.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.metastore.Metastore.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.metastore.Metastore.property.storageRoot"></a>

```csharp
public string StorageRoot { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.metastore.Metastore.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.metastore.Metastore.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastore.Metastore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.metastore.Metastore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MetastoreConfig <a name="MetastoreConfig" id="@cdktf/provider-databricks.metastore.MetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastore.MetastoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MetastoreConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string StorageRoot,
    string Cloud = null,
    double CreatedAt = null,
    string CreatedBy = null,
    string DefaultDataAccessConfigId = null,
    string DeltaSharingOrganizationName = null,
    double DeltaSharingRecipientTokenLifetimeInSeconds = null,
    string DeltaSharingScope = null,
    object ForceDestroy = null,
    string GlobalMetastoreId = null,
    string Id = null,
    string Owner = null,
    string Region = null,
    double UpdatedAt = null,
    string UpdatedBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#name Metastore#name}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.storageRoot">StorageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#storage_root Metastore#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.cloud">Cloud</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#cloud Metastore#cloud}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#created_at Metastore#created_at}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#created_by Metastore#created_by}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#default_data_access_config_id Metastore#default_data_access_config_id}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#delta_sharing_scope Metastore#delta_sharing_scope}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#force_destroy Metastore#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#global_metastore_id Metastore#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#id Metastore#id}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#owner Metastore#owner}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#region Metastore#region}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#updated_at Metastore#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.metastore.MetastoreConfig.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#updated_by Metastore#updated_by}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#name Metastore#name}.

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.storageRoot"></a>

```csharp
public string StorageRoot { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#storage_root Metastore#storage_root}.

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.cloud"></a>

```csharp
public string Cloud { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#cloud Metastore#cloud}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#created_at Metastore#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#created_by Metastore#created_by}.

---

##### `DefaultDataAccessConfigId`<sup>Optional</sup> <a name="DefaultDataAccessConfigId" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.defaultDataAccessConfigId"></a>

```csharp
public string DefaultDataAccessConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#default_data_access_config_id Metastore#default_data_access_config_id}.

---

##### `DeltaSharingOrganizationName`<sup>Optional</sup> <a name="DeltaSharingOrganizationName" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.deltaSharingOrganizationName"></a>

```csharp
public string DeltaSharingOrganizationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}.

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `DeltaSharingScope`<sup>Optional</sup> <a name="DeltaSharingScope" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.deltaSharingScope"></a>

```csharp
public string DeltaSharingScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#delta_sharing_scope Metastore#delta_sharing_scope}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#force_destroy Metastore#force_destroy}.

---

##### `GlobalMetastoreId`<sup>Optional</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#global_metastore_id Metastore#global_metastore_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#id Metastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#owner Metastore#owner}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#region Metastore#region}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#updated_at Metastore#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.metastore.MetastoreConfig.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#updated_by Metastore#updated_by}.

---


