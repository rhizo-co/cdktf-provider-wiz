# `wiz_cloud_config_rule_associations`

Refer to the Terraform Registory for docs: [`wiz_cloud_config_rule_associations`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations).

# `cloudConfigRuleAssociations` Submodule <a name="`cloudConfigRuleAssociations` Submodule" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigRuleAssociations <a name="CloudConfigRuleAssociations" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations wiz_cloud_config_rule_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer"></a>

```typescript
import { cloudConfigRuleAssociations } from 'rhizo-co-terraform-provider-wiz'

new cloudConfigRuleAssociations.CloudConfigRuleAssociations(scope: Construct, id: string, config: CloudConfigRuleAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig">CloudConfigRuleAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig">CloudConfigRuleAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetDetails">resetDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDetails` <a name="resetDetails" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetDetails"></a>

```typescript
public resetDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct"></a>

```typescript
import { cloudConfigRuleAssociations } from 'rhizo-co-terraform-provider-wiz'

cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement"></a>

```typescript
import { cloudConfigRuleAssociations } from 'rhizo-co-terraform-provider-wiz'

cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource"></a>

```typescript
import { cloudConfigRuleAssociations } from 'rhizo-co-terraform-provider-wiz'

cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIdsInput">cloudConfigRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.detailsInput">detailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIdsInput">securitySubCategoryIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIds">cloudConfigRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIds">securitySubCategoryIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `cloudConfigRuleIdsInput`<sup>Optional</sup> <a name="cloudConfigRuleIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIdsInput"></a>

```typescript
public readonly cloudConfigRuleIdsInput: string[];
```

- *Type:* string[]

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.detailsInput"></a>

```typescript
public readonly detailsInput: string;
```

- *Type:* string

---

##### `securitySubCategoryIdsInput`<sup>Optional</sup> <a name="securitySubCategoryIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIdsInput"></a>

```typescript
public readonly securitySubCategoryIdsInput: string[];
```

- *Type:* string[]

---

##### `cloudConfigRuleIds`<sup>Required</sup> <a name="cloudConfigRuleIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIds"></a>

```typescript
public readonly cloudConfigRuleIds: string[];
```

- *Type:* string[]

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `securitySubCategoryIds`<sup>Required</sup> <a name="securitySubCategoryIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIds"></a>

```typescript
public readonly securitySubCategoryIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigRuleAssociationsConfig <a name="CloudConfigRuleAssociationsConfig" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.Initializer"></a>

```typescript
import { cloudConfigRuleAssociations } from 'rhizo-co-terraform-provider-wiz'

const cloudConfigRuleAssociationsConfig: cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.cloudConfigRuleIds">cloudConfigRuleIds</a></code> | <code>string[]</code> | List of cloud configuration rule IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.securitySubCategoryIds">securitySubCategoryIds</a></code> | <code>string[]</code> | List of security sub-category IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.details">details</a></code> | <code>string</code> | Details of the association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudConfigRuleIds`<sup>Required</sup> <a name="cloudConfigRuleIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.cloudConfigRuleIds"></a>

```typescript
public readonly cloudConfigRuleIds: string[];
```

- *Type:* string[]

List of cloud configuration rule IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#cloud_config_rule_ids CloudConfigRuleAssociations#cloud_config_rule_ids}

---

##### `securitySubCategoryIds`<sup>Required</sup> <a name="securitySubCategoryIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.securitySubCategoryIds"></a>

```typescript
public readonly securitySubCategoryIds: string[];
```

- *Type:* string[]

List of security sub-category IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#security_sub_category_ids CloudConfigRuleAssociations#security_sub_category_ids}

---

##### `details`<sup>Optional</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

Details of the association.

This information is not used to manage resources but can serve as notes or documentation for the associations.
- Defaults to `{{`undefined`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#details CloudConfigRuleAssociations#details}

---



