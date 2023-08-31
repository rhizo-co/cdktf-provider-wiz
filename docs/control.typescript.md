# `wiz_control`

Refer to the Terraform Registory for docs: [`wiz_control`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control).

# `control` Submodule <a name="`control` Submodule" id="rhizo-co-terraform-provider-wiz.control"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Control <a name="Control" id="rhizo-co-terraform-provider-wiz.control.Control"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control wiz_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer"></a>

```typescript
import { control } from 'rhizo-co-terraform-provider-wiz'

new control.Control(scope: Construct, id: string, config: ControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig">ControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig">ControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.resetResolutionRecommendation">resetResolutionRecommendation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.control.Control.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.control.Control.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.control.Control.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.control.Control.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.control.Control.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.control.Control.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.control.Control.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.control.Control.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.control.Control.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.control.Control.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.control.Control.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.control.Control.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.control.Control.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetResolutionRecommendation` <a name="resetResolutionRecommendation" id="rhizo-co-terraform-provider-wiz.control.Control.resetResolutionRecommendation"></a>

```typescript
public resetResolutionRecommendation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.control.Control.isConstruct"></a>

```typescript
import { control } from 'rhizo-co-terraform-provider-wiz'

control.Control.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.control.Control.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.control.Control.isTerraformElement"></a>

```typescript
import { control } from 'rhizo-co-terraform-provider-wiz'

control.Control.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.control.Control.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.control.Control.isTerraformResource"></a>

```typescript
import { control } from 'rhizo-co-terraform-provider-wiz'

control.Control.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.control.Control.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.securitySubCategories">securitySubCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.resolutionRecommendationInput">resolutionRecommendationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.scopeQueryInput">scopeQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.resolutionRecommendation">resolutionRecommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.scopeQuery">scopeQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.severity">severity</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.control.Control.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.control.Control.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.control.Control.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.control.Control.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.control.Control.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.control.Control.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.control.Control.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.control.Control.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.control.Control.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.control.Control.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.control.Control.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.control.Control.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.control.Control.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.control.Control.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.control.Control.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securitySubCategories`<sup>Required</sup> <a name="securitySubCategories" id="rhizo-co-terraform-provider-wiz.control.Control.property.securitySubCategories"></a>

```typescript
public readonly securitySubCategories: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.control.Control.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.control.Control.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.control.Control.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.control.Control.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-wiz.control.Control.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `resolutionRecommendationInput`<sup>Optional</sup> <a name="resolutionRecommendationInput" id="rhizo-co-terraform-provider-wiz.control.Control.property.resolutionRecommendationInput"></a>

```typescript
public readonly resolutionRecommendationInput: string;
```

- *Type:* string

---

##### `scopeQueryInput`<sup>Optional</sup> <a name="scopeQueryInput" id="rhizo-co-terraform-provider-wiz.control.Control.property.scopeQueryInput"></a>

```typescript
public readonly scopeQueryInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-wiz.control.Control.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.control.Control.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.control.Control.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.control.Control.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.control.Control.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-wiz.control.Control.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `resolutionRecommendation`<sup>Required</sup> <a name="resolutionRecommendation" id="rhizo-co-terraform-provider-wiz.control.Control.property.resolutionRecommendation"></a>

```typescript
public readonly resolutionRecommendation: string;
```

- *Type:* string

---

##### `scopeQuery`<sup>Required</sup> <a name="scopeQuery" id="rhizo-co-terraform-provider-wiz.control.Control.property.scopeQuery"></a>

```typescript
public readonly scopeQuery: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.control.Control.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.control.Control.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ControlConfig <a name="ControlConfig" id="rhizo-co-terraform-provider-wiz.control.ControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.Initializer"></a>

```typescript
import { control } from 'rhizo-co-terraform-provider-wiz'

const controlConfig: control.ControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.name">name</a></code> | <code>string</code> | Name of the Control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.query">query</a></code> | <code>string</code> | The query that the control runs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.scopeQuery">scopeQuery</a></code> | <code>string</code> | The query that represents the control's scope. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.severity">severity</a></code> | <code>string</code> | Severity that will be set for this control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.description">description</a></code> | <code>string</code> | Description of the Control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable the Control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.projectId">projectId</a></code> | <code>string</code> | Project scope of the control. Use '*' for all projects. - Defaults to `{{`*`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.resolutionRecommendation">resolutionRecommendation</a></code> | <code>string</code> | Guidance on how the user should address an issue that was created by this control. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#name Control#name}

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The query that the control runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#query Control#query}

---

##### `scopeQuery`<sup>Required</sup> <a name="scopeQuery" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.scopeQuery"></a>

```typescript
public readonly scopeQuery: string;
```

- *Type:* string

The query that represents the control's scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#scope_query Control#scope_query}

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Severity that will be set for this control.

Allowed values: 
    - INFORMATIONAL
    - LOW
    - MEDIUM
    - HIGH
    - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#severity Control#severity}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#description Control#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable the Control.

This has a known defect where if set to false, it will be created as true because the API to create Controls does not accept this parameter.
- Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#enabled Control#enabled}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project scope of the control. Use '*' for all projects. - Defaults to `{{`*`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#project_id Control#project_id}

---

##### `resolutionRecommendation`<sup>Optional</sup> <a name="resolutionRecommendation" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.resolutionRecommendation"></a>

```typescript
public readonly resolutionRecommendation: string;
```

- *Type:* string

Guidance on how the user should address an issue that was created by this control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#resolution_recommendation Control#resolution_recommendation}

---



