# `wiz_host_config_rule_associations`

Refer to the Terraform Registory for docs: [`wiz_host_config_rule_associations`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations).

# `hostConfigRuleAssociations` Submodule <a name="`hostConfigRuleAssociations` Submodule" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostConfigRuleAssociations <a name="HostConfigRuleAssociations" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations wiz_host_config_rule_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer"></a>

```typescript
import { hostConfigRuleAssociations } from 'rhizo-co-terraform-provider-wiz'

new hostConfigRuleAssociations.HostConfigRuleAssociations(scope: Construct, id: string, config: HostConfigRuleAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig">HostConfigRuleAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig">HostConfigRuleAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.resetDetails">resetDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDetails` <a name="resetDetails" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.resetDetails"></a>

```typescript
public resetDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isConstruct"></a>

```typescript
import { hostConfigRuleAssociations } from 'rhizo-co-terraform-provider-wiz'

hostConfigRuleAssociations.HostConfigRuleAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformElement"></a>

```typescript
import { hostConfigRuleAssociations } from 'rhizo-co-terraform-provider-wiz'

hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformResource"></a>

```typescript
import { hostConfigRuleAssociations } from 'rhizo-co-terraform-provider-wiz'

hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.detailsInput">detailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.hostConfigRuleIdsInput">hostConfigRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.securitySubCategoryIdsInput">securitySubCategoryIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.hostConfigRuleIds">hostConfigRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.securitySubCategoryIds">securitySubCategoryIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.detailsInput"></a>

```typescript
public readonly detailsInput: string;
```

- *Type:* string

---

##### `hostConfigRuleIdsInput`<sup>Optional</sup> <a name="hostConfigRuleIdsInput" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.hostConfigRuleIdsInput"></a>

```typescript
public readonly hostConfigRuleIdsInput: string[];
```

- *Type:* string[]

---

##### `securitySubCategoryIdsInput`<sup>Optional</sup> <a name="securitySubCategoryIdsInput" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.securitySubCategoryIdsInput"></a>

```typescript
public readonly securitySubCategoryIdsInput: string[];
```

- *Type:* string[]

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `hostConfigRuleIds`<sup>Required</sup> <a name="hostConfigRuleIds" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.hostConfigRuleIds"></a>

```typescript
public readonly hostConfigRuleIds: string[];
```

- *Type:* string[]

---

##### `securitySubCategoryIds`<sup>Required</sup> <a name="securitySubCategoryIds" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.securitySubCategoryIds"></a>

```typescript
public readonly securitySubCategoryIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostConfigRuleAssociationsConfig <a name="HostConfigRuleAssociationsConfig" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.Initializer"></a>

```typescript
import { hostConfigRuleAssociations } from 'rhizo-co-terraform-provider-wiz'

const hostConfigRuleAssociationsConfig: hostConfigRuleAssociations.HostConfigRuleAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.hostConfigRuleIds">hostConfigRuleIds</a></code> | <code>string[]</code> | List of host configuration rule IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.securitySubCategoryIds">securitySubCategoryIds</a></code> | <code>string[]</code> | List of security sub-category IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.details">details</a></code> | <code>string</code> | Details of the association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostConfigRuleIds`<sup>Required</sup> <a name="hostConfigRuleIds" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.hostConfigRuleIds"></a>

```typescript
public readonly hostConfigRuleIds: string[];
```

- *Type:* string[]

List of host configuration rule IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations#host_config_rule_ids HostConfigRuleAssociations#host_config_rule_ids}

---

##### `securitySubCategoryIds`<sup>Required</sup> <a name="securitySubCategoryIds" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.securitySubCategoryIds"></a>

```typescript
public readonly securitySubCategoryIds: string[];
```

- *Type:* string[]

List of security sub-category IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations#security_sub_category_ids HostConfigRuleAssociations#security_sub_category_ids}

---

##### `details`<sup>Optional</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

Details of the association.

This information is not used to manage resources but can serve as notes or documentation for the associations.
- Defaults to `{{`undefined`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations#details HostConfigRuleAssociations#details}

---



