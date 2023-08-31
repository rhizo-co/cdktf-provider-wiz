# `wiz_security_framework`

Refer to the Terraform Registory for docs: [`wiz_security_framework`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework).

# `securityFramework` Submodule <a name="`securityFramework` Submodule" id="rhizo-co-terraform-provider-wiz.securityFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFramework <a name="SecurityFramework" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework wiz_security_framework}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer"></a>

```typescript
import { securityFramework } from 'rhizo-co-terraform-provider-wiz'

new securityFramework.SecurityFramework(scope: Construct, id: string, config: SecurityFrameworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig">SecurityFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig">SecurityFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.putCategory">putCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCategory` <a name="putCategory" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.putCategory"></a>

```typescript
public putCategory(value: IResolvable | SecurityFrameworkCategory[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.putCategory.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>[]

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isConstruct"></a>

```typescript
import { securityFramework } from 'rhizo-co-terraform-provider-wiz'

securityFramework.SecurityFramework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformElement"></a>

```typescript
import { securityFramework } from 'rhizo-co-terraform-provider-wiz'

securityFramework.SecurityFramework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformResource"></a>

```typescript
import { securityFramework } from 'rhizo-co-terraform-provider-wiz'

securityFramework.SecurityFramework.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.category">category</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList">SecurityFrameworkCategoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.categoryInput">categoryInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.category"></a>

```typescript
public readonly category: SecurityFrameworkCategoryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList">SecurityFrameworkCategoryList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.categoryInput"></a>

```typescript
public readonly categoryInput: IResolvable | SecurityFrameworkCategory[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFrameworkCategory <a name="SecurityFrameworkCategory" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.Initializer"></a>

```typescript
import { securityFramework } from 'rhizo-co-terraform-provider-wiz'

const securityFrameworkCategory: securityFramework.SecurityFrameworkCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.name">name</a></code> | <code>string</code> | Name fo the security category. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.subCategory">subCategory</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>[]</code> | sub_category block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.description">description</a></code> | <code>string</code> | Description of the security category. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name fo the security category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#name SecurityFramework#name}

---

##### `subCategory`<sup>Required</sup> <a name="subCategory" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.subCategory"></a>

```typescript
public readonly subCategory: IResolvable | SecurityFrameworkCategorySubCategory[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>[]

sub_category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#sub_category SecurityFramework#sub_category}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the security category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#description SecurityFramework#description}

---

### SecurityFrameworkCategorySubCategory <a name="SecurityFrameworkCategorySubCategory" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory.Initializer"></a>

```typescript
import { securityFramework } from 'rhizo-co-terraform-provider-wiz'

const securityFrameworkCategorySubCategory: securityFramework.SecurityFrameworkCategorySubCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory.property.title">title</a></code> | <code>string</code> | Title of the security subcategory. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory.property.description">description</a></code> | <code>string</code> | Description of the security subcategory. |

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title of the security subcategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#title SecurityFramework#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the security subcategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#description SecurityFramework#description}

---

### SecurityFrameworkConfig <a name="SecurityFrameworkConfig" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.Initializer"></a>

```typescript
import { securityFramework } from 'rhizo-co-terraform-provider-wiz'

const securityFrameworkConfig: securityFramework.SecurityFrameworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.category">category</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>[]</code> | category block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.name">name</a></code> | <code>string</code> | Name of the security framework. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.description">description</a></code> | <code>string</code> | Description of the security framework. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable the security framework. - Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.category"></a>

```typescript
public readonly category: IResolvable | SecurityFrameworkCategory[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>[]

category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#category SecurityFramework#category}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the security framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#name SecurityFramework#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the security framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#description SecurityFramework#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable the security framework. - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#enabled SecurityFramework#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFrameworkCategoryList <a name="SecurityFrameworkCategoryList" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer"></a>

```typescript
import { securityFramework } from 'rhizo-co-terraform-provider-wiz'

new securityFramework.SecurityFrameworkCategoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.get"></a>

```typescript
public get(index: number): SecurityFrameworkCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFrameworkCategory[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>[]

---


### SecurityFrameworkCategoryOutputReference <a name="SecurityFrameworkCategoryOutputReference" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer"></a>

```typescript
import { securityFramework } from 'rhizo-co-terraform-provider-wiz'

new securityFramework.SecurityFrameworkCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.putSubCategory">putSubCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubCategory` <a name="putSubCategory" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.putSubCategory"></a>

```typescript
public putSubCategory(value: IResolvable | SecurityFrameworkCategorySubCategory[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.putSubCategory.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>[]

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.subCategory">subCategory</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList">SecurityFrameworkCategorySubCategoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.subCategoryInput">subCategoryInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subCategory`<sup>Required</sup> <a name="subCategory" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.subCategory"></a>

```typescript
public readonly subCategory: SecurityFrameworkCategorySubCategoryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList">SecurityFrameworkCategorySubCategoryList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subCategoryInput`<sup>Optional</sup> <a name="subCategoryInput" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.subCategoryInput"></a>

```typescript
public readonly subCategoryInput: IResolvable | SecurityFrameworkCategorySubCategory[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFrameworkCategory;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>

---


### SecurityFrameworkCategorySubCategoryList <a name="SecurityFrameworkCategorySubCategoryList" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer"></a>

```typescript
import { securityFramework } from 'rhizo-co-terraform-provider-wiz'

new securityFramework.SecurityFrameworkCategorySubCategoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.get"></a>

```typescript
public get(index: number): SecurityFrameworkCategorySubCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFrameworkCategorySubCategory[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>[]

---


### SecurityFrameworkCategorySubCategoryOutputReference <a name="SecurityFrameworkCategorySubCategoryOutputReference" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer"></a>

```typescript
import { securityFramework } from 'rhizo-co-terraform-provider-wiz'

new securityFramework.SecurityFrameworkCategorySubCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFrameworkCategorySubCategory;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>

---



