# `data_wiz_organizations`

Refer to the Terraform Registory for docs: [`data_wiz_organizations`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/organizations).

# `dataWizOrganizations` Submodule <a name="`dataWizOrganizations` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizOrganizations <a name="DataWizOrganizations" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/organizations wiz_organizations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.Initializer"></a>

```typescript
import { dataWizOrganizations } from 'rhizo-co-terraform-provider-wiz'

new dataWizOrganizations.DataWizOrganizations(scope: Construct, id: string, config: DataWizOrganizationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig">DataWizOrganizationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig">DataWizOrganizationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.resetFirst">resetFirst</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFirst` <a name="resetFirst" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.resetFirst"></a>

```typescript
public resetFirst(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.isConstruct"></a>

```typescript
import { dataWizOrganizations } from 'rhizo-co-terraform-provider-wiz'

dataWizOrganizations.DataWizOrganizations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.isTerraformElement"></a>

```typescript
import { dataWizOrganizations } from 'rhizo-co-terraform-provider-wiz'

dataWizOrganizations.DataWizOrganizations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.isTerraformDataSource"></a>

```typescript
import { dataWizOrganizations } from 'rhizo-co-terraform-provider-wiz'

dataWizOrganizations.DataWizOrganizations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.organizations">organizations</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList">DataWizOrganizationsOrganizationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.search">search</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizations`<sup>Required</sup> <a name="organizations" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.organizations"></a>

```typescript
public readonly organizations: DataWizOrganizationsOrganizationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList">DataWizOrganizationsOrganizationsList</a>

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizOrganizationsConfig <a name="DataWizOrganizationsConfig" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.Initializer"></a>

```typescript
import { dataWizOrganizations } from 'rhizo-co-terraform-provider-wiz'

const dataWizOrganizationsConfig: dataWizOrganizations.DataWizOrganizationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.search">search</a></code> | <code>string</code> | Organization search string. Used to search all organization attributes. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.first">first</a></code> | <code>number</code> | How many matches to return. - Defaults to `500`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Organization search string. Used to search all organization attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/organizations#search DataWizOrganizations#search}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsConfig.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

How many matches to return. - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/organizations#first DataWizOrganizations#first}

---

### DataWizOrganizationsOrganizations <a name="DataWizOrganizationsOrganizations" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizations.Initializer"></a>

```typescript
import { dataWizOrganizations } from 'rhizo-co-terraform-provider-wiz'

const dataWizOrganizationsOrganizations: dataWizOrganizations.DataWizOrganizationsOrganizations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizOrganizationsOrganizationsList <a name="DataWizOrganizationsOrganizationsList" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.Initializer"></a>

```typescript
import { dataWizOrganizations } from 'rhizo-co-terraform-provider-wiz'

new dataWizOrganizations.DataWizOrganizationsOrganizationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.get"></a>

```typescript
public get(index: number): DataWizOrganizationsOrganizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataWizOrganizationsOrganizationsOutputReference <a name="DataWizOrganizationsOrganizationsOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.Initializer"></a>

```typescript
import { dataWizOrganizations } from 'rhizo-co-terraform-provider-wiz'

new dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizations">DataWizOrganizationsOrganizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataWizOrganizationsOrganizations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizOrganizations.DataWizOrganizationsOrganizations">DataWizOrganizationsOrganizations</a>

---



