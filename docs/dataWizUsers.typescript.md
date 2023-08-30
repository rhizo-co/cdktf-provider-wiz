# `data_wiz_users`

Refer to the Terraform Registory for docs: [`data_wiz_users`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users).

# `dataWizUsers` Submodule <a name="`dataWizUsers` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizUsers <a name="DataWizUsers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users wiz_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

new dataWizUsers.DataWizUsers(scope: Construct, id: string, config?: DataWizUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig">DataWizUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig">DataWizUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetAuthenticationSource">resetAuthenticationSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetMaxPages">resetMaxPages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putUsers` <a name="putUsers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.putUsers"></a>

```typescript
public putUsers(value: IResolvable | DataWizUsersUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.putUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>[]

---

##### `resetAuthenticationSource` <a name="resetAuthenticationSource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetAuthenticationSource"></a>

```typescript
public resetAuthenticationSource(): void
```

##### `resetFirst` <a name="resetFirst" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetMaxPages` <a name="resetMaxPages" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetMaxPages"></a>

```typescript
public resetMaxPages(): void
```

##### `resetRoles` <a name="resetRoles" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetRoles"></a>

```typescript
public resetRoles(): void
```

##### `resetSearch` <a name="resetSearch" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetUsers` <a name="resetUsers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetUsers"></a>

```typescript
public resetUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isConstruct"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

dataWizUsers.DataWizUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformElement"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

dataWizUsers.DataWizUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformDataSource"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

dataWizUsers.DataWizUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.users">users</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList">DataWizUsersUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.authenticationSourceInput">authenticationSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.maxPagesInput">maxPagesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.usersInput">usersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.authenticationSource">authenticationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.maxPages">maxPages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.search">search</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `users`<sup>Required</sup> <a name="users" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.users"></a>

```typescript
public readonly users: DataWizUsersUsersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList">DataWizUsersUsersList</a>

---

##### `authenticationSourceInput`<sup>Optional</sup> <a name="authenticationSourceInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.authenticationSourceInput"></a>

```typescript
public readonly authenticationSourceInput: string;
```

- *Type:* string

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `maxPagesInput`<sup>Optional</sup> <a name="maxPagesInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.maxPagesInput"></a>

```typescript
public readonly maxPagesInput: number;
```

- *Type:* number

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.usersInput"></a>

```typescript
public readonly usersInput: IResolvable | DataWizUsersUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>[]

---

##### `authenticationSource`<sup>Required</sup> <a name="authenticationSource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.authenticationSource"></a>

```typescript
public readonly authenticationSource: string;
```

- *Type:* string

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `maxPages`<sup>Required</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.maxPages"></a>

```typescript
public readonly maxPages: number;
```

- *Type:* number

---

##### `roles`<sup>Required</sup> <a name="roles" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizUsersConfig <a name="DataWizUsersConfig" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.Initializer"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

const dataWizUsersConfig: dataWizUsers.DataWizUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.authenticationSource">authenticationSource</a></code> | <code>string</code> | Authentication Source. - Allowed values:      - LEGACY     - MODERN. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.first">first</a></code> | <code>number</code> | How many matches to return, maximum is `100` is per page. - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.maxPages">maxPages</a></code> | <code>number</code> | How many pages to return. 0 means all pages. - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.roles">roles</a></code> | <code>string[]</code> | List of roles to filter by. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.search">search</a></code> | <code>string</code> | Free text search. Specify empty string to return all users. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.users">users</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>[]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticationSource`<sup>Optional</sup> <a name="authenticationSource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.authenticationSource"></a>

```typescript
public readonly authenticationSource: string;
```

- *Type:* string

Authentication Source. - Allowed values:      - LEGACY     - MODERN.

Defaults to `{{`MODERN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#authentication_source DataWizUsers#authentication_source}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

How many matches to return, maximum is `100` is per page. - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#first DataWizUsers#first}

---

##### `maxPages`<sup>Optional</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.maxPages"></a>

```typescript
public readonly maxPages: number;
```

- *Type:* number

How many pages to return. 0 means all pages. - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#max_pages DataWizUsers#max_pages}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

List of roles to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#roles DataWizUsers#roles}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Free text search. Specify empty string to return all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#search DataWizUsers#search}

---

##### `users`<sup>Optional</sup> <a name="users" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.users"></a>

```typescript
public readonly users: IResolvable | DataWizUsersUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>[]

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#users DataWizUsers#users}

---

### DataWizUsersUsers <a name="DataWizUsersUsers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.Initializer"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

const dataWizUsersUsers: dataWizUsers.DataWizUsersUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.effectiveRole">effectiveRole</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>[]</code> | effective_role block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.email">email</a></code> | <code>string</code> | User email address. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.id">id</a></code> | <code>string</code> | Internal Wiz ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.identityProvider">identityProvider</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>[]</code> | identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.identityProviderType">identityProviderType</a></code> | <code>string</code> | Identity Provider Type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.isSuspended">isSuspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | If user is suspended. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.name">name</a></code> | <code>string</code> | User email name. |

---

##### `effectiveRole`<sup>Optional</sup> <a name="effectiveRole" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.effectiveRole"></a>

```typescript
public readonly effectiveRole: IResolvable | DataWizUsersUsersEffectiveRole[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>[]

effective_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#effective_role DataWizUsers#effective_role}

---

##### `email`<sup>Optional</sup> <a name="email" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

User email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#email DataWizUsers#email}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Internal Wiz ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#id DataWizUsers#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProvider`<sup>Optional</sup> <a name="identityProvider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.identityProvider"></a>

```typescript
public readonly identityProvider: IResolvable | DataWizUsersUsersIdentityProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>[]

identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#identity_provider DataWizUsers#identity_provider}

---

##### `identityProviderType`<sup>Optional</sup> <a name="identityProviderType" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.identityProviderType"></a>

```typescript
public readonly identityProviderType: string;
```

- *Type:* string

Identity Provider Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#identity_provider_type DataWizUsers#identity_provider_type}

---

##### `isSuspended`<sup>Optional</sup> <a name="isSuspended" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.isSuspended"></a>

```typescript
public readonly isSuspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If user is suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#is_suspended DataWizUsers#is_suspended}

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

User email name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#name DataWizUsers#name}

---

### DataWizUsersUsersEffectiveRole <a name="DataWizUsersUsersEffectiveRole" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.Initializer"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

const dataWizUsersUsersEffectiveRole: dataWizUsers.DataWizUsersUsersEffectiveRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.id">id</a></code> | <code>string</code> | The role internal identifier. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.name">name</a></code> | <code>string</code> | The role name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.scopes">scopes</a></code> | <code>string[]</code> | Permission Scopes. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The role internal identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#id DataWizUsers#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#name DataWizUsers#name}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Permission Scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#scopes DataWizUsers#scopes}

---

### DataWizUsersUsersIdentityProvider <a name="DataWizUsersUsersIdentityProvider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider.Initializer"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

const dataWizUsersUsersIdentityProvider: dataWizUsers.DataWizUsersUsersIdentityProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider.property.name">name</a></code> | <code>string</code> | The identity provider name. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The identity provider name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#name DataWizUsers#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizUsersUsersEffectiveRoleList <a name="DataWizUsersUsersEffectiveRoleList" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

new dataWizUsers.DataWizUsersUsersEffectiveRoleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.get"></a>

```typescript
public get(index: number): DataWizUsersUsersEffectiveRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataWizUsersUsersEffectiveRole[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>[]

---


### DataWizUsersUsersEffectiveRoleOutputReference <a name="DataWizUsersUsersEffectiveRoleOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

new dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetScopes` <a name="resetScopes" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataWizUsersUsersEffectiveRole;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>

---


### DataWizUsersUsersIdentityProviderList <a name="DataWizUsersUsersIdentityProviderList" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

new dataWizUsers.DataWizUsersUsersIdentityProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.get"></a>

```typescript
public get(index: number): DataWizUsersUsersIdentityProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataWizUsersUsersIdentityProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>[]

---


### DataWizUsersUsersIdentityProviderOutputReference <a name="DataWizUsersUsersIdentityProviderOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

new dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataWizUsersUsersIdentityProvider;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>

---


### DataWizUsersUsersList <a name="DataWizUsersUsersList" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

new dataWizUsers.DataWizUsersUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.get"></a>

```typescript
public get(index: number): DataWizUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataWizUsersUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>[]

---


### DataWizUsersUsersOutputReference <a name="DataWizUsersUsersOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer"></a>

```typescript
import { dataWizUsers } from 'rhizo-co-terraform-provider-wiz'

new dataWizUsers.DataWizUsersUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putEffectiveRole">putEffectiveRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putIdentityProvider">putIdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetEffectiveRole">resetEffectiveRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIdentityProvider">resetIdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIdentityProviderType">resetIdentityProviderType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIsSuspended">resetIsSuspended</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEffectiveRole` <a name="putEffectiveRole" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putEffectiveRole"></a>

```typescript
public putEffectiveRole(value: IResolvable | DataWizUsersUsersEffectiveRole[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putEffectiveRole.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>[]

---

##### `putIdentityProvider` <a name="putIdentityProvider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putIdentityProvider"></a>

```typescript
public putIdentityProvider(value: IResolvable | DataWizUsersUsersIdentityProvider[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putIdentityProvider.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>[]

---

##### `resetEffectiveRole` <a name="resetEffectiveRole" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetEffectiveRole"></a>

```typescript
public resetEffectiveRole(): void
```

##### `resetEmail` <a name="resetEmail" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityProvider` <a name="resetIdentityProvider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIdentityProvider"></a>

```typescript
public resetIdentityProvider(): void
```

##### `resetIdentityProviderType` <a name="resetIdentityProviderType" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIdentityProviderType"></a>

```typescript
public resetIdentityProviderType(): void
```

##### `resetIsSuspended` <a name="resetIsSuspended" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIsSuspended"></a>

```typescript
public resetIsSuspended(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.effectiveRole">effectiveRole</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList">DataWizUsersUsersEffectiveRoleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProvider">identityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList">DataWizUsersUsersIdentityProviderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.effectiveRoleInput">effectiveRoleInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderInput">identityProviderInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderTypeInput">identityProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.isSuspendedInput">isSuspendedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderType">identityProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.isSuspended">isSuspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveRole`<sup>Required</sup> <a name="effectiveRole" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.effectiveRole"></a>

```typescript
public readonly effectiveRole: DataWizUsersUsersEffectiveRoleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList">DataWizUsersUsersEffectiveRoleList</a>

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProvider"></a>

```typescript
public readonly identityProvider: DataWizUsersUsersIdentityProviderList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList">DataWizUsersUsersIdentityProviderList</a>

---

##### `effectiveRoleInput`<sup>Optional</sup> <a name="effectiveRoleInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.effectiveRoleInput"></a>

```typescript
public readonly effectiveRoleInput: IResolvable | DataWizUsersUsersEffectiveRole[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>[]

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `identityProviderInput`<sup>Optional</sup> <a name="identityProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderInput"></a>

```typescript
public readonly identityProviderInput: IResolvable | DataWizUsersUsersIdentityProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>[]

---

##### `identityProviderTypeInput`<sup>Optional</sup> <a name="identityProviderTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderTypeInput"></a>

```typescript
public readonly identityProviderTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isSuspendedInput`<sup>Optional</sup> <a name="isSuspendedInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.isSuspendedInput"></a>

```typescript
public readonly isSuspendedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderType`<sup>Required</sup> <a name="identityProviderType" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderType"></a>

```typescript
public readonly identityProviderType: string;
```

- *Type:* string

---

##### `isSuspended`<sup>Required</sup> <a name="isSuspended" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.isSuspended"></a>

```typescript
public readonly isSuspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataWizUsersUsers;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>

---



