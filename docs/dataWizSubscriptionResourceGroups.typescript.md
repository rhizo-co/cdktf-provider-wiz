# `data_wiz_subscription_resource_groups`

Refer to the Terraform Registory for docs: [`data_wiz_subscription_resource_groups`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups).

# `dataWizSubscriptionResourceGroups` Submodule <a name="`dataWizSubscriptionResourceGroups` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizSubscriptionResourceGroups <a name="DataWizSubscriptionResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups wiz_subscription_resource_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer"></a>

```typescript
import { dataWizSubscriptionResourceGroups } from 'rhizo-co-terraform-provider-wiz'

new dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups(scope: Construct, id: string, config?: DataWizSubscriptionResourceGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig">DataWizSubscriptionResourceGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig">DataWizSubscriptionResourceGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetRelationshipType">resetRelationshipType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFirst` <a name="resetFirst" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetRelationshipType` <a name="resetRelationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetRelationshipType"></a>

```typescript
public resetRelationshipType(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct"></a>

```typescript
import { dataWizSubscriptionResourceGroups } from 'rhizo-co-terraform-provider-wiz'

dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement"></a>

```typescript
import { dataWizSubscriptionResourceGroups } from 'rhizo-co-terraform-provider-wiz'

dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource"></a>

```typescript
import { dataWizSubscriptionResourceGroups } from 'rhizo-co-terraform-provider-wiz'

dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.resourceGroups">resourceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList">DataWizSubscriptionResourceGroupsResourceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipTypeInput">relationshipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipType">relationshipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: DataWizSubscriptionResourceGroupsResourceGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList">DataWizSubscriptionResourceGroupsResourceGroupsList</a>

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `relationshipTypeInput`<sup>Optional</sup> <a name="relationshipTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipTypeInput"></a>

```typescript
public readonly relationshipTypeInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `relationshipType`<sup>Required</sup> <a name="relationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipType"></a>

```typescript
public readonly relationshipType: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizSubscriptionResourceGroupsConfig <a name="DataWizSubscriptionResourceGroupsConfig" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.Initializer"></a>

```typescript
import { dataWizSubscriptionResourceGroups } from 'rhizo-co-terraform-provider-wiz'

const dataWizSubscriptionResourceGroupsConfig: dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.first">first</a></code> | <code>number</code> | How many matches to return. - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.relationshipType">relationshipType</a></code> | <code>string</code> | Relationship type, will default to `CONTAINS` if not specified. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The Wiz subscription ID to search by. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

How many matches to return. - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#first DataWizSubscriptionResourceGroups#first}

---

##### `relationshipType`<sup>Optional</sup> <a name="relationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.relationshipType"></a>

```typescript
public readonly relationshipType: string;
```

- *Type:* string

Relationship type, will default to `CONTAINS` if not specified.

Allowed values: 
    - ANY
    - ANY_OUTGOING
    - ACTING_AS
    - ADMINISTRATE
    - ALERTED_ON
    - ALLOWS
    - ALLOWS_ACCESS_TO
    - APPLIES_TO
    - ASSIGNED_TO
    - ATTACHED_TO
    - BEHIND
    - BOOTS
    - BUILT_FROM
    - CAUSES
    - COLLABORATES
    - CONNECTED_TO
    - CONTAINS
    - CONTAINS_DST_IP_RANGE
    - CONTAINS_DST_PORT_RANGE
    - CONTAINS_SRC_IP_RANGE
    - CONTAINS_SRC_PORT_RANGE
    - DENIES
    - DEPENDS_ON
    - DEPLOYED_TO
    - ENCRYPTS
    - ENCRYPTS_PARTITION
    - ENTITLES
    - EXCLUDES
    - EXPOSES
    - GOVERNS
    - HAS
    - HAS_BOUNDARY_POLICY
    - HAS_DATA_FINDING
    - HAS_DATA_INVENTORY
    - HAS_DATA_SCHEMA
    - HAS_DATA_STORE
    - HAS_ORGANIZATION_POLICY
    - HAS_PRINCIPAL_POLICY
    - HAS_RESOURCE_POLICY
    - HAS_SNAPSHOT
    - HAS_SOURCE
    - HAS_STANDARD_WEB_ACCESS_FROM
    - HAS_TECH
    - HOSTS
    - IGNORES
    - IMPLEMENTS
    - INCLUDES
    - INFECTS
    - INSIDE
    - INSTANCE_OF
    - INVOKES
    - LOGS_DATA_FOR
    - MANAGES
    - MOUNTS
    - OWNS
    - PART_OF
    - PEERED_TO
    - PERFORMED
    - PERFORMED_IMPERSONATED
    - PERMITS
    - POINTS_TO
    - PROTECTS
    - READS_DATA_FROM
    - REFERENCED_BY
    - REPLICA_OF
    - ROUTES_TRAFFIC_FROM
    - ROUTES_TRAFFIC_TO
    - RUNS
    - SCANNED
    - SEND_MESSAGES_TO
    - SERVES
    - STORES_DATA_IN
    - TRANSIT_PEERED_TO
    - USES
    - VALIDATES

- Defaults to `{{`CONTAINS`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#relationship_type DataWizSubscriptionResourceGroups#relationship_type}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The Wiz subscription ID to search by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#subscription_id DataWizSubscriptionResourceGroups#subscription_id}

---

### DataWizSubscriptionResourceGroupsResourceGroups <a name="DataWizSubscriptionResourceGroupsResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups.Initializer"></a>

```typescript
import { dataWizSubscriptionResourceGroups } from 'rhizo-co-terraform-provider-wiz'

const dataWizSubscriptionResourceGroupsResourceGroups: dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizSubscriptionResourceGroupsResourceGroupsList <a name="DataWizSubscriptionResourceGroupsResourceGroupsList" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer"></a>

```typescript
import { dataWizSubscriptionResourceGroups } from 'rhizo-co-terraform-provider-wiz'

new dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get"></a>

```typescript
public get(index: number): DataWizSubscriptionResourceGroupsResourceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataWizSubscriptionResourceGroupsResourceGroupsOutputReference <a name="DataWizSubscriptionResourceGroupsResourceGroupsOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer"></a>

```typescript
import { dataWizSubscriptionResourceGroups } from 'rhizo-co-terraform-provider-wiz'

new dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups">DataWizSubscriptionResourceGroupsResourceGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataWizSubscriptionResourceGroupsResourceGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups">DataWizSubscriptionResourceGroupsResourceGroups</a>

---



