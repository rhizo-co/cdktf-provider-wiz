# `dataWizKubernetesClusters` Submodule <a name="`dataWizKubernetesClusters` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizKubernetesClusters <a name="DataWizKubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters wiz_kubernetes_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

new dataWizKubernetesClusters.DataWizKubernetesClusters(scope: Construct, id: string, config?: DataWizKubernetesClustersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig">DataWizKubernetesClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig">DataWizKubernetesClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetCloudProvider">resetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetExternalIds">resetExternalIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetMaxPages">resetMaxPages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCloudProvider` <a name="resetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetCloudProvider"></a>

```typescript
public resetCloudProvider(): void
```

##### `resetExternalIds` <a name="resetExternalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetExternalIds"></a>

```typescript
public resetExternalIds(): void
```

##### `resetFirst` <a name="resetFirst" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetKind` <a name="resetKind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetMaxPages` <a name="resetMaxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetMaxPages"></a>

```typescript
public resetMaxPages(): void
```

##### `resetSearch` <a name="resetSearch" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetSearch"></a>

```typescript
public resetSearch(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataWizKubernetesClusters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataWizKubernetesClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataWizKubernetesClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataWizKubernetesClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataWizKubernetesClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kubernetesClusters">kubernetesClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList">DataWizKubernetesClustersKubernetesClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProviderInput">cloudProviderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIdsInput">externalIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kindInput">kindInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPagesInput">maxPagesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProvider">cloudProvider</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIds">externalIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kind">kind</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPages">maxPages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.search">search</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesClusters`<sup>Required</sup> <a name="kubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kubernetesClusters"></a>

```typescript
public readonly kubernetesClusters: DataWizKubernetesClustersKubernetesClustersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList">DataWizKubernetesClustersKubernetesClustersList</a>

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProviderInput"></a>

```typescript
public readonly cloudProviderInput: string[];
```

- *Type:* string[]

---

##### `externalIdsInput`<sup>Optional</sup> <a name="externalIdsInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIdsInput"></a>

```typescript
public readonly externalIdsInput: string[];
```

- *Type:* string[]

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kindInput"></a>

```typescript
public readonly kindInput: string[];
```

- *Type:* string[]

---

##### `maxPagesInput`<sup>Optional</sup> <a name="maxPagesInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPagesInput"></a>

```typescript
public readonly maxPagesInput: number;
```

- *Type:* number

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string[];
```

- *Type:* string[]

---

##### `externalIds`<sup>Required</sup> <a name="externalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIds"></a>

```typescript
public readonly externalIds: string[];
```

- *Type:* string[]

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kind"></a>

```typescript
public readonly kind: string[];
```

- *Type:* string[]

---

##### `maxPages`<sup>Required</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPages"></a>

```typescript
public readonly maxPages: number;
```

- *Type:* number

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizKubernetesClustersConfig <a name="DataWizKubernetesClustersConfig" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.Initializer"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

const dataWizKubernetesClustersConfig: dataWizKubernetesClusters.DataWizKubernetesClustersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.cloudProvider">cloudProvider</a></code> | <code>string[]</code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.externalIds">externalIds</a></code> | <code>string[]</code> | The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.first">first</a></code> | <code>number</code> | How many matches to return, maximum is `500` per page.     - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.kind">kind</a></code> | <code>string[]</code> | Query Kubernetes Cluster of specific kind(s) or cloud provider(s). |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.maxPages">maxPages</a></code> | <code>number</code> | How many pages to return. 0 means all pages.     - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.search">search</a></code> | <code>string</code> | Free text search. Specify empty string to return all kubernetes clusters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string[];
```

- *Type:* string[]

Query cloud accounts of specific cloud provider.

Allowed values: 
        - GCP
        - AWS
        - Azure
        - OCI
        - Alibaba
        - vSphere
        - OpenShift
        - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#cloud_provider DataWizKubernetesClusters#cloud_provider}

---

##### `externalIds`<sup>Optional</sup> <a name="externalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.externalIds"></a>

```typescript
public readonly externalIds: string[];
```

- *Type:* string[]

The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#external_ids DataWizKubernetesClusters#external_ids}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

How many matches to return, maximum is `500` per page.     - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#first DataWizKubernetesClusters#first}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.kind"></a>

```typescript
public readonly kind: string[];
```

- *Type:* string[]

Query Kubernetes Cluster of specific kind(s) or cloud provider(s).

Allowed values: 
        - EKS
        - GKE
        - AKS
        - OKE
        - OPEN_SHIFT
        - SELF_HOSTED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#kind DataWizKubernetesClusters#kind}

---

##### `maxPages`<sup>Optional</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.maxPages"></a>

```typescript
public readonly maxPages: number;
```

- *Type:* number

How many pages to return. 0 means all pages.     - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#max_pages DataWizKubernetesClusters#max_pages}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Free text search. Specify empty string to return all kubernetes clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#search DataWizKubernetesClusters#search}

---

### DataWizKubernetesClustersKubernetesClusters <a name="DataWizKubernetesClustersKubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters.Initializer"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

const dataWizKubernetesClustersKubernetesClusters: dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters = { ... }
```


### DataWizKubernetesClustersKubernetesClustersCloudAccount <a name="DataWizKubernetesClustersKubernetesClustersCloudAccount" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount.Initializer"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

const dataWizKubernetesClustersKubernetesClustersCloudAccount: dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizKubernetesClustersKubernetesClustersCloudAccountList <a name="DataWizKubernetesClustersKubernetesClustersCloudAccountList" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

new dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get"></a>

```typescript
public get(index: number): DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference <a name="DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

new dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount">DataWizKubernetesClustersKubernetesClustersCloudAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataWizKubernetesClustersKubernetesClustersCloudAccount;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount">DataWizKubernetesClustersKubernetesClustersCloudAccount</a>

---


### DataWizKubernetesClustersKubernetesClustersList <a name="DataWizKubernetesClustersKubernetesClustersList" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

new dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get"></a>

```typescript
public get(index: number): DataWizKubernetesClustersKubernetesClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataWizKubernetesClustersKubernetesClustersOutputReference <a name="DataWizKubernetesClustersKubernetesClustersOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer"></a>

```typescript
import { dataWizKubernetesClusters } from 'rhizo-co-terraform-provider-wiz'

new dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.cloudAccount">cloudAccount</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList">DataWizKubernetesClustersKubernetesClustersCloudAccountList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters">DataWizKubernetesClustersKubernetesClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudAccount`<sup>Required</sup> <a name="cloudAccount" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.cloudAccount"></a>

```typescript
public readonly cloudAccount: DataWizKubernetesClustersKubernetesClustersCloudAccountList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList">DataWizKubernetesClustersKubernetesClustersCloudAccountList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataWizKubernetesClustersKubernetesClusters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters">DataWizKubernetesClustersKubernetesClusters</a>

---



