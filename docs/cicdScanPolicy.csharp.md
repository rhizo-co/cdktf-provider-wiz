# `cicdScanPolicy` Submodule <a name="`cicdScanPolicy` Submodule" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CicdScanPolicy <a name="CicdScanPolicy" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy wiz_cicd_scan_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CicdScanPolicy(Construct Scope, string Id, CicdScanPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig">CicdScanPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig">CicdScanPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams">PutDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams">PutDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams">PutIacParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskSecretsParams">ResetDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskVulnerabilitiesParams">ResetDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetIacParams">ResetIacParams</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDiskSecretsParams` <a name="PutDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams"></a>

```csharp
private void PutDiskSecretsParams(CicdScanPolicyDiskSecretsParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---

##### `PutDiskVulnerabilitiesParams` <a name="PutDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams"></a>

```csharp
private void PutDiskVulnerabilitiesParams(CicdScanPolicyDiskVulnerabilitiesParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---

##### `PutIacParams` <a name="PutIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams"></a>

```csharp
private void PutIacParams(CicdScanPolicyIacParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDiskSecretsParams` <a name="ResetDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskSecretsParams"></a>

```csharp
private void ResetDiskSecretsParams()
```

##### `ResetDiskVulnerabilitiesParams` <a name="ResetDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskVulnerabilitiesParams"></a>

```csharp
private void ResetDiskVulnerabilitiesParams()
```

##### `ResetIacParams` <a name="ResetIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetIacParams"></a>

```csharp
private void ResetIacParams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CicdScanPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

CicdScanPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

CicdScanPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

CicdScanPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

CicdScanPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CicdScanPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CicdScanPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CicdScanPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CicdScanPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.builtin">Builtin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParams">DiskSecretsParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference">CicdScanPolicyDiskSecretsParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParams">DiskVulnerabilitiesParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference">CicdScanPolicyDiskVulnerabilitiesParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParams">IacParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference">CicdScanPolicyIacParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParamsInput">DiskSecretsParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParamsInput">DiskVulnerabilitiesParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParamsInput">IacParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Builtin`<sup>Required</sup> <a name="Builtin" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.builtin"></a>

```csharp
public IResolvable Builtin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DiskSecretsParams`<sup>Required</sup> <a name="DiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParams"></a>

```csharp
public CicdScanPolicyDiskSecretsParamsOutputReference DiskSecretsParams { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference">CicdScanPolicyDiskSecretsParamsOutputReference</a>

---

##### `DiskVulnerabilitiesParams`<sup>Required</sup> <a name="DiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParams"></a>

```csharp
public CicdScanPolicyDiskVulnerabilitiesParamsOutputReference DiskVulnerabilitiesParams { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference">CicdScanPolicyDiskVulnerabilitiesParamsOutputReference</a>

---

##### `IacParams`<sup>Required</sup> <a name="IacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParams"></a>

```csharp
public CicdScanPolicyIacParamsOutputReference IacParams { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference">CicdScanPolicyIacParamsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiskSecretsParamsInput`<sup>Optional</sup> <a name="DiskSecretsParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParamsInput"></a>

```csharp
public CicdScanPolicyDiskSecretsParams DiskSecretsParamsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---

##### `DiskVulnerabilitiesParamsInput`<sup>Optional</sup> <a name="DiskVulnerabilitiesParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParamsInput"></a>

```csharp
public CicdScanPolicyDiskVulnerabilitiesParams DiskVulnerabilitiesParamsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---

##### `IacParamsInput`<sup>Optional</sup> <a name="IacParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParamsInput"></a>

```csharp
public CicdScanPolicyIacParams IacParamsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CicdScanPolicyConfig <a name="CicdScanPolicyConfig" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CicdScanPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    CicdScanPolicyDiskSecretsParams DiskSecretsParams = null,
    CicdScanPolicyDiskVulnerabilitiesParams DiskVulnerabilitiesParams = null,
    CicdScanPolicyIacParams IacParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.description">Description</a></code> | <code>string</code> | Description of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskSecretsParams">DiskSecretsParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | disk_secrets_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskVulnerabilitiesParams">DiskVulnerabilitiesParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | disk_vulnerabilities_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.iacParams">IacParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | iac_params block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#name CicdScanPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#description CicdScanPolicy#description}

---

##### `DiskSecretsParams`<sup>Optional</sup> <a name="DiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskSecretsParams"></a>

```csharp
public CicdScanPolicyDiskSecretsParams DiskSecretsParams { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

disk_secrets_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#disk_secrets_params CicdScanPolicy#disk_secrets_params}

---

##### `DiskVulnerabilitiesParams`<sup>Optional</sup> <a name="DiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskVulnerabilitiesParams"></a>

```csharp
public CicdScanPolicyDiskVulnerabilitiesParams DiskVulnerabilitiesParams { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

disk_vulnerabilities_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#disk_vulnerabilities_params CicdScanPolicy#disk_vulnerabilities_params}

---

##### `IacParams`<sup>Optional</sup> <a name="IacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.iacParams"></a>

```csharp
public CicdScanPolicyIacParams IacParams { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

iac_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#iac_params CicdScanPolicy#iac_params}

---

### CicdScanPolicyDiskSecretsParams <a name="CicdScanPolicyDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CicdScanPolicyDiskSecretsParams {
    double CountThreshold,
    string[] PathAllowList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.countThreshold">CountThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.pathAllowList">PathAllowList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}. |

---

##### `CountThreshold`<sup>Required</sup> <a name="CountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.countThreshold"></a>

```csharp
public double CountThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

##### `PathAllowList`<sup>Optional</sup> <a name="PathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.pathAllowList"></a>

```csharp
public string[] PathAllowList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}.

---

### CicdScanPolicyDiskVulnerabilitiesParams <a name="CicdScanPolicyDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CicdScanPolicyDiskVulnerabilitiesParams {
    object IgnoreUnfixed,
    string[] PackageAllowList,
    double PackageCountThreshold,
    string Severity
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.ignoreUnfixed">IgnoreUnfixed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageAllowList">PackageAllowList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageCountThreshold">PackageCountThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.severity">Severity</a></code> | <code>string</code> | Severity. |

---

##### `IgnoreUnfixed`<sup>Required</sup> <a name="IgnoreUnfixed" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.ignoreUnfixed"></a>

```csharp
public object IgnoreUnfixed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}.

---

##### `PackageAllowList`<sup>Required</sup> <a name="PackageAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageAllowList"></a>

```csharp
public string[] PackageAllowList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}.

---

##### `PackageCountThreshold`<sup>Required</sup> <a name="PackageCountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageCountThreshold"></a>

```csharp
public double PackageCountThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}.

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Severity.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#severity CicdScanPolicy#severity}

---

### CicdScanPolicyIacParams <a name="CicdScanPolicyIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CicdScanPolicyIacParams {
    double CountThreshold,
    string SeverityThreshold,
    object BuiltinIgnoreTagsEnabled = null,
    object CustomIgnoreTags = null,
    string[] IgnoredRules = null,
    string[] SecurityFrameworks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.countThreshold">CountThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.severityThreshold">SeverityThreshold</a></code> | <code>string</code> | Severity threshold. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.builtinIgnoreTagsEnabled">BuiltinIgnoreTagsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.customIgnoreTags">CustomIgnoreTags</a></code> | <code>object</code> | custom_ignore_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.ignoredRules">IgnoredRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.securityFrameworks">SecurityFrameworks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}. |

---

##### `CountThreshold`<sup>Required</sup> <a name="CountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.countThreshold"></a>

```csharp
public double CountThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

##### `SeverityThreshold`<sup>Required</sup> <a name="SeverityThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.severityThreshold"></a>

```csharp
public string SeverityThreshold { get; set; }
```

- *Type:* string

Severity threshold.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#severity_threshold CicdScanPolicy#severity_threshold}

---

##### `BuiltinIgnoreTagsEnabled`<sup>Optional</sup> <a name="BuiltinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.builtinIgnoreTagsEnabled"></a>

```csharp
public object BuiltinIgnoreTagsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}.

---

##### `CustomIgnoreTags`<sup>Optional</sup> <a name="CustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.customIgnoreTags"></a>

```csharp
public object CustomIgnoreTags { get; set; }
```

- *Type:* object

custom_ignore_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#custom_ignore_tags CicdScanPolicy#custom_ignore_tags}

---

##### `IgnoredRules`<sup>Optional</sup> <a name="IgnoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.ignoredRules"></a>

```csharp
public string[] IgnoredRules { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}.

---

##### `SecurityFrameworks`<sup>Optional</sup> <a name="SecurityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.securityFrameworks"></a>

```csharp
public string[] SecurityFrameworks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}.

---

### CicdScanPolicyIacParamsCustomIgnoreTags <a name="CicdScanPolicyIacParamsCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CicdScanPolicyIacParamsCustomIgnoreTags {
    string Key,
    string Value,
    object IgnoreAllRules = null,
    string[] RuleIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#key CicdScanPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#value CicdScanPolicy#value}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ignoreAllRules">IgnoreAllRules</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_all_rules CicdScanPolicy#ignore_all_rules}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ruleIds">RuleIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#rule_ids CicdScanPolicy#rule_ids}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#key CicdScanPolicy#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#value CicdScanPolicy#value}.

---

##### `IgnoreAllRules`<sup>Optional</sup> <a name="IgnoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ignoreAllRules"></a>

```csharp
public object IgnoreAllRules { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_all_rules CicdScanPolicy#ignore_all_rules}.

---

##### `RuleIds`<sup>Optional</sup> <a name="RuleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ruleIds"></a>

```csharp
public string[] RuleIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#rule_ids CicdScanPolicy#rule_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### CicdScanPolicyDiskSecretsParamsOutputReference <a name="CicdScanPolicyDiskSecretsParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CicdScanPolicyDiskSecretsParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resetPathAllowList">ResetPathAllowList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPathAllowList` <a name="ResetPathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resetPathAllowList"></a>

```csharp
private void ResetPathAllowList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThresholdInput">CountThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowListInput">PathAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThreshold">CountThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowList">PathAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountThresholdInput`<sup>Optional</sup> <a name="CountThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThresholdInput"></a>

```csharp
public double CountThresholdInput { get; }
```

- *Type:* double

---

##### `PathAllowListInput`<sup>Optional</sup> <a name="PathAllowListInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowListInput"></a>

```csharp
public string[] PathAllowListInput { get; }
```

- *Type:* string[]

---

##### `CountThreshold`<sup>Required</sup> <a name="CountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThreshold"></a>

```csharp
public double CountThreshold { get; }
```

- *Type:* double

---

##### `PathAllowList`<sup>Required</sup> <a name="PathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowList"></a>

```csharp
public string[] PathAllowList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.internalValue"></a>

```csharp
public CicdScanPolicyDiskSecretsParams InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---


### CicdScanPolicyDiskVulnerabilitiesParamsOutputReference <a name="CicdScanPolicyDiskVulnerabilitiesParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CicdScanPolicyDiskVulnerabilitiesParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixedInput">IgnoreUnfixedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowListInput">PackageAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThresholdInput">PackageCountThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixed">IgnoreUnfixed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowList">PackageAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThreshold">PackageCountThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreUnfixedInput`<sup>Optional</sup> <a name="IgnoreUnfixedInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixedInput"></a>

```csharp
public object IgnoreUnfixedInput { get; }
```

- *Type:* object

---

##### `PackageAllowListInput`<sup>Optional</sup> <a name="PackageAllowListInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowListInput"></a>

```csharp
public string[] PackageAllowListInput { get; }
```

- *Type:* string[]

---

##### `PackageCountThresholdInput`<sup>Optional</sup> <a name="PackageCountThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThresholdInput"></a>

```csharp
public double PackageCountThresholdInput { get; }
```

- *Type:* double

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `IgnoreUnfixed`<sup>Required</sup> <a name="IgnoreUnfixed" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixed"></a>

```csharp
public object IgnoreUnfixed { get; }
```

- *Type:* object

---

##### `PackageAllowList`<sup>Required</sup> <a name="PackageAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowList"></a>

```csharp
public string[] PackageAllowList { get; }
```

- *Type:* string[]

---

##### `PackageCountThreshold`<sup>Required</sup> <a name="PackageCountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThreshold"></a>

```csharp
public double PackageCountThreshold { get; }
```

- *Type:* double

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.internalValue"></a>

```csharp
public CicdScanPolicyDiskVulnerabilitiesParams InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---


### CicdScanPolicyIacParamsCustomIgnoreTagsList <a name="CicdScanPolicyIacParamsCustomIgnoreTagsList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CicdScanPolicyIacParamsCustomIgnoreTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get"></a>

```csharp
private CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference <a name="CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetIgnoreAllRules">ResetIgnoreAllRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetRuleIds">ResetRuleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreAllRules` <a name="ResetIgnoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetIgnoreAllRules"></a>

```csharp
private void ResetIgnoreAllRules()
```

##### `ResetRuleIds` <a name="ResetRuleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetRuleIds"></a>

```csharp
private void ResetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRulesInput">IgnoreAllRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIdsInput">RuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRules">IgnoreAllRules</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIds">RuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreAllRulesInput`<sup>Optional</sup> <a name="IgnoreAllRulesInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRulesInput"></a>

```csharp
public object IgnoreAllRulesInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `RuleIdsInput`<sup>Optional</sup> <a name="RuleIdsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIdsInput"></a>

```csharp
public string[] RuleIdsInput { get; }
```

- *Type:* string[]

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IgnoreAllRules`<sup>Required</sup> <a name="IgnoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRules"></a>

```csharp
public object IgnoreAllRules { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `RuleIds`<sup>Required</sup> <a name="RuleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIds"></a>

```csharp
public string[] RuleIds { get; }
```

- *Type:* string[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CicdScanPolicyIacParamsOutputReference <a name="CicdScanPolicyIacParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CicdScanPolicyIacParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags">PutCustomIgnoreTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetBuiltinIgnoreTagsEnabled">ResetBuiltinIgnoreTagsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetCustomIgnoreTags">ResetCustomIgnoreTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetIgnoredRules">ResetIgnoredRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetSecurityFrameworks">ResetSecurityFrameworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomIgnoreTags` <a name="PutCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags"></a>

```csharp
private void PutCustomIgnoreTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags.parameter.value"></a>

- *Type:* object

---

##### `ResetBuiltinIgnoreTagsEnabled` <a name="ResetBuiltinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetBuiltinIgnoreTagsEnabled"></a>

```csharp
private void ResetBuiltinIgnoreTagsEnabled()
```

##### `ResetCustomIgnoreTags` <a name="ResetCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetCustomIgnoreTags"></a>

```csharp
private void ResetCustomIgnoreTags()
```

##### `ResetIgnoredRules` <a name="ResetIgnoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetIgnoredRules"></a>

```csharp
private void ResetIgnoredRules()
```

##### `ResetSecurityFrameworks` <a name="ResetSecurityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetSecurityFrameworks"></a>

```csharp
private void ResetSecurityFrameworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTags">CustomIgnoreTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList">CicdScanPolicyIacParamsCustomIgnoreTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabledInput">BuiltinIgnoreTagsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThresholdInput">CountThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTagsInput">CustomIgnoreTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRulesInput">IgnoredRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworksInput">SecurityFrameworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThresholdInput">SeverityThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabled">BuiltinIgnoreTagsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThreshold">CountThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRules">IgnoredRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworks">SecurityFrameworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThreshold">SeverityThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomIgnoreTags`<sup>Required</sup> <a name="CustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTags"></a>

```csharp
public CicdScanPolicyIacParamsCustomIgnoreTagsList CustomIgnoreTags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList">CicdScanPolicyIacParamsCustomIgnoreTagsList</a>

---

##### `BuiltinIgnoreTagsEnabledInput`<sup>Optional</sup> <a name="BuiltinIgnoreTagsEnabledInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabledInput"></a>

```csharp
public object BuiltinIgnoreTagsEnabledInput { get; }
```

- *Type:* object

---

##### `CountThresholdInput`<sup>Optional</sup> <a name="CountThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThresholdInput"></a>

```csharp
public double CountThresholdInput { get; }
```

- *Type:* double

---

##### `CustomIgnoreTagsInput`<sup>Optional</sup> <a name="CustomIgnoreTagsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTagsInput"></a>

```csharp
public object CustomIgnoreTagsInput { get; }
```

- *Type:* object

---

##### `IgnoredRulesInput`<sup>Optional</sup> <a name="IgnoredRulesInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRulesInput"></a>

```csharp
public string[] IgnoredRulesInput { get; }
```

- *Type:* string[]

---

##### `SecurityFrameworksInput`<sup>Optional</sup> <a name="SecurityFrameworksInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworksInput"></a>

```csharp
public string[] SecurityFrameworksInput { get; }
```

- *Type:* string[]

---

##### `SeverityThresholdInput`<sup>Optional</sup> <a name="SeverityThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThresholdInput"></a>

```csharp
public string SeverityThresholdInput { get; }
```

- *Type:* string

---

##### `BuiltinIgnoreTagsEnabled`<sup>Required</sup> <a name="BuiltinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabled"></a>

```csharp
public object BuiltinIgnoreTagsEnabled { get; }
```

- *Type:* object

---

##### `CountThreshold`<sup>Required</sup> <a name="CountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThreshold"></a>

```csharp
public double CountThreshold { get; }
```

- *Type:* double

---

##### `IgnoredRules`<sup>Required</sup> <a name="IgnoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRules"></a>

```csharp
public string[] IgnoredRules { get; }
```

- *Type:* string[]

---

##### `SecurityFrameworks`<sup>Required</sup> <a name="SecurityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworks"></a>

```csharp
public string[] SecurityFrameworks { get; }
```

- *Type:* string[]

---

##### `SeverityThreshold`<sup>Required</sup> <a name="SeverityThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThreshold"></a>

```csharp
public string SeverityThreshold { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.internalValue"></a>

```csharp
public CicdScanPolicyIacParams InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---



