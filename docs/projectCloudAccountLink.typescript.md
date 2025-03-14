# `projectCloudAccountLink` Submodule <a name="`projectCloudAccountLink` Submodule" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectCloudAccountLinkA <a name="ProjectCloudAccountLinkA" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link wiz_project_cloud_account_link}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer"></a>

```typescript
import { projectCloudAccountLink } from 'rhizo-co-terraform-provider-wiz'

new projectCloudAccountLink.ProjectCloudAccountLinkA(scope: Construct, id: string, config: ProjectCloudAccountLinkAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig">ProjectCloudAccountLinkAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig">ProjectCloudAccountLinkAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetCloudAccountId">resetCloudAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetExternalCloudAccountId">resetExternalCloudAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetShared">resetShared</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceTags` <a name="putResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags"></a>

```typescript
public putResourceTags(value: IResolvable | ProjectCloudAccountLinkResourceTagsA[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>[]

---

##### `resetCloudAccountId` <a name="resetCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetCloudAccountId"></a>

```typescript
public resetCloudAccountId(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetExternalCloudAccountId` <a name="resetExternalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetExternalCloudAccountId"></a>

```typescript
public resetExternalCloudAccountId(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```

##### `resetShared` <a name="resetShared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetShared"></a>

```typescript
public resetShared(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectCloudAccountLinkA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct"></a>

```typescript
import { projectCloudAccountLink } from 'rhizo-co-terraform-provider-wiz'

projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement"></a>

```typescript
import { projectCloudAccountLink } from 'rhizo-co-terraform-provider-wiz'

projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource"></a>

```typescript
import { projectCloudAccountLink } from 'rhizo-co-terraform-provider-wiz'

projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport"></a>

```typescript
import { projectCloudAccountLink } from 'rhizo-co-terraform-provider-wiz'

projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectCloudAccountLinkA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectCloudAccountLinkA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectCloudAccountLinkA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectCloudAccountLinkA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTags">resourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList">ProjectCloudAccountLinkResourceTagsAList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountIdInput">cloudAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountIdInput">externalCloudAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTagsInput">resourceTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.sharedInput">sharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountId">cloudAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountId">externalCloudAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTags"></a>

```typescript
public readonly resourceTags: ProjectCloudAccountLinkResourceTagsAList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList">ProjectCloudAccountLinkResourceTagsAList</a>

---

##### `cloudAccountIdInput`<sup>Optional</sup> <a name="cloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountIdInput"></a>

```typescript
public readonly cloudAccountIdInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `externalCloudAccountIdInput`<sup>Optional</sup> <a name="externalCloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountIdInput"></a>

```typescript
public readonly externalCloudAccountIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: IResolvable | ProjectCloudAccountLinkResourceTagsA[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>[]

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.sharedInput"></a>

```typescript
public readonly sharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountId"></a>

```typescript
public readonly cloudAccountId: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `externalCloudAccountId`<sup>Required</sup> <a name="externalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountId"></a>

```typescript
public readonly externalCloudAccountId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCloudAccountLinkAConfig <a name="ProjectCloudAccountLinkAConfig" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.Initializer"></a>

```typescript
import { projectCloudAccountLink } from 'rhizo-co-terraform-provider-wiz'

const projectCloudAccountLinkAConfig: projectCloudAccountLink.ProjectCloudAccountLinkAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.projectId">projectId</a></code> | <code>string</code> | The Wiz internal identifier of the Wiz project to link the cloud account to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>string</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.environment">environment</a></code> | <code>string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.externalCloudAccountId">externalCloudAccountId</a></code> | <code>string</code> | The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceTags">resourceTags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>[]</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The Wiz internal identifier of the Wiz project to link the cloud account to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#project_id ProjectCloudAccountLinkA#project_id}

---

##### `cloudAccountId`<sup>Optional</sup> <a name="cloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.cloudAccountId"></a>

```typescript
public readonly cloudAccountId: string;
```

- *Type:* string

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#cloud_account_id ProjectCloudAccountLinkA#cloud_account_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.environment"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#environment ProjectCloudAccountLinkA#environment}

---

##### `externalCloudAccountId`<sup>Optional</sup> <a name="externalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.externalCloudAccountId"></a>

```typescript
public readonly externalCloudAccountId: string;
```

- *Type:* string

The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#external_cloud_account_id ProjectCloudAccountLinkA#external_cloud_account_id}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_groups ProjectCloudAccountLinkA#resource_groups}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceTags"></a>

```typescript
public readonly resourceTags: IResolvable | ProjectCloudAccountLinkResourceTagsA[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>[]

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_tags ProjectCloudAccountLinkA#resource_tags}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#shared ProjectCloudAccountLinkA#shared}

---

### ProjectCloudAccountLinkResourceTagsA <a name="ProjectCloudAccountLinkResourceTagsA" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.Initializer"></a>

```typescript
import { projectCloudAccountLink } from 'rhizo-co-terraform-provider-wiz'

const projectCloudAccountLinkResourceTagsA: projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#key ProjectCloudAccountLinkA#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#value ProjectCloudAccountLinkA#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#key ProjectCloudAccountLinkA#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#value ProjectCloudAccountLinkA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectCloudAccountLinkResourceTagsAList <a name="ProjectCloudAccountLinkResourceTagsAList" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer"></a>

```typescript
import { projectCloudAccountLink } from 'rhizo-co-terraform-provider-wiz'

new projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get"></a>

```typescript
public get(index: number): ProjectCloudAccountLinkResourceTagsAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectCloudAccountLinkResourceTagsA[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>[]

---


### ProjectCloudAccountLinkResourceTagsAOutputReference <a name="ProjectCloudAccountLinkResourceTagsAOutputReference" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer"></a>

```typescript
import { projectCloudAccountLink } from 'rhizo-co-terraform-provider-wiz'

new projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectCloudAccountLinkResourceTagsA;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>

---



