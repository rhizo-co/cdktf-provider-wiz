# `cicdScanPolicy` Submodule <a name="`cicdScanPolicy` Submodule" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CicdScanPolicy <a name="CicdScanPolicy" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy wiz_cicd_scan_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

new cicdScanPolicy.CicdScanPolicy(scope: Construct, id: string, config: CicdScanPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig">CicdScanPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig">CicdScanPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams">putDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams">putDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams">putIacParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskSecretsParams">resetDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskVulnerabilitiesParams">resetDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetIacParams">resetIacParams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiskSecretsParams` <a name="putDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams"></a>

```typescript
public putDiskSecretsParams(value: CicdScanPolicyDiskSecretsParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---

##### `putDiskVulnerabilitiesParams` <a name="putDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams"></a>

```typescript
public putDiskVulnerabilitiesParams(value: CicdScanPolicyDiskVulnerabilitiesParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---

##### `putIacParams` <a name="putIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams"></a>

```typescript
public putIacParams(value: CicdScanPolicyIacParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDiskSecretsParams` <a name="resetDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskSecretsParams"></a>

```typescript
public resetDiskSecretsParams(): void
```

##### `resetDiskVulnerabilitiesParams` <a name="resetDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskVulnerabilitiesParams"></a>

```typescript
public resetDiskVulnerabilitiesParams(): void
```

##### `resetIacParams` <a name="resetIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetIacParams"></a>

```typescript
public resetIacParams(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CicdScanPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

cicdScanPolicy.CicdScanPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

cicdScanPolicy.CicdScanPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

cicdScanPolicy.CicdScanPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

cicdScanPolicy.CicdScanPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CicdScanPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CicdScanPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CicdScanPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CicdScanPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.builtin">builtin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParams">diskSecretsParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference">CicdScanPolicyDiskSecretsParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParams">diskVulnerabilitiesParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference">CicdScanPolicyDiskVulnerabilitiesParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParams">iacParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference">CicdScanPolicyIacParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParamsInput">diskSecretsParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParamsInput">diskVulnerabilitiesParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParamsInput">iacParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `builtin`<sup>Required</sup> <a name="builtin" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.builtin"></a>

```typescript
public readonly builtin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `diskSecretsParams`<sup>Required</sup> <a name="diskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParams"></a>

```typescript
public readonly diskSecretsParams: CicdScanPolicyDiskSecretsParamsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference">CicdScanPolicyDiskSecretsParamsOutputReference</a>

---

##### `diskVulnerabilitiesParams`<sup>Required</sup> <a name="diskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParams"></a>

```typescript
public readonly diskVulnerabilitiesParams: CicdScanPolicyDiskVulnerabilitiesParamsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference">CicdScanPolicyDiskVulnerabilitiesParamsOutputReference</a>

---

##### `iacParams`<sup>Required</sup> <a name="iacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParams"></a>

```typescript
public readonly iacParams: CicdScanPolicyIacParamsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference">CicdScanPolicyIacParamsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskSecretsParamsInput`<sup>Optional</sup> <a name="diskSecretsParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParamsInput"></a>

```typescript
public readonly diskSecretsParamsInput: CicdScanPolicyDiskSecretsParams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---

##### `diskVulnerabilitiesParamsInput`<sup>Optional</sup> <a name="diskVulnerabilitiesParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParamsInput"></a>

```typescript
public readonly diskVulnerabilitiesParamsInput: CicdScanPolicyDiskVulnerabilitiesParams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---

##### `iacParamsInput`<sup>Optional</sup> <a name="iacParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParamsInput"></a>

```typescript
public readonly iacParamsInput: CicdScanPolicyIacParams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CicdScanPolicyConfig <a name="CicdScanPolicyConfig" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.Initializer"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

const cicdScanPolicyConfig: cicdScanPolicy.CicdScanPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.description">description</a></code> | <code>string</code> | Description of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskSecretsParams">diskSecretsParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | disk_secrets_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskVulnerabilitiesParams">diskVulnerabilitiesParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | disk_vulnerabilities_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.iacParams">iacParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | iac_params block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#name CicdScanPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#description CicdScanPolicy#description}

---

##### `diskSecretsParams`<sup>Optional</sup> <a name="diskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskSecretsParams"></a>

```typescript
public readonly diskSecretsParams: CicdScanPolicyDiskSecretsParams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

disk_secrets_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#disk_secrets_params CicdScanPolicy#disk_secrets_params}

---

##### `diskVulnerabilitiesParams`<sup>Optional</sup> <a name="diskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskVulnerabilitiesParams"></a>

```typescript
public readonly diskVulnerabilitiesParams: CicdScanPolicyDiskVulnerabilitiesParams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

disk_vulnerabilities_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#disk_vulnerabilities_params CicdScanPolicy#disk_vulnerabilities_params}

---

##### `iacParams`<sup>Optional</sup> <a name="iacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.iacParams"></a>

```typescript
public readonly iacParams: CicdScanPolicyIacParams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

iac_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#iac_params CicdScanPolicy#iac_params}

---

### CicdScanPolicyDiskSecretsParams <a name="CicdScanPolicyDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.Initializer"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

const cicdScanPolicyDiskSecretsParams: cicdScanPolicy.CicdScanPolicyDiskSecretsParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.countThreshold">countThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.pathAllowList">pathAllowList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}. |

---

##### `countThreshold`<sup>Required</sup> <a name="countThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.countThreshold"></a>

```typescript
public readonly countThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

##### `pathAllowList`<sup>Optional</sup> <a name="pathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.pathAllowList"></a>

```typescript
public readonly pathAllowList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}.

---

### CicdScanPolicyDiskVulnerabilitiesParams <a name="CicdScanPolicyDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.Initializer"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

const cicdScanPolicyDiskVulnerabilitiesParams: cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.ignoreUnfixed">ignoreUnfixed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageAllowList">packageAllowList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageCountThreshold">packageCountThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.severity">severity</a></code> | <code>string</code> | Severity. |

---

##### `ignoreUnfixed`<sup>Required</sup> <a name="ignoreUnfixed" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.ignoreUnfixed"></a>

```typescript
public readonly ignoreUnfixed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}.

---

##### `packageAllowList`<sup>Required</sup> <a name="packageAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageAllowList"></a>

```typescript
public readonly packageAllowList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}.

---

##### `packageCountThreshold`<sup>Required</sup> <a name="packageCountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageCountThreshold"></a>

```typescript
public readonly packageCountThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Severity.

Allowed values: 
        - INFORMATIONAL
        - LOW
        - MEDIUM
        - HIGH
        - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#severity CicdScanPolicy#severity}

---

### CicdScanPolicyIacParams <a name="CicdScanPolicyIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.Initializer"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

const cicdScanPolicyIacParams: cicdScanPolicy.CicdScanPolicyIacParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.countThreshold">countThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.severityThreshold">severityThreshold</a></code> | <code>string</code> | Severity threshold. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.builtinIgnoreTagsEnabled">builtinIgnoreTagsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.customIgnoreTags">customIgnoreTags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>[]</code> | custom_ignore_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.ignoredRules">ignoredRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.securityFrameworks">securityFrameworks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}. |

---

##### `countThreshold`<sup>Required</sup> <a name="countThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.countThreshold"></a>

```typescript
public readonly countThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

##### `severityThreshold`<sup>Required</sup> <a name="severityThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.severityThreshold"></a>

```typescript
public readonly severityThreshold: string;
```

- *Type:* string

Severity threshold.

Allowed values: 
        - INFORMATIONAL
        - LOW
        - MEDIUM
        - HIGH
        - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#severity_threshold CicdScanPolicy#severity_threshold}

---

##### `builtinIgnoreTagsEnabled`<sup>Optional</sup> <a name="builtinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.builtinIgnoreTagsEnabled"></a>

```typescript
public readonly builtinIgnoreTagsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}.

---

##### `customIgnoreTags`<sup>Optional</sup> <a name="customIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.customIgnoreTags"></a>

```typescript
public readonly customIgnoreTags: IResolvable | CicdScanPolicyIacParamsCustomIgnoreTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>[]

custom_ignore_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#custom_ignore_tags CicdScanPolicy#custom_ignore_tags}

---

##### `ignoredRules`<sup>Optional</sup> <a name="ignoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.ignoredRules"></a>

```typescript
public readonly ignoredRules: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}.

---

##### `securityFrameworks`<sup>Optional</sup> <a name="securityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.securityFrameworks"></a>

```typescript
public readonly securityFrameworks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}.

---

### CicdScanPolicyIacParamsCustomIgnoreTags <a name="CicdScanPolicyIacParamsCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.Initializer"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

const cicdScanPolicyIacParamsCustomIgnoreTags: cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#key CicdScanPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#value CicdScanPolicy#value}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ignoreAllRules">ignoreAllRules</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_all_rules CicdScanPolicy#ignore_all_rules}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ruleIds">ruleIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#rule_ids CicdScanPolicy#rule_ids}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#key CicdScanPolicy#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#value CicdScanPolicy#value}.

---

##### `ignoreAllRules`<sup>Optional</sup> <a name="ignoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ignoreAllRules"></a>

```typescript
public readonly ignoreAllRules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_all_rules CicdScanPolicy#ignore_all_rules}.

---

##### `ruleIds`<sup>Optional</sup> <a name="ruleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ruleIds"></a>

```typescript
public readonly ruleIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#rule_ids CicdScanPolicy#rule_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### CicdScanPolicyDiskSecretsParamsOutputReference <a name="CicdScanPolicyDiskSecretsParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

new cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resetPathAllowList">resetPathAllowList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathAllowList` <a name="resetPathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resetPathAllowList"></a>

```typescript
public resetPathAllowList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThresholdInput">countThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowListInput">pathAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThreshold">countThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowList">pathAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countThresholdInput`<sup>Optional</sup> <a name="countThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThresholdInput"></a>

```typescript
public readonly countThresholdInput: number;
```

- *Type:* number

---

##### `pathAllowListInput`<sup>Optional</sup> <a name="pathAllowListInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowListInput"></a>

```typescript
public readonly pathAllowListInput: string[];
```

- *Type:* string[]

---

##### `countThreshold`<sup>Required</sup> <a name="countThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThreshold"></a>

```typescript
public readonly countThreshold: number;
```

- *Type:* number

---

##### `pathAllowList`<sup>Required</sup> <a name="pathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowList"></a>

```typescript
public readonly pathAllowList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CicdScanPolicyDiskSecretsParams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---


### CicdScanPolicyDiskVulnerabilitiesParamsOutputReference <a name="CicdScanPolicyDiskVulnerabilitiesParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

new cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixedInput">ignoreUnfixedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowListInput">packageAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThresholdInput">packageCountThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixed">ignoreUnfixed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowList">packageAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThreshold">packageCountThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreUnfixedInput`<sup>Optional</sup> <a name="ignoreUnfixedInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixedInput"></a>

```typescript
public readonly ignoreUnfixedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packageAllowListInput`<sup>Optional</sup> <a name="packageAllowListInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowListInput"></a>

```typescript
public readonly packageAllowListInput: string[];
```

- *Type:* string[]

---

##### `packageCountThresholdInput`<sup>Optional</sup> <a name="packageCountThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThresholdInput"></a>

```typescript
public readonly packageCountThresholdInput: number;
```

- *Type:* number

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `ignoreUnfixed`<sup>Required</sup> <a name="ignoreUnfixed" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixed"></a>

```typescript
public readonly ignoreUnfixed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packageAllowList`<sup>Required</sup> <a name="packageAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowList"></a>

```typescript
public readonly packageAllowList: string[];
```

- *Type:* string[]

---

##### `packageCountThreshold`<sup>Required</sup> <a name="packageCountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThreshold"></a>

```typescript
public readonly packageCountThreshold: number;
```

- *Type:* number

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CicdScanPolicyDiskVulnerabilitiesParams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---


### CicdScanPolicyIacParamsCustomIgnoreTagsList <a name="CicdScanPolicyIacParamsCustomIgnoreTagsList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

new cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get"></a>

```typescript
public get(index: number): CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CicdScanPolicyIacParamsCustomIgnoreTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>[]

---


### CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference <a name="CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

new cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetIgnoreAllRules">resetIgnoreAllRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetRuleIds">resetRuleIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreAllRules` <a name="resetIgnoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetIgnoreAllRules"></a>

```typescript
public resetIgnoreAllRules(): void
```

##### `resetRuleIds` <a name="resetRuleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetRuleIds"></a>

```typescript
public resetRuleIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRulesInput">ignoreAllRulesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIdsInput">ruleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRules">ignoreAllRules</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIds">ruleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreAllRulesInput`<sup>Optional</sup> <a name="ignoreAllRulesInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRulesInput"></a>

```typescript
public readonly ignoreAllRulesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `ruleIdsInput`<sup>Optional</sup> <a name="ruleIdsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIdsInput"></a>

```typescript
public readonly ruleIdsInput: string[];
```

- *Type:* string[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ignoreAllRules`<sup>Required</sup> <a name="ignoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRules"></a>

```typescript
public readonly ignoreAllRules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `ruleIds`<sup>Required</sup> <a name="ruleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIds"></a>

```typescript
public readonly ruleIds: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CicdScanPolicyIacParamsCustomIgnoreTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>

---


### CicdScanPolicyIacParamsOutputReference <a name="CicdScanPolicyIacParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer"></a>

```typescript
import { cicdScanPolicy } from 'rhizo-co-terraform-provider-wiz'

new cicdScanPolicy.CicdScanPolicyIacParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags">putCustomIgnoreTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetBuiltinIgnoreTagsEnabled">resetBuiltinIgnoreTagsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetCustomIgnoreTags">resetCustomIgnoreTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetIgnoredRules">resetIgnoredRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetSecurityFrameworks">resetSecurityFrameworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomIgnoreTags` <a name="putCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags"></a>

```typescript
public putCustomIgnoreTags(value: IResolvable | CicdScanPolicyIacParamsCustomIgnoreTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>[]

---

##### `resetBuiltinIgnoreTagsEnabled` <a name="resetBuiltinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetBuiltinIgnoreTagsEnabled"></a>

```typescript
public resetBuiltinIgnoreTagsEnabled(): void
```

##### `resetCustomIgnoreTags` <a name="resetCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetCustomIgnoreTags"></a>

```typescript
public resetCustomIgnoreTags(): void
```

##### `resetIgnoredRules` <a name="resetIgnoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetIgnoredRules"></a>

```typescript
public resetIgnoredRules(): void
```

##### `resetSecurityFrameworks` <a name="resetSecurityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetSecurityFrameworks"></a>

```typescript
public resetSecurityFrameworks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTags">customIgnoreTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList">CicdScanPolicyIacParamsCustomIgnoreTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabledInput">builtinIgnoreTagsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThresholdInput">countThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTagsInput">customIgnoreTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRulesInput">ignoredRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworksInput">securityFrameworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThresholdInput">severityThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabled">builtinIgnoreTagsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThreshold">countThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRules">ignoredRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworks">securityFrameworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThreshold">severityThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customIgnoreTags`<sup>Required</sup> <a name="customIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTags"></a>

```typescript
public readonly customIgnoreTags: CicdScanPolicyIacParamsCustomIgnoreTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList">CicdScanPolicyIacParamsCustomIgnoreTagsList</a>

---

##### `builtinIgnoreTagsEnabledInput`<sup>Optional</sup> <a name="builtinIgnoreTagsEnabledInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabledInput"></a>

```typescript
public readonly builtinIgnoreTagsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `countThresholdInput`<sup>Optional</sup> <a name="countThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThresholdInput"></a>

```typescript
public readonly countThresholdInput: number;
```

- *Type:* number

---

##### `customIgnoreTagsInput`<sup>Optional</sup> <a name="customIgnoreTagsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTagsInput"></a>

```typescript
public readonly customIgnoreTagsInput: IResolvable | CicdScanPolicyIacParamsCustomIgnoreTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>[]

---

##### `ignoredRulesInput`<sup>Optional</sup> <a name="ignoredRulesInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRulesInput"></a>

```typescript
public readonly ignoredRulesInput: string[];
```

- *Type:* string[]

---

##### `securityFrameworksInput`<sup>Optional</sup> <a name="securityFrameworksInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworksInput"></a>

```typescript
public readonly securityFrameworksInput: string[];
```

- *Type:* string[]

---

##### `severityThresholdInput`<sup>Optional</sup> <a name="severityThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThresholdInput"></a>

```typescript
public readonly severityThresholdInput: string;
```

- *Type:* string

---

##### `builtinIgnoreTagsEnabled`<sup>Required</sup> <a name="builtinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabled"></a>

```typescript
public readonly builtinIgnoreTagsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `countThreshold`<sup>Required</sup> <a name="countThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThreshold"></a>

```typescript
public readonly countThreshold: number;
```

- *Type:* number

---

##### `ignoredRules`<sup>Required</sup> <a name="ignoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRules"></a>

```typescript
public readonly ignoredRules: string[];
```

- *Type:* string[]

---

##### `securityFrameworks`<sup>Required</sup> <a name="securityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworks"></a>

```typescript
public readonly securityFrameworks: string[];
```

- *Type:* string[]

---

##### `severityThreshold`<sup>Required</sup> <a name="severityThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThreshold"></a>

```typescript
public readonly severityThreshold: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CicdScanPolicyIacParams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---



