# `cloudConfigRule` Submodule <a name="`cloudConfigRule` Submodule" id="rhizo-co-terraform-provider-wiz.cloudConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigRule <a name="CloudConfigRule" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule wiz_cloud_config_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer"></a>

```typescript
import { cloudConfigRule } from 'rhizo-co-terraform-provider-wiz'

new cloudConfigRule.CloudConfigRule(scope: Construct, id: string, config: CloudConfigRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig">CloudConfigRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig">CloudConfigRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers">putIacMatchers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetFunctionAsControl">resetFunctionAsControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetIacMatchers">resetIacMatchers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOpaPolicy">resetOpaPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetScopeAccountIds">resetScopeAccountIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIacMatchers` <a name="putIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers"></a>

```typescript
public putIacMatchers(value: IResolvable | CloudConfigRuleIacMatchers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFunctionAsControl` <a name="resetFunctionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetFunctionAsControl"></a>

```typescript
public resetFunctionAsControl(): void
```

##### `resetIacMatchers` <a name="resetIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetIacMatchers"></a>

```typescript
public resetIacMatchers(): void
```

##### `resetOpaPolicy` <a name="resetOpaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOpaPolicy"></a>

```typescript
public resetOpaPolicy(): void
```

##### `resetScopeAccountIds` <a name="resetScopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetScopeAccountIds"></a>

```typescript
public resetScopeAccountIds(): void
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudConfigRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct"></a>

```typescript
import { cloudConfigRule } from 'rhizo-co-terraform-provider-wiz'

cloudConfigRule.CloudConfigRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement"></a>

```typescript
import { cloudConfigRule } from 'rhizo-co-terraform-provider-wiz'

cloudConfigRule.CloudConfigRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource"></a>

```typescript
import { cloudConfigRule } from 'rhizo-co-terraform-provider-wiz'

cloudConfigRule.CloudConfigRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport"></a>

```typescript
import { cloudConfigRule } from 'rhizo-co-terraform-provider-wiz'

cloudConfigRule.CloudConfigRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudConfigRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudConfigRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchers">iacMatchers</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList">CloudConfigRuleIacMatchersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.securitySubCategories">securitySubCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControlInput">functionAsControlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchersInput">iacMatchersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicyInput">opaPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructionsInput">remediationInstructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIdsInput">scopeAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypesInput">targetNativeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControl">functionAsControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicy">opaPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructions">remediationInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIds">scopeAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypes">targetNativeTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iacMatchers`<sup>Required</sup> <a name="iacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchers"></a>

```typescript
public readonly iacMatchers: CloudConfigRuleIacMatchersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList">CloudConfigRuleIacMatchersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securitySubCategories`<sup>Required</sup> <a name="securitySubCategories" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.securitySubCategories"></a>

```typescript
public readonly securitySubCategories: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionAsControlInput`<sup>Optional</sup> <a name="functionAsControlInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControlInput"></a>

```typescript
public readonly functionAsControlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iacMatchersInput`<sup>Optional</sup> <a name="iacMatchersInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchersInput"></a>

```typescript
public readonly iacMatchersInput: IResolvable | CloudConfigRuleIacMatchers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opaPolicyInput`<sup>Optional</sup> <a name="opaPolicyInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicyInput"></a>

```typescript
public readonly opaPolicyInput: string;
```

- *Type:* string

---

##### `remediationInstructionsInput`<sup>Optional</sup> <a name="remediationInstructionsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructionsInput"></a>

```typescript
public readonly remediationInstructionsInput: string;
```

- *Type:* string

---

##### `scopeAccountIdsInput`<sup>Optional</sup> <a name="scopeAccountIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIdsInput"></a>

```typescript
public readonly scopeAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `targetNativeTypesInput`<sup>Optional</sup> <a name="targetNativeTypesInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypesInput"></a>

```typescript
public readonly targetNativeTypesInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionAsControl`<sup>Required</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControl"></a>

```typescript
public readonly functionAsControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opaPolicy`<sup>Required</sup> <a name="opaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicy"></a>

```typescript
public readonly opaPolicy: string;
```

- *Type:* string

---

##### `remediationInstructions`<sup>Required</sup> <a name="remediationInstructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructions"></a>

```typescript
public readonly remediationInstructions: string;
```

- *Type:* string

---

##### `scopeAccountIds`<sup>Required</sup> <a name="scopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIds"></a>

```typescript
public readonly scopeAccountIds: string[];
```

- *Type:* string[]

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `targetNativeTypes`<sup>Required</sup> <a name="targetNativeTypes" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypes"></a>

```typescript
public readonly targetNativeTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigRuleConfig <a name="CloudConfigRuleConfig" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.Initializer"></a>

```typescript
import { cloudConfigRule } from 'rhizo-co-terraform-provider-wiz'

const cloudConfigRuleConfig: cloudConfigRule.CloudConfigRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.description">description</a></code> | <code>string</code> | Detailed description for this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.name">name</a></code> | <code>string</code> | Name of this rule, as appeared in the UI in the portal. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.remediationInstructions">remediationInstructions</a></code> | <code>string</code> | Steps to mitigate the issue that match this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.targetNativeTypes">targetNativeTypes</a></code> | <code>string[]</code> | The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable/disable this rule.     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.functionAsControl">functionAsControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Make this rule function as a Control that creates Issues for new findings. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.iacMatchers">iacMatchers</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>[]</code> | iac_matchers block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.opaPolicy">opaPolicy</a></code> | <code>string</code> | OPA rego policy that defines this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.scopeAccountIds">scopeAccountIds</a></code> | <code>string[]</code> | Set the rule scope of cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.severity">severity</a></code> | <code>string</code> | Severity that will be set for findings of this rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Detailed description for this rule.

There is a defect in the API that makes this required; the description field cannot be nullified after one is defined, so we make it required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#description CloudConfigRule#description}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of this rule, as appeared in the UI in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#name CloudConfigRule#name}

---

##### `remediationInstructions`<sup>Required</sup> <a name="remediationInstructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.remediationInstructions"></a>

```typescript
public readonly remediationInstructions: string;
```

- *Type:* string

Steps to mitigate the issue that match this rule.

If possible, include sample commands to execute in your cloud provider's console. Markdown formatting is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#remediation_instructions CloudConfigRule#remediation_instructions}

---

##### `targetNativeTypes`<sup>Required</sup> <a name="targetNativeTypes" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.targetNativeTypes"></a>

```typescript
public readonly targetNativeTypes: string[];
```

- *Type:* string[]

The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#target_native_types CloudConfigRule#target_native_types}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable/disable this rule.     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#enabled CloudConfigRule#enabled}

---

##### `functionAsControl`<sup>Optional</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.functionAsControl"></a>

```typescript
public readonly functionAsControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Make this rule function as a Control that creates Issues for new findings.

By default only findings are created. If enabled=false, an error will be returned if this is set to true.
    - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#function_as_control CloudConfigRule#function_as_control}

---

##### `iacMatchers`<sup>Optional</sup> <a name="iacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.iacMatchers"></a>

```typescript
public readonly iacMatchers: IResolvable | CloudConfigRuleIacMatchers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>[]

iac_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#iac_matchers CloudConfigRule#iac_matchers}

---

##### `opaPolicy`<sup>Optional</sup> <a name="opaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.opaPolicy"></a>

```typescript
public readonly opaPolicy: string;
```

- *Type:* string

OPA rego policy that defines this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#opa_policy CloudConfigRule#opa_policy}

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="scopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.scopeAccountIds"></a>

```typescript
public readonly scopeAccountIds: string[];
```

- *Type:* string[]

Set the rule scope of cloud account IDs.

Select only subscriptions matching to the rule cloud provider. To change scope to 'all relevant resources' set to empty array. This must be the Wiz internal identifier for the account(uuid format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#scope_account_ids CloudConfigRule#scope_account_ids}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Severity that will be set for findings of this rule.

Allowed values: 
        - INFORMATIONAL
        - LOW
        - MEDIUM
        - HIGH
        - CRITICAL

    - Defaults to `MEDIUM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#severity CloudConfigRule#severity}

---

### CloudConfigRuleIacMatchers <a name="CloudConfigRuleIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.Initializer"></a>

```typescript
import { cloudConfigRule } from 'rhizo-co-terraform-provider-wiz'

const cloudConfigRuleIacMatchers: cloudConfigRule.CloudConfigRuleIacMatchers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.regoCode">regoCode</a></code> | <code>string</code> | Write code in the Rego query language. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.type">type</a></code> | <code>string</code> | The type of resource that will be evaluated by the Rego Code. |

---

##### `regoCode`<sup>Required</sup> <a name="regoCode" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.regoCode"></a>

```typescript
public readonly regoCode: string;
```

- *Type:* string

Write code in the Rego query language.

This code will be evaluated against the JSON representation of each resource of the selected Native Type to determine if it passes or fails the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#rego_code CloudConfigRule#rego_code}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of resource that will be evaluated by the Rego Code.

Allowed values: 
        - TERRAFORM
        - CLOUD_FORMATION
        - KUBERNETES
        - AZURE_RESOURCE_MANAGER
        - DOCKER_FILE
        - ADMISSION_CONTROLLER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#type CloudConfigRule#type}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudConfigRuleIacMatchersList <a name="CloudConfigRuleIacMatchersList" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer"></a>

```typescript
import { cloudConfigRule } from 'rhizo-co-terraform-provider-wiz'

new cloudConfigRule.CloudConfigRuleIacMatchersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get"></a>

```typescript
public get(index: number): CloudConfigRuleIacMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudConfigRuleIacMatchers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>[]

---


### CloudConfigRuleIacMatchersOutputReference <a name="CloudConfigRuleIacMatchersOutputReference" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer"></a>

```typescript
import { cloudConfigRule } from 'rhizo-co-terraform-provider-wiz'

new cloudConfigRule.CloudConfigRuleIacMatchersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCodeInput">regoCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCode">regoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regoCodeInput`<sup>Optional</sup> <a name="regoCodeInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCodeInput"></a>

```typescript
public readonly regoCodeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `regoCode`<sup>Required</sup> <a name="regoCode" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCode"></a>

```typescript
public readonly regoCode: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudConfigRuleIacMatchers;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>

---



