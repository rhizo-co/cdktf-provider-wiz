# `project` Submodule <a name="`project` Submodule" id="rhizo-co-terraform-provider-wiz.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="rhizo-co-terraform-provider-wiz.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project wiz_project}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new Project(Construct Scope, string Id, ProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig">ProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink">PutCloudAccountLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink">PutCloudOrganizationLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink">PutKubernetesClusterLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile">PutRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetBusinessUnit">ResetBusinessUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetCloudAccountLink">ResetCloudAccountLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetCloudOrganizationLink">ResetCloudOrganizationLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetIdentifiers">ResetIdentifiers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetIsFolder">ResetIsFolder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetKubernetesClusterLink">ResetKubernetesClusterLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetParentProjectId">ResetParentProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetProjectOwners">ResetProjectOwners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetRiskProfile">ResetRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetSecurityChampions">ResetSecurityChampions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.Project.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.project.Project.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.project.Project.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.project.Project.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-wiz.project.Project.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-wiz.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-wiz.project.Project.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-wiz.project.Project.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.project.Project.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.project.Project.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-wiz.project.Project.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.project.Project.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-wiz.project.Project.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-wiz.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.project.Project.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-wiz.project.Project.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.project.Project.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudAccountLink` <a name="PutCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink"></a>

```csharp
private void PutCloudAccountLink(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink.parameter.value"></a>

- *Type:* object

---

##### `PutCloudOrganizationLink` <a name="PutCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink"></a>

```csharp
private void PutCloudOrganizationLink(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink.parameter.value"></a>

- *Type:* object

---

##### `PutKubernetesClusterLink` <a name="PutKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink"></a>

```csharp
private void PutKubernetesClusterLink(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink.parameter.value"></a>

- *Type:* object

---

##### `PutRiskProfile` <a name="PutRiskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile"></a>

```csharp
private void PutRiskProfile(ProjectRiskProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---

##### `ResetArchived` <a name="ResetArchived" id="rhizo-co-terraform-provider-wiz.project.Project.resetArchived"></a>

```csharp
private void ResetArchived()
```

##### `ResetBusinessUnit` <a name="ResetBusinessUnit" id="rhizo-co-terraform-provider-wiz.project.Project.resetBusinessUnit"></a>

```csharp
private void ResetBusinessUnit()
```

##### `ResetCloudAccountLink` <a name="ResetCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetCloudAccountLink"></a>

```csharp
private void ResetCloudAccountLink()
```

##### `ResetCloudOrganizationLink` <a name="ResetCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetCloudOrganizationLink"></a>

```csharp
private void ResetCloudOrganizationLink()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-wiz.project.Project.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIdentifiers` <a name="ResetIdentifiers" id="rhizo-co-terraform-provider-wiz.project.Project.resetIdentifiers"></a>

```csharp
private void ResetIdentifiers()
```

##### `ResetIsFolder` <a name="ResetIsFolder" id="rhizo-co-terraform-provider-wiz.project.Project.resetIsFolder"></a>

```csharp
private void ResetIsFolder()
```

##### `ResetKubernetesClusterLink` <a name="ResetKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetKubernetesClusterLink"></a>

```csharp
private void ResetKubernetesClusterLink()
```

##### `ResetParentProjectId` <a name="ResetParentProjectId" id="rhizo-co-terraform-provider-wiz.project.Project.resetParentProjectId"></a>

```csharp
private void ResetParentProjectId()
```

##### `ResetProjectOwners` <a name="ResetProjectOwners" id="rhizo-co-terraform-provider-wiz.project.Project.resetProjectOwners"></a>

```csharp
private void ResetProjectOwners()
```

##### `ResetRiskProfile` <a name="ResetRiskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.resetRiskProfile"></a>

```csharp
private void ResetRiskProfile()
```

##### `ResetSecurityChampions` <a name="ResetSecurityChampions" id="rhizo-co-terraform-provider-wiz.project.Project.resetSecurityChampions"></a>

```csharp
private void ResetSecurityChampions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.project.Project.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

Project.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.project.Project.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

Project.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

Project.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

Project.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Project to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLink">CloudAccountLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList">ProjectCloudAccountLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLink">CloudOrganizationLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList">ProjectCloudOrganizationLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLink">KubernetesClusterLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList">ProjectKubernetesClusterLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.riskProfile">RiskProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference">ProjectRiskProfileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.slug">Slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.archivedInput">ArchivedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.businessUnitInput">BusinessUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLinkInput">CloudAccountLinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLinkInput">CloudOrganizationLinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.identifiersInput">IdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.isFolderInput">IsFolderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLinkInput">KubernetesClusterLinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectIdInput">ParentProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.projectOwnersInput">ProjectOwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.riskProfileInput">RiskProfileInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.securityChampionsInput">SecurityChampionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.archived">Archived</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.businessUnit">BusinessUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.identifiers">Identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.isFolder">IsFolder</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectId">ParentProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.projectOwners">ProjectOwners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.securityChampions">SecurityChampions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.project.Project.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.project.Project.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.Project.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.project.Project.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.project.Project.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.project.Project.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.project.Project.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.project.Project.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.project.Project.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.project.Project.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.project.Project.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CloudAccountLink`<sup>Required</sup> <a name="CloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLink"></a>

```csharp
public ProjectCloudAccountLinkList CloudAccountLink { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList">ProjectCloudAccountLinkList</a>

---

##### `CloudOrganizationLink`<sup>Required</sup> <a name="CloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLink"></a>

```csharp
public ProjectCloudOrganizationLinkList CloudOrganizationLink { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList">ProjectCloudOrganizationLinkList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.project.Project.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubernetesClusterLink`<sup>Required</sup> <a name="KubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLink"></a>

```csharp
public ProjectKubernetesClusterLinkList KubernetesClusterLink { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList">ProjectKubernetesClusterLinkList</a>

---

##### `RiskProfile`<sup>Required</sup> <a name="RiskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.property.riskProfile"></a>

```csharp
public ProjectRiskProfileOutputReference RiskProfile { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference">ProjectRiskProfileOutputReference</a>

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="rhizo-co-terraform-provider-wiz.project.Project.property.slug"></a>

```csharp
public string Slug { get; }
```

- *Type:* string

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.archivedInput"></a>

```csharp
public object ArchivedInput { get; }
```

- *Type:* object

---

##### `BusinessUnitInput`<sup>Optional</sup> <a name="BusinessUnitInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.businessUnitInput"></a>

```csharp
public string BusinessUnitInput { get; }
```

- *Type:* string

---

##### `CloudAccountLinkInput`<sup>Optional</sup> <a name="CloudAccountLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLinkInput"></a>

```csharp
public object CloudAccountLinkInput { get; }
```

- *Type:* object

---

##### `CloudOrganizationLinkInput`<sup>Optional</sup> <a name="CloudOrganizationLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLinkInput"></a>

```csharp
public object CloudOrganizationLinkInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.identifiersInput"></a>

```csharp
public string[] IdentifiersInput { get; }
```

- *Type:* string[]

---

##### `IsFolderInput`<sup>Optional</sup> <a name="IsFolderInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.isFolderInput"></a>

```csharp
public object IsFolderInput { get; }
```

- *Type:* object

---

##### `KubernetesClusterLinkInput`<sup>Optional</sup> <a name="KubernetesClusterLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLinkInput"></a>

```csharp
public object KubernetesClusterLinkInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentProjectIdInput`<sup>Optional</sup> <a name="ParentProjectIdInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectIdInput"></a>

```csharp
public string ParentProjectIdInput { get; }
```

- *Type:* string

---

##### `ProjectOwnersInput`<sup>Optional</sup> <a name="ProjectOwnersInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.projectOwnersInput"></a>

```csharp
public string[] ProjectOwnersInput { get; }
```

- *Type:* string[]

---

##### `RiskProfileInput`<sup>Optional</sup> <a name="RiskProfileInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.riskProfileInput"></a>

```csharp
public ProjectRiskProfile RiskProfileInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---

##### `SecurityChampionsInput`<sup>Optional</sup> <a name="SecurityChampionsInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.securityChampionsInput"></a>

```csharp
public string[] SecurityChampionsInput { get; }
```

- *Type:* string[]

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="rhizo-co-terraform-provider-wiz.project.Project.property.archived"></a>

```csharp
public object Archived { get; }
```

- *Type:* object

---

##### `BusinessUnit`<sup>Required</sup> <a name="BusinessUnit" id="rhizo-co-terraform-provider-wiz.project.Project.property.businessUnit"></a>

```csharp
public string BusinessUnit { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.project.Project.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="rhizo-co-terraform-provider-wiz.project.Project.property.identifiers"></a>

```csharp
public string[] Identifiers { get; }
```

- *Type:* string[]

---

##### `IsFolder`<sup>Required</sup> <a name="IsFolder" id="rhizo-co-terraform-provider-wiz.project.Project.property.isFolder"></a>

```csharp
public object IsFolder { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.project.Project.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentProjectId`<sup>Required</sup> <a name="ParentProjectId" id="rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectId"></a>

```csharp
public string ParentProjectId { get; }
```

- *Type:* string

---

##### `ProjectOwners`<sup>Required</sup> <a name="ProjectOwners" id="rhizo-co-terraform-provider-wiz.project.Project.property.projectOwners"></a>

```csharp
public string[] ProjectOwners { get; }
```

- *Type:* string[]

---

##### `SecurityChampions`<sup>Required</sup> <a name="SecurityChampions" id="rhizo-co-terraform-provider-wiz.project.Project.property.securityChampions"></a>

```csharp
public string[] SecurityChampions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.project.Project.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCloudAccountLink <a name="ProjectCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudAccountLink {
    string CloudAccountId,
    string Environment = null,
    string[] ResourceGroups = null,
    object ResourceTags = null,
    object Shared = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.cloudAccountId">CloudAccountId</a></code> | <code>string</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.environment">Environment</a></code> | <code>string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceTags">ResourceTags</a></code> | <code>object</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.shared">Shared</a></code> | <code>object</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `CloudAccountId`<sup>Required</sup> <a name="CloudAccountId" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.cloudAccountId"></a>

```csharp
public string CloudAccountId { get; set; }
```

- *Type:* string

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_account_id Project#cloud_account_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.environment"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_groups Project#resource_groups}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceTags"></a>

```csharp
public object ResourceTags { get; set; }
```

- *Type:* object

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_tags Project#resource_tags}

---

##### `Shared`<sup>Optional</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.shared"></a>

```csharp
public object Shared { get; set; }
```

- *Type:* object

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}

---

### ProjectCloudAccountLinkResourceTags <a name="ProjectCloudAccountLinkResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudAccountLinkResourceTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}.

---

### ProjectCloudOrganizationLink <a name="ProjectCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudOrganizationLink {
    string CloudOrganization,
    string Environment = null,
    string[] ResourceGroups = null,
    object ResourceTags = null,
    object Shared = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.cloudOrganization">CloudOrganization</a></code> | <code>string</code> | The Wiz internal identifier for the Organizational Unit. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.environment">Environment</a></code> | <code>string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Please provide a list of strings for filtering by resource groups. `shared` must be true to define resource_groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceTags">ResourceTags</a></code> | <code>object</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.shared">Shared</a></code> | <code>object</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `CloudOrganization`<sup>Required</sup> <a name="CloudOrganization" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.cloudOrganization"></a>

```csharp
public string CloudOrganization { get; set; }
```

- *Type:* string

The Wiz internal identifier for the Organizational Unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_organization Project#cloud_organization}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.environment"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Please provide a list of strings for filtering by resource groups. `shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_groups Project#resource_groups}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceTags"></a>

```csharp
public object ResourceTags { get; set; }
```

- *Type:* object

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_tags Project#resource_tags}

---

##### `Shared`<sup>Optional</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.shared"></a>

```csharp
public object Shared { get; set; }
```

- *Type:* object

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}

---

### ProjectCloudOrganizationLinkResourceTags <a name="ProjectCloudOrganizationLinkResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudOrganizationLinkResourceTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}.

---

### ProjectConfig <a name="ProjectConfig" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Archived = null,
    string BusinessUnit = null,
    object CloudAccountLink = null,
    object CloudOrganizationLink = null,
    string Description = null,
    string[] Identifiers = null,
    object IsFolder = null,
    object KubernetesClusterLink = null,
    string ParentProjectId = null,
    string[] ProjectOwners = null,
    ProjectRiskProfile RiskProfile = null,
    string[] SecurityChampions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.name">Name</a></code> | <code>string</code> | The project name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.archived">Archived</a></code> | <code>object</code> | Whether the project is archived/inactive     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.businessUnit">BusinessUnit</a></code> | <code>string</code> | The business unit to which the project belongs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudAccountLink">CloudAccountLink</a></code> | <code>object</code> | cloud_account_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudOrganizationLink">CloudOrganizationLink</a></code> | <code>object</code> | cloud_organization_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.description">Description</a></code> | <code>string</code> | The project description. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.identifiers">Identifiers</a></code> | <code>string[]</code> | Identifiers for the project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.isFolder">IsFolder</a></code> | <code>object</code> | Whether the project is a folder.     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.kubernetesClusterLink">KubernetesClusterLink</a></code> | <code>object</code> | kubernetes_cluster_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.parentProjectId">ParentProjectId</a></code> | <code>string</code> | The parent project ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.projectOwners">ProjectOwners</a></code> | <code>string[]</code> | A list of project owner IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.riskProfile">RiskProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | risk_profile block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.securityChampions">SecurityChampions</a></code> | <code>string[]</code> | A list of security champions IDs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The project name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#name Project#name}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.archived"></a>

```csharp
public object Archived { get; set; }
```

- *Type:* object

Whether the project is archived/inactive     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#archived Project#archived}

---

##### `BusinessUnit`<sup>Optional</sup> <a name="BusinessUnit" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.businessUnit"></a>

```csharp
public string BusinessUnit { get; set; }
```

- *Type:* string

The business unit to which the project belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#business_unit Project#business_unit}

---

##### `CloudAccountLink`<sup>Optional</sup> <a name="CloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudAccountLink"></a>

```csharp
public object CloudAccountLink { get; set; }
```

- *Type:* object

cloud_account_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_account_link Project#cloud_account_link}

---

##### `CloudOrganizationLink`<sup>Optional</sup> <a name="CloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudOrganizationLink"></a>

```csharp
public object CloudOrganizationLink { get; set; }
```

- *Type:* object

cloud_organization_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_organization_link Project#cloud_organization_link}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The project description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#description Project#description}

---

##### `Identifiers`<sup>Optional</sup> <a name="Identifiers" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.identifiers"></a>

```csharp
public string[] Identifiers { get; set; }
```

- *Type:* string[]

Identifiers for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#identifiers Project#identifiers}

---

##### `IsFolder`<sup>Optional</sup> <a name="IsFolder" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.isFolder"></a>

```csharp
public object IsFolder { get; set; }
```

- *Type:* object

Whether the project is a folder.     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_folder Project#is_folder}

---

##### `KubernetesClusterLink`<sup>Optional</sup> <a name="KubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.kubernetesClusterLink"></a>

```csharp
public object KubernetesClusterLink { get; set; }
```

- *Type:* object

kubernetes_cluster_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#kubernetes_cluster_link Project#kubernetes_cluster_link}

---

##### `ParentProjectId`<sup>Optional</sup> <a name="ParentProjectId" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.parentProjectId"></a>

```csharp
public string ParentProjectId { get; set; }
```

- *Type:* string

The parent project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#parent_project_id Project#parent_project_id}

---

##### `ProjectOwners`<sup>Optional</sup> <a name="ProjectOwners" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.projectOwners"></a>

```csharp
public string[] ProjectOwners { get; set; }
```

- *Type:* string[]

A list of project owner IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#project_owners Project#project_owners}

---

##### `RiskProfile`<sup>Optional</sup> <a name="RiskProfile" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.riskProfile"></a>

```csharp
public ProjectRiskProfile RiskProfile { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

risk_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#risk_profile Project#risk_profile}

---

##### `SecurityChampions`<sup>Optional</sup> <a name="SecurityChampions" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.securityChampions"></a>

```csharp
public string[] SecurityChampions { get; set; }
```

- *Type:* string[]

A list of security champions IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#security_champions Project#security_champions}

---

### ProjectKubernetesClusterLink <a name="ProjectKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectKubernetesClusterLink {
    string KubernetesCluster,
    string Environment = null,
    string[] Namespaces = null,
    object Shared = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.kubernetesCluster">KubernetesCluster</a></code> | <code>string</code> | The Wiz internal identifier for the kubernetes cluster. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.environment">Environment</a></code> | <code>string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.namespaces">Namespaces</a></code> | <code>string[]</code> | The kubernetes namespaces to link. `shared` must be set to `true` if namespaces are set. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.shared">Shared</a></code> | <code>object</code> | Mark the kubernetes cluster as shared, in which case, specific namespaces can be linked. |

---

##### `KubernetesCluster`<sup>Required</sup> <a name="KubernetesCluster" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.kubernetesCluster"></a>

```csharp
public string KubernetesCluster { get; set; }
```

- *Type:* string

The Wiz internal identifier for the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#kubernetes_cluster Project#kubernetes_cluster}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.environment"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}

---

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.namespaces"></a>

```csharp
public string[] Namespaces { get; set; }
```

- *Type:* string[]

The kubernetes namespaces to link. `shared` must be set to `true` if namespaces are set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#namespaces Project#namespaces}

---

##### `Shared`<sup>Optional</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.shared"></a>

```csharp
public object Shared { get; set; }
```

- *Type:* object

Mark the kubernetes cluster as shared, in which case, specific namespaces can be linked.

This needs to be set to `true` if `namespaces` are set.
- Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}

---

### ProjectRiskProfile <a name="ProjectRiskProfile" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectRiskProfile {
    string BusinessImpact = null,
    string HasAuthentication = null,
    string HasExposedApi = null,
    string IsActivelyDeveloped = null,
    string IsCustomerFacing = null,
    string IsInternetFacing = null,
    string IsRegulated = null,
    string[] RegulatoryStandards = null,
    string[] SensitiveDataTypes = null,
    string StoresData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.businessImpact">BusinessImpact</a></code> | <code>string</code> | Business impact. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasAuthentication">HasAuthentication</a></code> | <code>string</code> | Does the project require authentication? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasExposedApi">HasExposedApi</a></code> | <code>string</code> | Does the project expose an API? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isActivelyDeveloped">IsActivelyDeveloped</a></code> | <code>string</code> | Is the project under active development? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isCustomerFacing">IsCustomerFacing</a></code> | <code>string</code> | Is the project customer facing? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isInternetFacing">IsInternetFacing</a></code> | <code>string</code> | Is the project Internet facing? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isRegulated">IsRegulated</a></code> | <code>string</code> | Is the project regulated? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.regulatoryStandards">RegulatoryStandards</a></code> | <code>string[]</code> | Regulatory Standards. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.sensitiveDataTypes">SensitiveDataTypes</a></code> | <code>string[]</code> | Sensitive Data Types. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.storesData">StoresData</a></code> | <code>string</code> | Does the project store data? |

---

##### `BusinessImpact`<sup>Optional</sup> <a name="BusinessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.businessImpact"></a>

```csharp
public string BusinessImpact { get; set; }
```

- *Type:* string

Business impact.

* Allowed values:
  - LBI
  - MBI
  - HBI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#business_impact Project#business_impact}

---

##### `HasAuthentication`<sup>Optional</sup> <a name="HasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasAuthentication"></a>

```csharp
public string HasAuthentication { get; set; }
```

- *Type:* string

Does the project require authentication?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#has_authentication Project#has_authentication}

---

##### `HasExposedApi`<sup>Optional</sup> <a name="HasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasExposedApi"></a>

```csharp
public string HasExposedApi { get; set; }
```

- *Type:* string

Does the project expose an API?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#has_exposed_api Project#has_exposed_api}

---

##### `IsActivelyDeveloped`<sup>Optional</sup> <a name="IsActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isActivelyDeveloped"></a>

```csharp
public string IsActivelyDeveloped { get; set; }
```

- *Type:* string

Is the project under active development?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_actively_developed Project#is_actively_developed}

---

##### `IsCustomerFacing`<sup>Optional</sup> <a name="IsCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isCustomerFacing"></a>

```csharp
public string IsCustomerFacing { get; set; }
```

- *Type:* string

Is the project customer facing?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_customer_facing Project#is_customer_facing}

---

##### `IsInternetFacing`<sup>Optional</sup> <a name="IsInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isInternetFacing"></a>

```csharp
public string IsInternetFacing { get; set; }
```

- *Type:* string

Is the project Internet facing?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_internet_facing Project#is_internet_facing}

---

##### `IsRegulated`<sup>Optional</sup> <a name="IsRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isRegulated"></a>

```csharp
public string IsRegulated { get; set; }
```

- *Type:* string

Is the project regulated?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_regulated Project#is_regulated}

---

##### `RegulatoryStandards`<sup>Optional</sup> <a name="RegulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.regulatoryStandards"></a>

```csharp
public string[] RegulatoryStandards { get; set; }
```

- *Type:* string[]

Regulatory Standards.

* Allowed values:
  - ISO_20000_1_2011
  - ISO_22301
  - ISO_27001
  - ISO_27017
  - ISO_27018
  - ISO_27701
  - ISO_9001
  - SOC
  - FEDRAMP
  - NIST_800_171
  - NIST_CSF
  - HIPPA_HITECH
  - HITRUST
  - PCI_DSS
  - SEC_17A_4
  - SEC_REGULATION_SCI
  - SOX
  - GDPR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#regulatory_standards Project#regulatory_standards}

---

##### `SensitiveDataTypes`<sup>Optional</sup> <a name="SensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.sensitiveDataTypes"></a>

```csharp
public string[] SensitiveDataTypes { get; set; }
```

- *Type:* string[]

Sensitive Data Types.

* Allowed values:
  - CLASSIFIED
  - HEALTH
  - PII
  - PCI
  - FINANCIAL
  - CUSTOMER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#sensitive_data_types Project#sensitive_data_types}

---

##### `StoresData`<sup>Optional</sup> <a name="StoresData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.storesData"></a>

```csharp
public string StoresData { get; set; }
```

- *Type:* string

Does the project store data?

* Allowed values:
  - YES
  - NO
  - UNKNOWN

  * Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#stores_data Project#stores_data}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectCloudAccountLinkList <a name="ProjectCloudAccountLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudAccountLinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get"></a>

```csharp
private ProjectCloudAccountLinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectCloudAccountLinkOutputReference <a name="ProjectCloudAccountLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudAccountLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetShared">ResetShared</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceTags` <a name="PutResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags"></a>

```csharp
private void PutResourceTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags.parameter.value"></a>

- *Type:* object

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

##### `ResetShared` <a name="ResetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetShared"></a>

```csharp
private void ResetShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTags">ResourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList">ProjectCloudAccountLinkResourceTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountIdInput">CloudAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.sharedInput">SharedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountId">CloudAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.shared">Shared</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTags"></a>

```csharp
public ProjectCloudAccountLinkResourceTagsList ResourceTags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList">ProjectCloudAccountLinkResourceTagsList</a>

---

##### `CloudAccountIdInput`<sup>Optional</sup> <a name="CloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountIdInput"></a>

```csharp
public string CloudAccountIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTagsInput"></a>

```csharp
public object ResourceTagsInput { get; }
```

- *Type:* object

---

##### `SharedInput`<sup>Optional</sup> <a name="SharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.sharedInput"></a>

```csharp
public object SharedInput { get; }
```

- *Type:* object

---

##### `CloudAccountId`<sup>Required</sup> <a name="CloudAccountId" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountId"></a>

```csharp
public string CloudAccountId { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `Shared`<sup>Required</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.shared"></a>

```csharp
public object Shared { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectCloudAccountLinkResourceTagsList <a name="ProjectCloudAccountLinkResourceTagsList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudAccountLinkResourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get"></a>

```csharp
private ProjectCloudAccountLinkResourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectCloudAccountLinkResourceTagsOutputReference <a name="ProjectCloudAccountLinkResourceTagsOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudAccountLinkResourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectCloudOrganizationLinkList <a name="ProjectCloudOrganizationLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudOrganizationLinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get"></a>

```csharp
private ProjectCloudOrganizationLinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectCloudOrganizationLinkOutputReference <a name="ProjectCloudOrganizationLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudOrganizationLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetShared">ResetShared</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceTags` <a name="PutResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags"></a>

```csharp
private void PutResourceTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags.parameter.value"></a>

- *Type:* object

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

##### `ResetShared` <a name="ResetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetShared"></a>

```csharp
private void ResetShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTags">ResourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList">ProjectCloudOrganizationLinkResourceTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganizationInput">CloudOrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.sharedInput">SharedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganization">CloudOrganization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.shared">Shared</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTags"></a>

```csharp
public ProjectCloudOrganizationLinkResourceTagsList ResourceTags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList">ProjectCloudOrganizationLinkResourceTagsList</a>

---

##### `CloudOrganizationInput`<sup>Optional</sup> <a name="CloudOrganizationInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganizationInput"></a>

```csharp
public string CloudOrganizationInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTagsInput"></a>

```csharp
public object ResourceTagsInput { get; }
```

- *Type:* object

---

##### `SharedInput`<sup>Optional</sup> <a name="SharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.sharedInput"></a>

```csharp
public object SharedInput { get; }
```

- *Type:* object

---

##### `CloudOrganization`<sup>Required</sup> <a name="CloudOrganization" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganization"></a>

```csharp
public string CloudOrganization { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `Shared`<sup>Required</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.shared"></a>

```csharp
public object Shared { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectCloudOrganizationLinkResourceTagsList <a name="ProjectCloudOrganizationLinkResourceTagsList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudOrganizationLinkResourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get"></a>

```csharp
private ProjectCloudOrganizationLinkResourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectCloudOrganizationLinkResourceTagsOutputReference <a name="ProjectCloudOrganizationLinkResourceTagsOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectCloudOrganizationLinkResourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectKubernetesClusterLinkList <a name="ProjectKubernetesClusterLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectKubernetesClusterLinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get"></a>

```csharp
private ProjectKubernetesClusterLinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectKubernetesClusterLinkOutputReference <a name="ProjectKubernetesClusterLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectKubernetesClusterLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetNamespaces">ResetNamespaces</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetShared">ResetShared</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetNamespaces` <a name="ResetNamespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetNamespaces"></a>

```csharp
private void ResetNamespaces()
```

##### `ResetShared` <a name="ResetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetShared"></a>

```csharp
private void ResetShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesClusterInput">KubernetesClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.sharedInput">SharedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesCluster">KubernetesCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespaces">Namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.shared">Shared</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `KubernetesClusterInput`<sup>Optional</sup> <a name="KubernetesClusterInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesClusterInput"></a>

```csharp
public string KubernetesClusterInput { get; }
```

- *Type:* string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespacesInput"></a>

```csharp
public string[] NamespacesInput { get; }
```

- *Type:* string[]

---

##### `SharedInput`<sup>Optional</sup> <a name="SharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.sharedInput"></a>

```csharp
public object SharedInput { get; }
```

- *Type:* object

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `KubernetesCluster`<sup>Required</sup> <a name="KubernetesCluster" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesCluster"></a>

```csharp
public string KubernetesCluster { get; }
```

- *Type:* string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespaces"></a>

```csharp
public string[] Namespaces { get; }
```

- *Type:* string[]

---

##### `Shared`<sup>Required</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.shared"></a>

```csharp
public object Shared { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectRiskProfileOutputReference <a name="ProjectRiskProfileOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new ProjectRiskProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetBusinessImpact">ResetBusinessImpact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasAuthentication">ResetHasAuthentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasExposedApi">ResetHasExposedApi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsActivelyDeveloped">ResetIsActivelyDeveloped</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsCustomerFacing">ResetIsCustomerFacing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsInternetFacing">ResetIsInternetFacing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsRegulated">ResetIsRegulated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetRegulatoryStandards">ResetRegulatoryStandards</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetSensitiveDataTypes">ResetSensitiveDataTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetStoresData">ResetStoresData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBusinessImpact` <a name="ResetBusinessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetBusinessImpact"></a>

```csharp
private void ResetBusinessImpact()
```

##### `ResetHasAuthentication` <a name="ResetHasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasAuthentication"></a>

```csharp
private void ResetHasAuthentication()
```

##### `ResetHasExposedApi` <a name="ResetHasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasExposedApi"></a>

```csharp
private void ResetHasExposedApi()
```

##### `ResetIsActivelyDeveloped` <a name="ResetIsActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsActivelyDeveloped"></a>

```csharp
private void ResetIsActivelyDeveloped()
```

##### `ResetIsCustomerFacing` <a name="ResetIsCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsCustomerFacing"></a>

```csharp
private void ResetIsCustomerFacing()
```

##### `ResetIsInternetFacing` <a name="ResetIsInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsInternetFacing"></a>

```csharp
private void ResetIsInternetFacing()
```

##### `ResetIsRegulated` <a name="ResetIsRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsRegulated"></a>

```csharp
private void ResetIsRegulated()
```

##### `ResetRegulatoryStandards` <a name="ResetRegulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetRegulatoryStandards"></a>

```csharp
private void ResetRegulatoryStandards()
```

##### `ResetSensitiveDataTypes` <a name="ResetSensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetSensitiveDataTypes"></a>

```csharp
private void ResetSensitiveDataTypes()
```

##### `ResetStoresData` <a name="ResetStoresData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetStoresData"></a>

```csharp
private void ResetStoresData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpactInput">BusinessImpactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthenticationInput">HasAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApiInput">HasExposedApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDevelopedInput">IsActivelyDevelopedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacingInput">IsCustomerFacingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacingInput">IsInternetFacingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulatedInput">IsRegulatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandardsInput">RegulatoryStandardsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypesInput">SensitiveDataTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesDataInput">StoresDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpact">BusinessImpact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthentication">HasAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApi">HasExposedApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDeveloped">IsActivelyDeveloped</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacing">IsCustomerFacing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacing">IsInternetFacing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulated">IsRegulated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandards">RegulatoryStandards</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypes">SensitiveDataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesData">StoresData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BusinessImpactInput`<sup>Optional</sup> <a name="BusinessImpactInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpactInput"></a>

```csharp
public string BusinessImpactInput { get; }
```

- *Type:* string

---

##### `HasAuthenticationInput`<sup>Optional</sup> <a name="HasAuthenticationInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthenticationInput"></a>

```csharp
public string HasAuthenticationInput { get; }
```

- *Type:* string

---

##### `HasExposedApiInput`<sup>Optional</sup> <a name="HasExposedApiInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApiInput"></a>

```csharp
public string HasExposedApiInput { get; }
```

- *Type:* string

---

##### `IsActivelyDevelopedInput`<sup>Optional</sup> <a name="IsActivelyDevelopedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDevelopedInput"></a>

```csharp
public string IsActivelyDevelopedInput { get; }
```

- *Type:* string

---

##### `IsCustomerFacingInput`<sup>Optional</sup> <a name="IsCustomerFacingInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacingInput"></a>

```csharp
public string IsCustomerFacingInput { get; }
```

- *Type:* string

---

##### `IsInternetFacingInput`<sup>Optional</sup> <a name="IsInternetFacingInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacingInput"></a>

```csharp
public string IsInternetFacingInput { get; }
```

- *Type:* string

---

##### `IsRegulatedInput`<sup>Optional</sup> <a name="IsRegulatedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulatedInput"></a>

```csharp
public string IsRegulatedInput { get; }
```

- *Type:* string

---

##### `RegulatoryStandardsInput`<sup>Optional</sup> <a name="RegulatoryStandardsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandardsInput"></a>

```csharp
public string[] RegulatoryStandardsInput { get; }
```

- *Type:* string[]

---

##### `SensitiveDataTypesInput`<sup>Optional</sup> <a name="SensitiveDataTypesInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypesInput"></a>

```csharp
public string[] SensitiveDataTypesInput { get; }
```

- *Type:* string[]

---

##### `StoresDataInput`<sup>Optional</sup> <a name="StoresDataInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesDataInput"></a>

```csharp
public string StoresDataInput { get; }
```

- *Type:* string

---

##### `BusinessImpact`<sup>Required</sup> <a name="BusinessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpact"></a>

```csharp
public string BusinessImpact { get; }
```

- *Type:* string

---

##### `HasAuthentication`<sup>Required</sup> <a name="HasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthentication"></a>

```csharp
public string HasAuthentication { get; }
```

- *Type:* string

---

##### `HasExposedApi`<sup>Required</sup> <a name="HasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApi"></a>

```csharp
public string HasExposedApi { get; }
```

- *Type:* string

---

##### `IsActivelyDeveloped`<sup>Required</sup> <a name="IsActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDeveloped"></a>

```csharp
public string IsActivelyDeveloped { get; }
```

- *Type:* string

---

##### `IsCustomerFacing`<sup>Required</sup> <a name="IsCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacing"></a>

```csharp
public string IsCustomerFacing { get; }
```

- *Type:* string

---

##### `IsInternetFacing`<sup>Required</sup> <a name="IsInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacing"></a>

```csharp
public string IsInternetFacing { get; }
```

- *Type:* string

---

##### `IsRegulated`<sup>Required</sup> <a name="IsRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulated"></a>

```csharp
public string IsRegulated { get; }
```

- *Type:* string

---

##### `RegulatoryStandards`<sup>Required</sup> <a name="RegulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandards"></a>

```csharp
public string[] RegulatoryStandards { get; }
```

- *Type:* string[]

---

##### `SensitiveDataTypes`<sup>Required</sup> <a name="SensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypes"></a>

```csharp
public string[] SensitiveDataTypes { get; }
```

- *Type:* string[]

---

##### `StoresData`<sup>Required</sup> <a name="StoresData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesData"></a>

```csharp
public string StoresData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.internalValue"></a>

```csharp
public ProjectRiskProfile InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---



