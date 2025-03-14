# `project` Submodule <a name="`project` Submodule" id="rhizo-co-terraform-provider-wiz.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="rhizo-co-terraform-provider-wiz.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project wiz_project}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.Project(scope: Construct, id: string, config: ProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig">ProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink">putCloudAccountLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink">putCloudOrganizationLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink">putKubernetesClusterLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile">putRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetBusinessUnit">resetBusinessUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetCloudAccountLink">resetCloudAccountLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetCloudOrganizationLink">resetCloudOrganizationLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetIdentifiers">resetIdentifiers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetIsFolder">resetIsFolder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetKubernetesClusterLink">resetKubernetesClusterLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetParentProjectId">resetParentProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetProjectOwners">resetProjectOwners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetRiskProfile">resetRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetSecurityChampions">resetSecurityChampions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.project.Project.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.project.Project.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.project.Project.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.project.Project.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.project.Project.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.project.Project.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.Project.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.project.Project.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.project.Project.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.Project.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.project.Project.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudAccountLink` <a name="putCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink"></a>

```typescript
public putCloudAccountLink(value: IResolvable | ProjectCloudAccountLink[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>[]

---

##### `putCloudOrganizationLink` <a name="putCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink"></a>

```typescript
public putCloudOrganizationLink(value: IResolvable | ProjectCloudOrganizationLink[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>[]

---

##### `putKubernetesClusterLink` <a name="putKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink"></a>

```typescript
public putKubernetesClusterLink(value: IResolvable | ProjectKubernetesClusterLink[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>[]

---

##### `putRiskProfile` <a name="putRiskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile"></a>

```typescript
public putRiskProfile(value: ProjectRiskProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---

##### `resetArchived` <a name="resetArchived" id="rhizo-co-terraform-provider-wiz.project.Project.resetArchived"></a>

```typescript
public resetArchived(): void
```

##### `resetBusinessUnit` <a name="resetBusinessUnit" id="rhizo-co-terraform-provider-wiz.project.Project.resetBusinessUnit"></a>

```typescript
public resetBusinessUnit(): void
```

##### `resetCloudAccountLink` <a name="resetCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetCloudAccountLink"></a>

```typescript
public resetCloudAccountLink(): void
```

##### `resetCloudOrganizationLink` <a name="resetCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetCloudOrganizationLink"></a>

```typescript
public resetCloudOrganizationLink(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.project.Project.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIdentifiers` <a name="resetIdentifiers" id="rhizo-co-terraform-provider-wiz.project.Project.resetIdentifiers"></a>

```typescript
public resetIdentifiers(): void
```

##### `resetIsFolder` <a name="resetIsFolder" id="rhizo-co-terraform-provider-wiz.project.Project.resetIsFolder"></a>

```typescript
public resetIsFolder(): void
```

##### `resetKubernetesClusterLink` <a name="resetKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetKubernetesClusterLink"></a>

```typescript
public resetKubernetesClusterLink(): void
```

##### `resetParentProjectId` <a name="resetParentProjectId" id="rhizo-co-terraform-provider-wiz.project.Project.resetParentProjectId"></a>

```typescript
public resetParentProjectId(): void
```

##### `resetProjectOwners` <a name="resetProjectOwners" id="rhizo-co-terraform-provider-wiz.project.Project.resetProjectOwners"></a>

```typescript
public resetProjectOwners(): void
```

##### `resetRiskProfile` <a name="resetRiskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.resetRiskProfile"></a>

```typescript
public resetRiskProfile(): void
```

##### `resetSecurityChampions` <a name="resetSecurityChampions" id="rhizo-co-terraform-provider-wiz.project.Project.resetSecurityChampions"></a>

```typescript
public resetSecurityChampions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.project.Project.isConstruct"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

project.Project.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.project.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

project.Project.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

project.Project.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

project.Project.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Project to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLink">cloudAccountLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList">ProjectCloudAccountLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLink">cloudOrganizationLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList">ProjectCloudOrganizationLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLink">kubernetesClusterLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList">ProjectKubernetesClusterLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.riskProfile">riskProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference">ProjectRiskProfileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.archivedInput">archivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.businessUnitInput">businessUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLinkInput">cloudAccountLinkInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLinkInput">cloudOrganizationLinkInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.identifiersInput">identifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.isFolderInput">isFolderInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLinkInput">kubernetesClusterLinkInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectIdInput">parentProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.projectOwnersInput">projectOwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.riskProfileInput">riskProfileInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.securityChampionsInput">securityChampionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.businessUnit">businessUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.identifiers">identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.isFolder">isFolder</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectId">parentProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.projectOwners">projectOwners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.securityChampions">securityChampions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.project.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.project.Project.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.Project.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.project.Project.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.project.Project.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.project.Project.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.project.Project.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.project.Project.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.project.Project.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.Project.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.project.Project.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudAccountLink`<sup>Required</sup> <a name="cloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLink"></a>

```typescript
public readonly cloudAccountLink: ProjectCloudAccountLinkList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList">ProjectCloudAccountLinkList</a>

---

##### `cloudOrganizationLink`<sup>Required</sup> <a name="cloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLink"></a>

```typescript
public readonly cloudOrganizationLink: ProjectCloudOrganizationLinkList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList">ProjectCloudOrganizationLinkList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesClusterLink`<sup>Required</sup> <a name="kubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLink"></a>

```typescript
public readonly kubernetesClusterLink: ProjectKubernetesClusterLinkList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList">ProjectKubernetesClusterLinkList</a>

---

##### `riskProfile`<sup>Required</sup> <a name="riskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.property.riskProfile"></a>

```typescript
public readonly riskProfile: ProjectRiskProfileOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference">ProjectRiskProfileOutputReference</a>

---

##### `slug`<sup>Required</sup> <a name="slug" id="rhizo-co-terraform-provider-wiz.project.Project.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.archivedInput"></a>

```typescript
public readonly archivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `businessUnitInput`<sup>Optional</sup> <a name="businessUnitInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.businessUnitInput"></a>

```typescript
public readonly businessUnitInput: string;
```

- *Type:* string

---

##### `cloudAccountLinkInput`<sup>Optional</sup> <a name="cloudAccountLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLinkInput"></a>

```typescript
public readonly cloudAccountLinkInput: IResolvable | ProjectCloudAccountLink[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>[]

---

##### `cloudOrganizationLinkInput`<sup>Optional</sup> <a name="cloudOrganizationLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLinkInput"></a>

```typescript
public readonly cloudOrganizationLinkInput: IResolvable | ProjectCloudOrganizationLink[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.identifiersInput"></a>

```typescript
public readonly identifiersInput: string[];
```

- *Type:* string[]

---

##### `isFolderInput`<sup>Optional</sup> <a name="isFolderInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.isFolderInput"></a>

```typescript
public readonly isFolderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kubernetesClusterLinkInput`<sup>Optional</sup> <a name="kubernetesClusterLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLinkInput"></a>

```typescript
public readonly kubernetesClusterLinkInput: IResolvable | ProjectKubernetesClusterLink[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentProjectIdInput`<sup>Optional</sup> <a name="parentProjectIdInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectIdInput"></a>

```typescript
public readonly parentProjectIdInput: string;
```

- *Type:* string

---

##### `projectOwnersInput`<sup>Optional</sup> <a name="projectOwnersInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.projectOwnersInput"></a>

```typescript
public readonly projectOwnersInput: string[];
```

- *Type:* string[]

---

##### `riskProfileInput`<sup>Optional</sup> <a name="riskProfileInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.riskProfileInput"></a>

```typescript
public readonly riskProfileInput: ProjectRiskProfile;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---

##### `securityChampionsInput`<sup>Optional</sup> <a name="securityChampionsInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.securityChampionsInput"></a>

```typescript
public readonly securityChampionsInput: string[];
```

- *Type:* string[]

---

##### `archived`<sup>Required</sup> <a name="archived" id="rhizo-co-terraform-provider-wiz.project.Project.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `businessUnit`<sup>Required</sup> <a name="businessUnit" id="rhizo-co-terraform-provider-wiz.project.Project.property.businessUnit"></a>

```typescript
public readonly businessUnit: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.project.Project.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="rhizo-co-terraform-provider-wiz.project.Project.property.identifiers"></a>

```typescript
public readonly identifiers: string[];
```

- *Type:* string[]

---

##### `isFolder`<sup>Required</sup> <a name="isFolder" id="rhizo-co-terraform-provider-wiz.project.Project.property.isFolder"></a>

```typescript
public readonly isFolder: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.project.Project.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentProjectId`<sup>Required</sup> <a name="parentProjectId" id="rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectId"></a>

```typescript
public readonly parentProjectId: string;
```

- *Type:* string

---

##### `projectOwners`<sup>Required</sup> <a name="projectOwners" id="rhizo-co-terraform-provider-wiz.project.Project.property.projectOwners"></a>

```typescript
public readonly projectOwners: string[];
```

- *Type:* string[]

---

##### `securityChampions`<sup>Required</sup> <a name="securityChampions" id="rhizo-co-terraform-provider-wiz.project.Project.property.securityChampions"></a>

```typescript
public readonly securityChampions: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.project.Project.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCloudAccountLink <a name="ProjectCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

const projectCloudAccountLink: project.ProjectCloudAccountLink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.cloudAccountId">cloudAccountId</a></code> | <code>string</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.environment">environment</a></code> | <code>string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceTags">resourceTags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>[]</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.cloudAccountId"></a>

```typescript
public readonly cloudAccountId: string;
```

- *Type:* string

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_account_id Project#cloud_account_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment.

Allowed values: 
        - PRODUCTION
        - STAGING
        - DEVELOPMENT
        - TESTING
        - OTHER

    - Defaults to `PRODUCTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_groups Project#resource_groups}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceTags"></a>

```typescript
public readonly resourceTags: IResolvable | ProjectCloudAccountLinkResourceTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>[]

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_tags Project#resource_tags}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}

---

### ProjectCloudAccountLinkResourceTags <a name="ProjectCloudAccountLinkResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

const projectCloudAccountLinkResourceTags: project.ProjectCloudAccountLinkResourceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}.

---

### ProjectCloudOrganizationLink <a name="ProjectCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

const projectCloudOrganizationLink: project.ProjectCloudOrganizationLink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.cloudOrganization">cloudOrganization</a></code> | <code>string</code> | The Wiz internal identifier for the Organizational Unit. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.environment">environment</a></code> | <code>string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Please provide a list of strings for filtering by resource groups. `shared` must be true to define resource_groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceTags">resourceTags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>[]</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `cloudOrganization`<sup>Required</sup> <a name="cloudOrganization" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.cloudOrganization"></a>

```typescript
public readonly cloudOrganization: string;
```

- *Type:* string

The Wiz internal identifier for the Organizational Unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_organization Project#cloud_organization}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment.

Allowed values: 
        - PRODUCTION
        - STAGING
        - DEVELOPMENT
        - TESTING
        - OTHER

    - Defaults to `PRODUCTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Please provide a list of strings for filtering by resource groups. `shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_groups Project#resource_groups}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceTags"></a>

```typescript
public readonly resourceTags: IResolvable | ProjectCloudOrganizationLinkResourceTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>[]

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_tags Project#resource_tags}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}

---

### ProjectCloudOrganizationLinkResourceTags <a name="ProjectCloudOrganizationLinkResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

const projectCloudOrganizationLinkResourceTags: project.ProjectCloudOrganizationLinkResourceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}.

---

### ProjectConfig <a name="ProjectConfig" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

const projectConfig: project.ProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.name">name</a></code> | <code>string</code> | The project name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the project is archived/inactive     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.businessUnit">businessUnit</a></code> | <code>string</code> | The business unit to which the project belongs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudAccountLink">cloudAccountLink</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>[]</code> | cloud_account_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudOrganizationLink">cloudOrganizationLink</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>[]</code> | cloud_organization_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.description">description</a></code> | <code>string</code> | The project description. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.identifiers">identifiers</a></code> | <code>string[]</code> | Identifiers for the project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.isFolder">isFolder</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the project is a folder.     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.kubernetesClusterLink">kubernetesClusterLink</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>[]</code> | kubernetes_cluster_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.parentProjectId">parentProjectId</a></code> | <code>string</code> | The parent project ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.projectOwners">projectOwners</a></code> | <code>string[]</code> | A list of project owner IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.riskProfile">riskProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | risk_profile block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.securityChampions">securityChampions</a></code> | <code>string[]</code> | A list of security champions IDs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The project name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#name Project#name}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the project is archived/inactive     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#archived Project#archived}

---

##### `businessUnit`<sup>Optional</sup> <a name="businessUnit" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.businessUnit"></a>

```typescript
public readonly businessUnit: string;
```

- *Type:* string

The business unit to which the project belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#business_unit Project#business_unit}

---

##### `cloudAccountLink`<sup>Optional</sup> <a name="cloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudAccountLink"></a>

```typescript
public readonly cloudAccountLink: IResolvable | ProjectCloudAccountLink[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>[]

cloud_account_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_account_link Project#cloud_account_link}

---

##### `cloudOrganizationLink`<sup>Optional</sup> <a name="cloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudOrganizationLink"></a>

```typescript
public readonly cloudOrganizationLink: IResolvable | ProjectCloudOrganizationLink[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>[]

cloud_organization_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_organization_link Project#cloud_organization_link}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The project description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#description Project#description}

---

##### `identifiers`<sup>Optional</sup> <a name="identifiers" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.identifiers"></a>

```typescript
public readonly identifiers: string[];
```

- *Type:* string[]

Identifiers for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#identifiers Project#identifiers}

---

##### `isFolder`<sup>Optional</sup> <a name="isFolder" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.isFolder"></a>

```typescript
public readonly isFolder: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the project is a folder.     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_folder Project#is_folder}

---

##### `kubernetesClusterLink`<sup>Optional</sup> <a name="kubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.kubernetesClusterLink"></a>

```typescript
public readonly kubernetesClusterLink: IResolvable | ProjectKubernetesClusterLink[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>[]

kubernetes_cluster_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#kubernetes_cluster_link Project#kubernetes_cluster_link}

---

##### `parentProjectId`<sup>Optional</sup> <a name="parentProjectId" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.parentProjectId"></a>

```typescript
public readonly parentProjectId: string;
```

- *Type:* string

The parent project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#parent_project_id Project#parent_project_id}

---

##### `projectOwners`<sup>Optional</sup> <a name="projectOwners" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.projectOwners"></a>

```typescript
public readonly projectOwners: string[];
```

- *Type:* string[]

A list of project owner IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#project_owners Project#project_owners}

---

##### `riskProfile`<sup>Optional</sup> <a name="riskProfile" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.riskProfile"></a>

```typescript
public readonly riskProfile: ProjectRiskProfile;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

risk_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#risk_profile Project#risk_profile}

---

##### `securityChampions`<sup>Optional</sup> <a name="securityChampions" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.securityChampions"></a>

```typescript
public readonly securityChampions: string[];
```

- *Type:* string[]

A list of security champions IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#security_champions Project#security_champions}

---

### ProjectKubernetesClusterLink <a name="ProjectKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

const projectKubernetesClusterLink: project.ProjectKubernetesClusterLink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.kubernetesCluster">kubernetesCluster</a></code> | <code>string</code> | The Wiz internal identifier for the kubernetes cluster. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.environment">environment</a></code> | <code>string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.namespaces">namespaces</a></code> | <code>string[]</code> | The kubernetes namespaces to link. `shared` must be set to `true` if namespaces are set. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Mark the kubernetes cluster as shared, in which case, specific namespaces can be linked. |

---

##### `kubernetesCluster`<sup>Required</sup> <a name="kubernetesCluster" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.kubernetesCluster"></a>

```typescript
public readonly kubernetesCluster: string;
```

- *Type:* string

The Wiz internal identifier for the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#kubernetes_cluster Project#kubernetes_cluster}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment.

Allowed values: 
        - PRODUCTION
        - STAGING
        - DEVELOPMENT
        - TESTING
        - OTHER

    - Defaults to `PRODUCTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

The kubernetes namespaces to link. `shared` must be set to `true` if namespaces are set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#namespaces Project#namespaces}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Mark the kubernetes cluster as shared, in which case, specific namespaces can be linked.

This needs to be set to `true` if `namespaces` are set.
    - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}

---

### ProjectRiskProfile <a name="ProjectRiskProfile" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

const projectRiskProfile: project.ProjectRiskProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.businessImpact">businessImpact</a></code> | <code>string</code> | Business impact. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasAuthentication">hasAuthentication</a></code> | <code>string</code> | Does the project require authentication? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasExposedApi">hasExposedApi</a></code> | <code>string</code> | Does the project expose an API? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isActivelyDeveloped">isActivelyDeveloped</a></code> | <code>string</code> | Is the project under active development? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isCustomerFacing">isCustomerFacing</a></code> | <code>string</code> | Is the project customer facing? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isInternetFacing">isInternetFacing</a></code> | <code>string</code> | Is the project Internet facing? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isRegulated">isRegulated</a></code> | <code>string</code> | Is the project regulated? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.regulatoryStandards">regulatoryStandards</a></code> | <code>string[]</code> | Regulatory Standards. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.sensitiveDataTypes">sensitiveDataTypes</a></code> | <code>string[]</code> | Sensitive Data Types. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.storesData">storesData</a></code> | <code>string</code> | Does the project store data? |

---

##### `businessImpact`<sup>Optional</sup> <a name="businessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.businessImpact"></a>

```typescript
public readonly businessImpact: string;
```

- *Type:* string

Business impact.

Allowed values: 
        - LBI
        - MBI
        - HBI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#business_impact Project#business_impact}

---

##### `hasAuthentication`<sup>Optional</sup> <a name="hasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasAuthentication"></a>

```typescript
public readonly hasAuthentication: string;
```

- *Type:* string

Does the project require authentication?

Allowed values: 
        - YES
        - NO
        - UNKNOWN

    - Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#has_authentication Project#has_authentication}

---

##### `hasExposedApi`<sup>Optional</sup> <a name="hasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasExposedApi"></a>

```typescript
public readonly hasExposedApi: string;
```

- *Type:* string

Does the project expose an API?

Allowed values: 
        - YES
        - NO
        - UNKNOWN

    - Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#has_exposed_api Project#has_exposed_api}

---

##### `isActivelyDeveloped`<sup>Optional</sup> <a name="isActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isActivelyDeveloped"></a>

```typescript
public readonly isActivelyDeveloped: string;
```

- *Type:* string

Is the project under active development?

Allowed values: 
        - YES
        - NO
        - UNKNOWN

    - Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_actively_developed Project#is_actively_developed}

---

##### `isCustomerFacing`<sup>Optional</sup> <a name="isCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isCustomerFacing"></a>

```typescript
public readonly isCustomerFacing: string;
```

- *Type:* string

Is the project customer facing?

Allowed values: 
        - YES
        - NO
        - UNKNOWN

    - Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_customer_facing Project#is_customer_facing}

---

##### `isInternetFacing`<sup>Optional</sup> <a name="isInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isInternetFacing"></a>

```typescript
public readonly isInternetFacing: string;
```

- *Type:* string

Is the project Internet facing?

Allowed values: 
        - YES
        - NO
        - UNKNOWN

    - Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_internet_facing Project#is_internet_facing}

---

##### `isRegulated`<sup>Optional</sup> <a name="isRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isRegulated"></a>

```typescript
public readonly isRegulated: string;
```

- *Type:* string

Is the project regulated?

Allowed values: 
        - YES
        - NO
        - UNKNOWN

    - Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_regulated Project#is_regulated}

---

##### `regulatoryStandards`<sup>Optional</sup> <a name="regulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.regulatoryStandards"></a>

```typescript
public readonly regulatoryStandards: string[];
```

- *Type:* string[]

Regulatory Standards.

Allowed values: 
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

##### `sensitiveDataTypes`<sup>Optional</sup> <a name="sensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.sensitiveDataTypes"></a>

```typescript
public readonly sensitiveDataTypes: string[];
```

- *Type:* string[]

Sensitive Data Types.

Allowed values: 
        - CLASSIFIED
        - HEALTH
        - PII
        - PCI
        - FINANCIAL
        - CUSTOMER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#sensitive_data_types Project#sensitive_data_types}

---

##### `storesData`<sup>Optional</sup> <a name="storesData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.storesData"></a>

```typescript
public readonly storesData: string;
```

- *Type:* string

Does the project store data?

Allowed values: 
        - YES
        - NO
        - UNKNOWN

    - Defaults to `UNKNOWN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#stores_data Project#stores_data}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectCloudAccountLinkList <a name="ProjectCloudAccountLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.ProjectCloudAccountLinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get"></a>

```typescript
public get(index: number): ProjectCloudAccountLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectCloudAccountLink[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>[]

---


### ProjectCloudAccountLinkOutputReference <a name="ProjectCloudAccountLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.ProjectCloudAccountLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetShared">resetShared</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceTags` <a name="putResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags"></a>

```typescript
public putResourceTags(value: IResolvable | ProjectCloudAccountLinkResourceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>[]

---

##### `resetEnvironment` <a name="resetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```

##### `resetShared` <a name="resetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetShared"></a>

```typescript
public resetShared(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTags">resourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList">ProjectCloudAccountLinkResourceTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountIdInput">cloudAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTagsInput">resourceTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.sharedInput">sharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountId">cloudAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTags"></a>

```typescript
public readonly resourceTags: ProjectCloudAccountLinkResourceTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList">ProjectCloudAccountLinkResourceTagsList</a>

---

##### `cloudAccountIdInput`<sup>Optional</sup> <a name="cloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountIdInput"></a>

```typescript
public readonly cloudAccountIdInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: IResolvable | ProjectCloudAccountLinkResourceTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>[]

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.sharedInput"></a>

```typescript
public readonly sharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountId"></a>

```typescript
public readonly cloudAccountId: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectCloudAccountLink;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>

---


### ProjectCloudAccountLinkResourceTagsList <a name="ProjectCloudAccountLinkResourceTagsList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.ProjectCloudAccountLinkResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get"></a>

```typescript
public get(index: number): ProjectCloudAccountLinkResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectCloudAccountLinkResourceTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>[]

---


### ProjectCloudAccountLinkResourceTagsOutputReference <a name="ProjectCloudAccountLinkResourceTagsOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.ProjectCloudAccountLinkResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectCloudAccountLinkResourceTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>

---


### ProjectCloudOrganizationLinkList <a name="ProjectCloudOrganizationLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.ProjectCloudOrganizationLinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get"></a>

```typescript
public get(index: number): ProjectCloudOrganizationLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectCloudOrganizationLink[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>[]

---


### ProjectCloudOrganizationLinkOutputReference <a name="ProjectCloudOrganizationLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.ProjectCloudOrganizationLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetShared">resetShared</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceTags` <a name="putResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags"></a>

```typescript
public putResourceTags(value: IResolvable | ProjectCloudOrganizationLinkResourceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>[]

---

##### `resetEnvironment` <a name="resetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```

##### `resetShared` <a name="resetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetShared"></a>

```typescript
public resetShared(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTags">resourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList">ProjectCloudOrganizationLinkResourceTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganizationInput">cloudOrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTagsInput">resourceTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.sharedInput">sharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganization">cloudOrganization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTags"></a>

```typescript
public readonly resourceTags: ProjectCloudOrganizationLinkResourceTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList">ProjectCloudOrganizationLinkResourceTagsList</a>

---

##### `cloudOrganizationInput`<sup>Optional</sup> <a name="cloudOrganizationInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganizationInput"></a>

```typescript
public readonly cloudOrganizationInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: IResolvable | ProjectCloudOrganizationLinkResourceTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>[]

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.sharedInput"></a>

```typescript
public readonly sharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudOrganization`<sup>Required</sup> <a name="cloudOrganization" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganization"></a>

```typescript
public readonly cloudOrganization: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectCloudOrganizationLink;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>

---


### ProjectCloudOrganizationLinkResourceTagsList <a name="ProjectCloudOrganizationLinkResourceTagsList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.ProjectCloudOrganizationLinkResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get"></a>

```typescript
public get(index: number): ProjectCloudOrganizationLinkResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectCloudOrganizationLinkResourceTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>[]

---


### ProjectCloudOrganizationLinkResourceTagsOutputReference <a name="ProjectCloudOrganizationLinkResourceTagsOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.ProjectCloudOrganizationLinkResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectCloudOrganizationLinkResourceTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>

---


### ProjectKubernetesClusterLinkList <a name="ProjectKubernetesClusterLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.ProjectKubernetesClusterLinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get"></a>

```typescript
public get(index: number): ProjectKubernetesClusterLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectKubernetesClusterLink[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>[]

---


### ProjectKubernetesClusterLinkOutputReference <a name="ProjectKubernetesClusterLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.ProjectKubernetesClusterLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetNamespaces">resetNamespaces</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetShared">resetShared</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetNamespaces` <a name="resetNamespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetNamespaces"></a>

```typescript
public resetNamespaces(): void
```

##### `resetShared` <a name="resetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetShared"></a>

```typescript
public resetShared(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesClusterInput">kubernetesClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.sharedInput">sharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesCluster">kubernetesCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespaces">namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `kubernetesClusterInput`<sup>Optional</sup> <a name="kubernetesClusterInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesClusterInput"></a>

```typescript
public readonly kubernetesClusterInput: string;
```

- *Type:* string

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespacesInput"></a>

```typescript
public readonly namespacesInput: string[];
```

- *Type:* string[]

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.sharedInput"></a>

```typescript
public readonly sharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `kubernetesCluster`<sup>Required</sup> <a name="kubernetesCluster" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesCluster"></a>

```typescript
public readonly kubernetesCluster: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectKubernetesClusterLink;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>

---


### ProjectRiskProfileOutputReference <a name="ProjectRiskProfileOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer"></a>

```typescript
import { project } from 'rhizo-co-terraform-provider-wiz'

new project.ProjectRiskProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetBusinessImpact">resetBusinessImpact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasAuthentication">resetHasAuthentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasExposedApi">resetHasExposedApi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsActivelyDeveloped">resetIsActivelyDeveloped</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsCustomerFacing">resetIsCustomerFacing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsInternetFacing">resetIsInternetFacing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsRegulated">resetIsRegulated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetRegulatoryStandards">resetRegulatoryStandards</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetSensitiveDataTypes">resetSensitiveDataTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetStoresData">resetStoresData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBusinessImpact` <a name="resetBusinessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetBusinessImpact"></a>

```typescript
public resetBusinessImpact(): void
```

##### `resetHasAuthentication` <a name="resetHasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasAuthentication"></a>

```typescript
public resetHasAuthentication(): void
```

##### `resetHasExposedApi` <a name="resetHasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasExposedApi"></a>

```typescript
public resetHasExposedApi(): void
```

##### `resetIsActivelyDeveloped` <a name="resetIsActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsActivelyDeveloped"></a>

```typescript
public resetIsActivelyDeveloped(): void
```

##### `resetIsCustomerFacing` <a name="resetIsCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsCustomerFacing"></a>

```typescript
public resetIsCustomerFacing(): void
```

##### `resetIsInternetFacing` <a name="resetIsInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsInternetFacing"></a>

```typescript
public resetIsInternetFacing(): void
```

##### `resetIsRegulated` <a name="resetIsRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsRegulated"></a>

```typescript
public resetIsRegulated(): void
```

##### `resetRegulatoryStandards` <a name="resetRegulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetRegulatoryStandards"></a>

```typescript
public resetRegulatoryStandards(): void
```

##### `resetSensitiveDataTypes` <a name="resetSensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetSensitiveDataTypes"></a>

```typescript
public resetSensitiveDataTypes(): void
```

##### `resetStoresData` <a name="resetStoresData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetStoresData"></a>

```typescript
public resetStoresData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpactInput">businessImpactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthenticationInput">hasAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApiInput">hasExposedApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDevelopedInput">isActivelyDevelopedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacingInput">isCustomerFacingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacingInput">isInternetFacingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulatedInput">isRegulatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandardsInput">regulatoryStandardsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypesInput">sensitiveDataTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesDataInput">storesDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpact">businessImpact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthentication">hasAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApi">hasExposedApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDeveloped">isActivelyDeveloped</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacing">isCustomerFacing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacing">isInternetFacing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulated">isRegulated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandards">regulatoryStandards</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypes">sensitiveDataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesData">storesData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `businessImpactInput`<sup>Optional</sup> <a name="businessImpactInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpactInput"></a>

```typescript
public readonly businessImpactInput: string;
```

- *Type:* string

---

##### `hasAuthenticationInput`<sup>Optional</sup> <a name="hasAuthenticationInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthenticationInput"></a>

```typescript
public readonly hasAuthenticationInput: string;
```

- *Type:* string

---

##### `hasExposedApiInput`<sup>Optional</sup> <a name="hasExposedApiInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApiInput"></a>

```typescript
public readonly hasExposedApiInput: string;
```

- *Type:* string

---

##### `isActivelyDevelopedInput`<sup>Optional</sup> <a name="isActivelyDevelopedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDevelopedInput"></a>

```typescript
public readonly isActivelyDevelopedInput: string;
```

- *Type:* string

---

##### `isCustomerFacingInput`<sup>Optional</sup> <a name="isCustomerFacingInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacingInput"></a>

```typescript
public readonly isCustomerFacingInput: string;
```

- *Type:* string

---

##### `isInternetFacingInput`<sup>Optional</sup> <a name="isInternetFacingInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacingInput"></a>

```typescript
public readonly isInternetFacingInput: string;
```

- *Type:* string

---

##### `isRegulatedInput`<sup>Optional</sup> <a name="isRegulatedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulatedInput"></a>

```typescript
public readonly isRegulatedInput: string;
```

- *Type:* string

---

##### `regulatoryStandardsInput`<sup>Optional</sup> <a name="regulatoryStandardsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandardsInput"></a>

```typescript
public readonly regulatoryStandardsInput: string[];
```

- *Type:* string[]

---

##### `sensitiveDataTypesInput`<sup>Optional</sup> <a name="sensitiveDataTypesInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypesInput"></a>

```typescript
public readonly sensitiveDataTypesInput: string[];
```

- *Type:* string[]

---

##### `storesDataInput`<sup>Optional</sup> <a name="storesDataInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesDataInput"></a>

```typescript
public readonly storesDataInput: string;
```

- *Type:* string

---

##### `businessImpact`<sup>Required</sup> <a name="businessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpact"></a>

```typescript
public readonly businessImpact: string;
```

- *Type:* string

---

##### `hasAuthentication`<sup>Required</sup> <a name="hasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthentication"></a>

```typescript
public readonly hasAuthentication: string;
```

- *Type:* string

---

##### `hasExposedApi`<sup>Required</sup> <a name="hasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApi"></a>

```typescript
public readonly hasExposedApi: string;
```

- *Type:* string

---

##### `isActivelyDeveloped`<sup>Required</sup> <a name="isActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDeveloped"></a>

```typescript
public readonly isActivelyDeveloped: string;
```

- *Type:* string

---

##### `isCustomerFacing`<sup>Required</sup> <a name="isCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacing"></a>

```typescript
public readonly isCustomerFacing: string;
```

- *Type:* string

---

##### `isInternetFacing`<sup>Required</sup> <a name="isInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacing"></a>

```typescript
public readonly isInternetFacing: string;
```

- *Type:* string

---

##### `isRegulated`<sup>Required</sup> <a name="isRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulated"></a>

```typescript
public readonly isRegulated: string;
```

- *Type:* string

---

##### `regulatoryStandards`<sup>Required</sup> <a name="regulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandards"></a>

```typescript
public readonly regulatoryStandards: string[];
```

- *Type:* string[]

---

##### `sensitiveDataTypes`<sup>Required</sup> <a name="sensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypes"></a>

```typescript
public readonly sensitiveDataTypes: string[];
```

- *Type:* string[]

---

##### `storesData`<sup>Required</sup> <a name="storesData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesData"></a>

```typescript
public readonly storesData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectRiskProfile;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---



