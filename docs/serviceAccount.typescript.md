# `wiz_service_account`

Refer to the Terraform Registory for docs: [`wiz_service_account`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account).

# `serviceAccount` Submodule <a name="`serviceAccount` Submodule" id="rhizo-co-terraform-provider-wiz.serviceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceAccount <a name="ServiceAccount" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account wiz_service_account}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer"></a>

```typescript
import { serviceAccount } from 'rhizo-co-terraform-provider-wiz'

new serviceAccount.ServiceAccount(scope: Construct, id: string, config: ServiceAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig">ServiceAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig">ServiceAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetAssignedProjects">resetAssignedProjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetRecreateIfRotated">resetRecreateIfRotated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAssignedProjects` <a name="resetAssignedProjects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetAssignedProjects"></a>

```typescript
public resetAssignedProjects(): void
```

##### `resetRecreateIfRotated` <a name="resetRecreateIfRotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetRecreateIfRotated"></a>

```typescript
public resetRecreateIfRotated(): void
```

##### `resetScopes` <a name="resetScopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct"></a>

```typescript
import { serviceAccount } from 'rhizo-co-terraform-provider-wiz'

serviceAccount.ServiceAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement"></a>

```typescript
import { serviceAccount } from 'rhizo-co-terraform-provider-wiz'

serviceAccount.ServiceAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource"></a>

```typescript
import { serviceAccount } from 'rhizo-co-terraform-provider-wiz'

serviceAccount.ServiceAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lastRotatedAt">lastRotatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjectsInput">assignedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotatedInput">recreateIfRotatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjects">assignedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotated">recreateIfRotated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastRotatedAt`<sup>Required</sup> <a name="lastRotatedAt" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lastRotatedAt"></a>

```typescript
public readonly lastRotatedAt: string;
```

- *Type:* string

---

##### `assignedProjectsInput`<sup>Optional</sup> <a name="assignedProjectsInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjectsInput"></a>

```typescript
public readonly assignedProjectsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recreateIfRotatedInput`<sup>Optional</sup> <a name="recreateIfRotatedInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotatedInput"></a>

```typescript
public readonly recreateIfRotatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `assignedProjects`<sup>Required</sup> <a name="assignedProjects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjects"></a>

```typescript
public readonly assignedProjects: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recreateIfRotated`<sup>Required</sup> <a name="recreateIfRotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotated"></a>

```typescript
public readonly recreateIfRotated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAccountConfig <a name="ServiceAccountConfig" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.Initializer"></a>

```typescript
import { serviceAccount } from 'rhizo-co-terraform-provider-wiz'

const serviceAccountConfig: serviceAccount.ServiceAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.assignedProjects">assignedProjects</a></code> | <code>string[]</code> | Project ID assignments, optional with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.recreateIfRotated">recreateIfRotated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Recreate the resource if rotated outside Terraform? |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Scopes, required with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.type">type</a></code> | <code>string</code> | Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}.

---

##### `assignedProjects`<sup>Optional</sup> <a name="assignedProjects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.assignedProjects"></a>

```typescript
public readonly assignedProjects: string[];
```

- *Type:* string[]

Project ID assignments, optional with THIRD_PARTY (GraphQL API type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#assigned_projects ServiceAccount#assigned_projects}

---

##### `recreateIfRotated`<sup>Optional</sup> <a name="recreateIfRotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.recreateIfRotated"></a>

```typescript
public readonly recreateIfRotated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Recreate the resource if rotated outside Terraform?

This can be used to ensure the state contains valid authentication information. This option should be disabled if external tools are used to manage the credentials for this service account.
- Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#recreate_if_rotated ServiceAccount#recreate_if_rotated}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Scopes, required with THIRD_PARTY (GraphQL API type).

Allowed values: 
    - admin:all
    - admin:audit
    - admin:digital_trust_settings
    - admin:identity_providers
    - admin:projects
    - admin:reports
    - admin:security_settings
    - admin:users
    - create:action_templates
    - create:admission_controllers
    - create:all
    - create:automation_actions
    - create:automation_rules
    - create:cloud_configuration
    - create:cloud_event_rules
    - create:connectors
    - create:controls
    - create:host_configuration
    - create:integrations
    - create:outposts
    - create:reports
    - create:run_action
    - create:run_control
    - create:saved_cloud_event_filters
    - create:saved_graph_queries
    - create:scan_policies
    - create:security_frameworks
    - create:security_scans
    - create:service_accounts
    - create:service_tickets
    - delete:action_templates
    - delete:all
    - delete:automation_actions
    - delete:automation_rules
    - delete:cloud_configuration
    - delete:cloud_event_rules
    - delete:connectors
    - delete:controls
    - delete:host_configuration
    - delete:integrations
    - delete:outposts
    - delete:reports
    - delete:saved_cloud_event_filters
    - delete:saved_graph_queries
    - delete:scan_policies
    - delete:security_frameworks
    - delete:security_scans
    - delete:service_accounts
    - read:action_templates
    - read:admission_controllers
    - read:all
    - read:automation_actions
    - read:automation_rules
    - read:benchmarks
    - read:cloud_accounts
    - read:cloud_configuration
    - read:cloud_event_rules
    - read:cloud_events
    - read:connectors
    - read:controls
    - read:digital_trust_settings
    - read:host_configuration
    - read:integrations
    - read:inventory
    - read:issue_settings
    - read:issues
    - read:kubernetes_clusters
    - read:licenses
    - read:outposts
    - read:projects
    - read:reports
    - read:resources
    - read:saved_cloud_event_filters
    - read:saved_graph_queries
    - read:scan_policies
    - read:scanner_settings
    - read:security_frameworks
    - read:security_scans
    - read:security_settings
    - read:service_accounts
    - read:system_activities
    - read:users
    - read:vulnerabilities
    - update:admission_controllers
    - update:all
    - update:automation_actions
    - update:automation_rules
    - update:cloud_configuration
    - update:cloud_event_rules
    - update:connectors
    - update:controls
    - update:host_configuration
    - update:integrations
    - update:inventory
    - update:issue_settings
    - update:issues
    - update:outposts
    - update:reports
    - update:resources
    - update:saved_cloud_event_filters
    - update:saved_graph_queries
    - update:scan_policies
    - update:scanner_settings
    - update:security_frameworks
    - update:security_scans
    - update:service_accounts
    - update:vulnerabilities
    - write:all
    - write:automation_actions
    - write:automation_rules
    - write:cloud_configuration
    - write:cloud_event_rules
    - write:connectors
    - write:controls
    - write:host_configuration
    - write:issue_settings
    - write:issues
    - write:outposts
    - write:reports
    - write:saved_cloud_event_filters
    - write:saved_graph_queries
    - write:scan_policies
    - write:scanner_settings
    - write:security_frameworks
    - write:security_scans
    - write:service_accounts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#scopes ServiceAccount#scopes}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER.

Defaults to `{{`THIRD_PARTY`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#type ServiceAccount#type}

---



