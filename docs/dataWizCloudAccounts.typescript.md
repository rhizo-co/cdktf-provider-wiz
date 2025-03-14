# `dataWizCloudAccounts` Submodule <a name="`dataWizCloudAccounts` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizCloudAccounts <a name="DataWizCloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts wiz_cloud_accounts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer"></a>

```typescript
import { dataWizCloudAccounts } from 'rhizo-co-terraform-provider-wiz'

new dataWizCloudAccounts.DataWizCloudAccounts(scope: Construct, id: string, config?: DataWizCloudAccountsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig">DataWizCloudAccountsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig">DataWizCloudAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetAssignedToProject">resetAssignedToProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetCloudProvider">resetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorId">resetConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorIssueId">resetConnectorIssueId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetHasMultipleConnectorSources">resetHasMultipleConnectorSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetIds">resetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetMaxPages">resetMaxPages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAssignedToProject` <a name="resetAssignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetAssignedToProject"></a>

```typescript
public resetAssignedToProject(): void
```

##### `resetCloudProvider` <a name="resetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetCloudProvider"></a>

```typescript
public resetCloudProvider(): void
```

##### `resetConnectorId` <a name="resetConnectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorId"></a>

```typescript
public resetConnectorId(): void
```

##### `resetConnectorIssueId` <a name="resetConnectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorIssueId"></a>

```typescript
public resetConnectorIssueId(): void
```

##### `resetFirst` <a name="resetFirst" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetHasMultipleConnectorSources` <a name="resetHasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetHasMultipleConnectorSources"></a>

```typescript
public resetHasMultipleConnectorSources(): void
```

##### `resetIds` <a name="resetIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetIds"></a>

```typescript
public resetIds(): void
```

##### `resetMaxPages` <a name="resetMaxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetMaxPages"></a>

```typescript
public resetMaxPages(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetSearch` <a name="resetSearch" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataWizCloudAccounts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct"></a>

```typescript
import { dataWizCloudAccounts } from 'rhizo-co-terraform-provider-wiz'

dataWizCloudAccounts.DataWizCloudAccounts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement"></a>

```typescript
import { dataWizCloudAccounts } from 'rhizo-co-terraform-provider-wiz'

dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource"></a>

```typescript
import { dataWizCloudAccounts } from 'rhizo-co-terraform-provider-wiz'

dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport"></a>

```typescript
import { dataWizCloudAccounts } from 'rhizo-co-terraform-provider-wiz'

dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataWizCloudAccounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataWizCloudAccounts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataWizCloudAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataWizCloudAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudAccounts">cloudAccounts</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList">DataWizCloudAccountsCloudAccountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProjectInput">assignedToProjectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProviderInput">cloudProviderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIdInput">connectorIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueIdInput">connectorIssueIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSourcesInput">hasMultipleConnectorSourcesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.idsInput">idsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPagesInput">maxPagesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.searchInput">searchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.statusInput">statusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProject">assignedToProject</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProvider">cloudProvider</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorId">connectorId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueId">connectorIssueId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSources">hasMultipleConnectorSources</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPages">maxPages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.search">search</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.status">status</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cloudAccounts`<sup>Required</sup> <a name="cloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudAccounts"></a>

```typescript
public readonly cloudAccounts: DataWizCloudAccountsCloudAccountsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList">DataWizCloudAccountsCloudAccountsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `assignedToProjectInput`<sup>Optional</sup> <a name="assignedToProjectInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProjectInput"></a>

```typescript
public readonly assignedToProjectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProviderInput"></a>

```typescript
public readonly cloudProviderInput: string[];
```

- *Type:* string[]

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIdInput"></a>

```typescript
public readonly connectorIdInput: string[];
```

- *Type:* string[]

---

##### `connectorIssueIdInput`<sup>Optional</sup> <a name="connectorIssueIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueIdInput"></a>

```typescript
public readonly connectorIssueIdInput: string[];
```

- *Type:* string[]

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `hasMultipleConnectorSourcesInput`<sup>Optional</sup> <a name="hasMultipleConnectorSourcesInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSourcesInput"></a>

```typescript
public readonly hasMultipleConnectorSourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.idsInput"></a>

```typescript
public readonly idsInput: string[];
```

- *Type:* string[]

---

##### `maxPagesInput`<sup>Optional</sup> <a name="maxPagesInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPagesInput"></a>

```typescript
public readonly maxPagesInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.searchInput"></a>

```typescript
public readonly searchInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.statusInput"></a>

```typescript
public readonly statusInput: string[];
```

- *Type:* string[]

---

##### `assignedToProject`<sup>Required</sup> <a name="assignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProject"></a>

```typescript
public readonly assignedToProject: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string[];
```

- *Type:* string[]

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorId"></a>

```typescript
public readonly connectorId: string[];
```

- *Type:* string[]

---

##### `connectorIssueId`<sup>Required</sup> <a name="connectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueId"></a>

```typescript
public readonly connectorIssueId: string[];
```

- *Type:* string[]

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `hasMultipleConnectorSources`<sup>Required</sup> <a name="hasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSources"></a>

```typescript
public readonly hasMultipleConnectorSources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ids`<sup>Required</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `maxPages`<sup>Required</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPages"></a>

```typescript
public readonly maxPages: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.search"></a>

```typescript
public readonly search: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizCloudAccountsCloudAccounts <a name="DataWizCloudAccountsCloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts.Initializer"></a>

```typescript
import { dataWizCloudAccounts } from 'rhizo-co-terraform-provider-wiz'

const dataWizCloudAccountsCloudAccounts: dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts = { ... }
```


### DataWizCloudAccountsConfig <a name="DataWizCloudAccountsConfig" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.Initializer"></a>

```typescript
import { dataWizCloudAccounts } from 'rhizo-co-terraform-provider-wiz'

const dataWizCloudAccountsConfig: dataWizCloudAccounts.DataWizCloudAccountsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.assignedToProject">assignedToProject</a></code> | <code>boolean \| cdktf.IResolvable</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.cloudProvider">cloudProvider</a></code> | <code>string[]</code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorId">connectorId</a></code> | <code>string[]</code> | Query cloud accounts by specific connector ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorIssueId">connectorIssueId</a></code> | <code>string[]</code> | Query cloud accounts by specific connector issue ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.first">first</a></code> | <code>number</code> | How many results to return, maximum is `500` is per page.     - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.hasMultipleConnectorSources">hasMultipleConnectorSources</a></code> | <code>boolean \| cdktf.IResolvable</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.ids">ids</a></code> | <code>string[]</code> | Get specific Cloud Accounts by their IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.maxPages">maxPages</a></code> | <code>number</code> | How many pages to return. 0 means all pages.     - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.projectId">projectId</a></code> | <code>string</code> | Query cloud accounts of a specific linked project, given its id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.search">search</a></code> | <code>string[]</code> | Free text search on cloud account name or tags or external-id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.status">status</a></code> | <code>string[]</code> | Query cloud accounts by status. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assignedToProject`<sup>Optional</sup> <a name="assignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.assignedToProject"></a>

```typescript
public readonly assignedToProject: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#assigned_to_project DataWizCloudAccounts#assigned_to_project}

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.cloudProvider"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#cloud_provider DataWizCloudAccounts#cloud_provider}

---

##### `connectorId`<sup>Optional</sup> <a name="connectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorId"></a>

```typescript
public readonly connectorId: string[];
```

- *Type:* string[]

Query cloud accounts by specific connector ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#connector_id DataWizCloudAccounts#connector_id}

---

##### `connectorIssueId`<sup>Optional</sup> <a name="connectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorIssueId"></a>

```typescript
public readonly connectorIssueId: string[];
```

- *Type:* string[]

Query cloud accounts by specific connector issue ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#connector_issue_id DataWizCloudAccounts#connector_issue_id}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

How many results to return, maximum is `500` is per page.     - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#first DataWizCloudAccounts#first}

---

##### `hasMultipleConnectorSources`<sup>Optional</sup> <a name="hasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.hasMultipleConnectorSources"></a>

```typescript
public readonly hasMultipleConnectorSources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#has_multiple_connector_sources DataWizCloudAccounts#has_multiple_connector_sources}

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

Get specific Cloud Accounts by their IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#ids DataWizCloudAccounts#ids}

---

##### `maxPages`<sup>Optional</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.maxPages"></a>

```typescript
public readonly maxPages: number;
```

- *Type:* number

How many pages to return. 0 means all pages.     - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#max_pages DataWizCloudAccounts#max_pages}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Query cloud accounts of a specific linked project, given its id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#project_id DataWizCloudAccounts#project_id}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.search"></a>

```typescript
public readonly search: string[];
```

- *Type:* string[]

Free text search on cloud account name or tags or external-id.

Specify list of empty string to return all cloud accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#search DataWizCloudAccounts#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

Query cloud accounts by status.

Allowed values: 
        - CONNECTED
        - ERROR
        - DISABLED
        - INITIAL_SCANNING
        - PARTIALLY_CONNECTED
        - DISCONNECTED
        - DISCOVERED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#status DataWizCloudAccounts#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizCloudAccountsCloudAccountsList <a name="DataWizCloudAccountsCloudAccountsList" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer"></a>

```typescript
import { dataWizCloudAccounts } from 'rhizo-co-terraform-provider-wiz'

new dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get"></a>

```typescript
public get(index: number): DataWizCloudAccountsCloudAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataWizCloudAccountsCloudAccountsOutputReference <a name="DataWizCloudAccountsCloudAccountsOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer"></a>

```typescript
import { dataWizCloudAccounts } from 'rhizo-co-terraform-provider-wiz'

new dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.linkedProjectIds">linkedProjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.sourceConnectorIds">sourceConnectorIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts">DataWizCloudAccountsCloudAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkedProjectIds`<sup>Required</sup> <a name="linkedProjectIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.linkedProjectIds"></a>

```typescript
public readonly linkedProjectIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceConnectorIds`<sup>Required</sup> <a name="sourceConnectorIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.sourceConnectorIds"></a>

```typescript
public readonly sourceConnectorIds: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataWizCloudAccountsCloudAccounts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts">DataWizCloudAccountsCloudAccounts</a>

---



