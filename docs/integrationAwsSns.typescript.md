# `integrationAwsSns` Submodule <a name="`integrationAwsSns` Submodule" id="rhizo-co-terraform-provider-wiz.integrationAwsSns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsSns <a name="IntegrationAwsSns" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns wiz_integration_aws_sns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer"></a>

```typescript
import { integrationAwsSns } from 'rhizo-co-terraform-provider-wiz'

new integrationAwsSns.IntegrationAwsSns(scope: Construct, id: string, config: IntegrationAwsSnsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig">IntegrationAwsSnsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig">IntegrationAwsSnsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsConnectorId">resetAwsSnsConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsCustomerRoleArn">resetAwsSnsCustomerRoleArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsTopicArn">resetAwsSnsTopicArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAwsSnsConnectorId` <a name="resetAwsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsConnectorId"></a>

```typescript
public resetAwsSnsConnectorId(): void
```

##### `resetAwsSnsCustomerRoleArn` <a name="resetAwsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsCustomerRoleArn"></a>

```typescript
public resetAwsSnsCustomerRoleArn(): void
```

##### `resetAwsSnsTopicArn` <a name="resetAwsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsTopicArn"></a>

```typescript
public resetAwsSnsTopicArn(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetScope"></a>

```typescript
public resetScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAwsSns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct"></a>

```typescript
import { integrationAwsSns } from 'rhizo-co-terraform-provider-wiz'

integrationAwsSns.IntegrationAwsSns.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement"></a>

```typescript
import { integrationAwsSns } from 'rhizo-co-terraform-provider-wiz'

integrationAwsSns.IntegrationAwsSns.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource"></a>

```typescript
import { integrationAwsSns } from 'rhizo-co-terraform-provider-wiz'

integrationAwsSns.IntegrationAwsSns.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport"></a>

```typescript
import { integrationAwsSns } from 'rhizo-co-terraform-provider-wiz'

integrationAwsSns.IntegrationAwsSns.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationAwsSns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationAwsSns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationAwsSns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsSns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethodInput">awsSnsAccessMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorIdInput">awsSnsConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArnInput">awsSnsCustomerRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArnInput">awsSnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethod">awsSnsAccessMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorId">awsSnsConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArn">awsSnsCustomerRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `awsSnsAccessMethodInput`<sup>Optional</sup> <a name="awsSnsAccessMethodInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethodInput"></a>

```typescript
public readonly awsSnsAccessMethodInput: string;
```

- *Type:* string

---

##### `awsSnsConnectorIdInput`<sup>Optional</sup> <a name="awsSnsConnectorIdInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorIdInput"></a>

```typescript
public readonly awsSnsConnectorIdInput: string;
```

- *Type:* string

---

##### `awsSnsCustomerRoleArnInput`<sup>Optional</sup> <a name="awsSnsCustomerRoleArnInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArnInput"></a>

```typescript
public readonly awsSnsCustomerRoleArnInput: string;
```

- *Type:* string

---

##### `awsSnsTopicArnInput`<sup>Optional</sup> <a name="awsSnsTopicArnInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArnInput"></a>

```typescript
public readonly awsSnsTopicArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `awsSnsAccessMethod`<sup>Required</sup> <a name="awsSnsAccessMethod" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethod"></a>

```typescript
public readonly awsSnsAccessMethod: string;
```

- *Type:* string

---

##### `awsSnsConnectorId`<sup>Required</sup> <a name="awsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorId"></a>

```typescript
public readonly awsSnsConnectorId: string;
```

- *Type:* string

---

##### `awsSnsCustomerRoleArn`<sup>Required</sup> <a name="awsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArn"></a>

```typescript
public readonly awsSnsCustomerRoleArn: string;
```

- *Type:* string

---

##### `awsSnsTopicArn`<sup>Required</sup> <a name="awsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArn"></a>

```typescript
public readonly awsSnsTopicArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsSnsConfig <a name="IntegrationAwsSnsConfig" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.Initializer"></a>

```typescript
import { integrationAwsSns } from 'rhizo-co-terraform-provider-wiz'

const integrationAwsSnsConfig: integrationAwsSns.IntegrationAwsSnsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsAccessMethod">awsSnsAccessMethod</a></code> | <code>string</code> | The access method this integration should use. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.name">name</a></code> | <code>string</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsConnectorId">awsSnsConnectorId</a></code> | <code>string</code> | Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsCustomerRoleArn">awsSnsCustomerRoleArn</a></code> | <code>string</code> | Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>string</code> | The SNS Topic Arn. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.projectId">projectId</a></code> | <code>string</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.scope">scope</a></code> | <code>string</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsSnsAccessMethod`<sup>Required</sup> <a name="awsSnsAccessMethod" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsAccessMethod"></a>

```typescript
public readonly awsSnsAccessMethod: string;
```

- *Type:* string

The access method this integration should use.

Allowed values: 
        - ASSUME_CONNECTOR_ROLE
        - ASSUME_SPECIFIED_ROLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_access_method IntegrationAwsSns#aws_sns_access_method}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#name IntegrationAwsSns#name}

---

##### `awsSnsConnectorId`<sup>Optional</sup> <a name="awsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsConnectorId"></a>

```typescript
public readonly awsSnsConnectorId: string;
```

- *Type:* string

Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken.

Conflicts with `[aws_sns_customer_role_arn]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_connector_id IntegrationAwsSns#aws_sns_connector_id}

---

##### `awsSnsCustomerRoleArn`<sup>Optional</sup> <a name="awsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsCustomerRoleArn"></a>

```typescript
public readonly awsSnsCustomerRoleArn: string;
```

- *Type:* string

Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID).

Conflicts with `[aws_sns_connector_id]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_customer_role_arn IntegrationAwsSns#aws_sns_customer_role_arn}

---

##### `awsSnsTopicArn`<sup>Optional</sup> <a name="awsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsTopicArn"></a>

```typescript
public readonly awsSnsTopicArn: string;
```

- *Type:* string

The SNS Topic Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_topic_arn IntegrationAwsSns#aws_sns_topic_arn}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#project_id IntegrationAwsSns#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project.

Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles. 
    - Allowed values: 
        - Selected Project
        - All Resources
        - All Resources, Restrict this Integration to global roles only

    - Defaults to `All Resources, Restrict this Integration to global roles only`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#scope IntegrationAwsSns#scope}

---



