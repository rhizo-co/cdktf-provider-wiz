# `dataDatabricksAwsCrossaccountPolicy` Submodule <a name="`dataDatabricksAwsCrossaccountPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsCrossaccountPolicy <a name="DataDatabricksAwsCrossaccountPolicy" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/d/aws_crossaccount_policy databricks_aws_crossaccount_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer"></a>

```typescript
import { dataDatabricksAwsCrossaccountPolicy } from '@cdktf/provider-databricks'

new dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy(scope: Construct, id: string, config?: DataDatabricksAwsCrossaccountPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig">DataDatabricksAwsCrossaccountPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig">DataDatabricksAwsCrossaccountPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetPassRoles">resetPassRoles</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassRoles` <a name="resetPassRoles" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetPassRoles"></a>

```typescript
public resetPassRoles(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isConstruct"></a>

```typescript
import { dataDatabricksAwsCrossaccountPolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformElement"></a>

```typescript
import { dataDatabricksAwsCrossaccountPolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAwsCrossaccountPolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.json">json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRolesInput">passRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRoles">passRoles</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passRolesInput`<sup>Optional</sup> <a name="passRolesInput" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRolesInput"></a>

```typescript
public readonly passRolesInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `passRoles`<sup>Required</sup> <a name="passRoles" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRoles"></a>

```typescript
public readonly passRoles: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsCrossaccountPolicyConfig <a name="DataDatabricksAwsCrossaccountPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.Initializer"></a>

```typescript
import { dataDatabricksAwsCrossaccountPolicy } from '@cdktf/provider-databricks'

const dataDatabricksAwsCrossaccountPolicyConfig: dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_crossaccount_policy#id DataDatabricksAwsCrossaccountPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.passRoles">passRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_crossaccount_policy#pass_roles DataDatabricksAwsCrossaccountPolicy#pass_roles}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_crossaccount_policy#id DataDatabricksAwsCrossaccountPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passRoles`<sup>Optional</sup> <a name="passRoles" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.passRoles"></a>

```typescript
public readonly passRoles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_crossaccount_policy#pass_roles DataDatabricksAwsCrossaccountPolicy#pass_roles}.

---


