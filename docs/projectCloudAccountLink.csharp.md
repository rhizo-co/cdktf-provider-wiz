# `projectCloudAccountLink` Submodule <a name="`projectCloudAccountLink` Submodule" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectCloudAccountLinkA <a name="ProjectCloudAccountLinkA" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link wiz_project_cloud_account_link}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudAccountLinkA(Construct Scope, string Id, ProjectCloudAccountLinkAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig">ProjectCloudAccountLinkAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig">ProjectCloudAccountLinkAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetCloudAccountId">ResetCloudAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetExternalCloudAccountId">ResetExternalCloudAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetShared">ResetShared</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceTags` <a name="PutResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags"></a>

```csharp
private void PutResourceTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags.parameter.value"></a>

- *Type:* object

---

##### `ResetCloudAccountId` <a name="ResetCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetCloudAccountId"></a>

```csharp
private void ResetCloudAccountId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetExternalCloudAccountId` <a name="ResetExternalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetExternalCloudAccountId"></a>

```csharp
private void ResetExternalCloudAccountId()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

##### `ResetShared` <a name="ResetShared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetShared"></a>

```csharp
private void ResetShared()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectCloudAccountLinkA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

ProjectCloudAccountLinkA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

ProjectCloudAccountLinkA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

ProjectCloudAccountLinkA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

ProjectCloudAccountLinkA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectCloudAccountLinkA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectCloudAccountLinkA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectCloudAccountLinkA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectCloudAccountLinkA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTags">ResourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList">ProjectCloudAccountLinkResourceTagsAList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountIdInput">CloudAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountIdInput">ExternalCloudAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.sharedInput">SharedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountId">CloudAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountId">ExternalCloudAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.shared">Shared</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTags"></a>

```csharp
public ProjectCloudAccountLinkResourceTagsAList ResourceTags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList">ProjectCloudAccountLinkResourceTagsAList</a>

---

##### `CloudAccountIdInput`<sup>Optional</sup> <a name="CloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountIdInput"></a>

```csharp
public string CloudAccountIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `ExternalCloudAccountIdInput`<sup>Optional</sup> <a name="ExternalCloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountIdInput"></a>

```csharp
public string ExternalCloudAccountIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTagsInput"></a>

```csharp
public object ResourceTagsInput { get; }
```

- *Type:* object

---

##### `SharedInput`<sup>Optional</sup> <a name="SharedInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.sharedInput"></a>

```csharp
public object SharedInput { get; }
```

- *Type:* object

---

##### `CloudAccountId`<sup>Required</sup> <a name="CloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountId"></a>

```csharp
public string CloudAccountId { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `ExternalCloudAccountId`<sup>Required</sup> <a name="ExternalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountId"></a>

```csharp
public string ExternalCloudAccountId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `Shared`<sup>Required</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.shared"></a>

```csharp
public object Shared { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCloudAccountLinkAConfig <a name="ProjectCloudAccountLinkAConfig" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudAccountLinkAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectId,
    string CloudAccountId = null,
    string Environment = null,
    string ExternalCloudAccountId = null,
    string[] ResourceGroups = null,
    object ResourceTags = null,
    object Shared = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The Wiz internal identifier of the Wiz project to link the cloud account to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.cloudAccountId">CloudAccountId</a></code> | <code>string</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.environment">Environment</a></code> | <code>string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.externalCloudAccountId">ExternalCloudAccountId</a></code> | <code>string</code> | The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceTags">ResourceTags</a></code> | <code>object</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.shared">Shared</a></code> | <code>object</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The Wiz internal identifier of the Wiz project to link the cloud account to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#project_id ProjectCloudAccountLinkA#project_id}

---

##### `CloudAccountId`<sup>Optional</sup> <a name="CloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.cloudAccountId"></a>

```csharp
public string CloudAccountId { get; set; }
```

- *Type:* string

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#cloud_account_id ProjectCloudAccountLinkA#cloud_account_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The environment.

* Allowed values:
  - PRODUCTION
  - STAGING
  - DEVELOPMENT
  - TESTING
  - OTHER

  * Defaults to `PRODUCTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#environment ProjectCloudAccountLinkA#environment}

---

##### `ExternalCloudAccountId`<sup>Optional</sup> <a name="ExternalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.externalCloudAccountId"></a>

```csharp
public string ExternalCloudAccountId { get; set; }
```

- *Type:* string

The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#external_cloud_account_id ProjectCloudAccountLinkA#external_cloud_account_id}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_groups ProjectCloudAccountLinkA#resource_groups}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceTags"></a>

```csharp
public object ResourceTags { get; set; }
```

- *Type:* object

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_tags ProjectCloudAccountLinkA#resource_tags}

---

##### `Shared`<sup>Optional</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.shared"></a>

```csharp
public object Shared { get; set; }
```

- *Type:* object

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#shared ProjectCloudAccountLinkA#shared}

---

### ProjectCloudAccountLinkResourceTagsA <a name="ProjectCloudAccountLinkResourceTagsA" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudAccountLinkResourceTagsA {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#key ProjectCloudAccountLinkA#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#value ProjectCloudAccountLinkA#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#key ProjectCloudAccountLinkA#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#value ProjectCloudAccountLinkA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectCloudAccountLinkResourceTagsAList <a name="ProjectCloudAccountLinkResourceTagsAList" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudAccountLinkResourceTagsAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get"></a>

```csharp
private ProjectCloudAccountLinkResourceTagsAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectCloudAccountLinkResourceTagsAOutputReference <a name="ProjectCloudAccountLinkResourceTagsAOutputReference" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudAccountLinkResourceTagsAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



