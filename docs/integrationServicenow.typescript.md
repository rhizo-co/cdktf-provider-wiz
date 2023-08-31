# `wiz_integration_servicenow`

Refer to the Terraform Registory for docs: [`wiz_integration_servicenow`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_servicenow).

# `integrationServicenow` Submodule <a name="`integrationServicenow` Submodule" id="rhizo-co-terraform-provider-wiz.integrationServicenow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationServicenow <a name="IntegrationServicenow" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_servicenow wiz_integration_servicenow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer"></a>

```typescript
import { integrationServicenow } from 'rhizo-co-terraform-provider-wiz'

new integrationServicenow.IntegrationServicenow(scope: Construct, id: string, config: IntegrationServicenowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig">IntegrationServicenowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig">IntegrationServicenowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientId">resetServicenowClientId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientSecret">resetServicenowClientSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetServicenowClientId` <a name="resetServicenowClientId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientId"></a>

```typescript
public resetServicenowClientId(): void
```

##### `resetServicenowClientSecret` <a name="resetServicenowClientSecret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientSecret"></a>

```typescript
public resetServicenowClientSecret(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isConstruct"></a>

```typescript
import { integrationServicenow } from 'rhizo-co-terraform-provider-wiz'

integrationServicenow.IntegrationServicenow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement"></a>

```typescript
import { integrationServicenow } from 'rhizo-co-terraform-provider-wiz'

integrationServicenow.IntegrationServicenow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource"></a>

```typescript
import { integrationServicenow } from 'rhizo-co-terraform-provider-wiz'

integrationServicenow.IntegrationServicenow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientIdInput">servicenowClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecretInput">servicenowClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPasswordInput">servicenowPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrlInput">servicenowUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsernameInput">servicenowUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientId">servicenowClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecret">servicenowClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPassword">servicenowPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrl">servicenowUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsername">servicenowUsername</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `servicenowClientIdInput`<sup>Optional</sup> <a name="servicenowClientIdInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientIdInput"></a>

```typescript
public readonly servicenowClientIdInput: string;
```

- *Type:* string

---

##### `servicenowClientSecretInput`<sup>Optional</sup> <a name="servicenowClientSecretInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecretInput"></a>

```typescript
public readonly servicenowClientSecretInput: string;
```

- *Type:* string

---

##### `servicenowPasswordInput`<sup>Optional</sup> <a name="servicenowPasswordInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPasswordInput"></a>

```typescript
public readonly servicenowPasswordInput: string;
```

- *Type:* string

---

##### `servicenowUrlInput`<sup>Optional</sup> <a name="servicenowUrlInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrlInput"></a>

```typescript
public readonly servicenowUrlInput: string;
```

- *Type:* string

---

##### `servicenowUsernameInput`<sup>Optional</sup> <a name="servicenowUsernameInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsernameInput"></a>

```typescript
public readonly servicenowUsernameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `servicenowClientId`<sup>Required</sup> <a name="servicenowClientId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientId"></a>

```typescript
public readonly servicenowClientId: string;
```

- *Type:* string

---

##### `servicenowClientSecret`<sup>Required</sup> <a name="servicenowClientSecret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecret"></a>

```typescript
public readonly servicenowClientSecret: string;
```

- *Type:* string

---

##### `servicenowPassword`<sup>Required</sup> <a name="servicenowPassword" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPassword"></a>

```typescript
public readonly servicenowPassword: string;
```

- *Type:* string

---

##### `servicenowUrl`<sup>Required</sup> <a name="servicenowUrl" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrl"></a>

```typescript
public readonly servicenowUrl: string;
```

- *Type:* string

---

##### `servicenowUsername`<sup>Required</sup> <a name="servicenowUsername" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsername"></a>

```typescript
public readonly servicenowUsername: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationServicenowConfig <a name="IntegrationServicenowConfig" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.Initializer"></a>

```typescript
import { integrationServicenow } from 'rhizo-co-terraform-provider-wiz'

const integrationServicenowConfig: integrationServicenow.IntegrationServicenowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.name">name</a></code> | <code>string</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowPassword">servicenowPassword</a></code> | <code>string</code> | ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUrl">servicenowUrl</a></code> | <code>string</code> | ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUsername">servicenowUsername</a></code> | <code>string</code> | Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.projectId">projectId</a></code> | <code>string</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.scope">scope</a></code> | <code>string</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientId">servicenowClientId</a></code> | <code>string</code> | ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientSecret">servicenowClientSecret</a></code> | <code>string</code> | ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_servicenow#name IntegrationServicenow#name}

---

##### `servicenowPassword`<sup>Required</sup> <a name="servicenowPassword" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowPassword"></a>

```typescript
public readonly servicenowPassword: string;
```

- *Type:* string

ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_servicenow#servicenow_password IntegrationServicenow#servicenow_password}

---

##### `servicenowUrl`<sup>Required</sup> <a name="servicenowUrl" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUrl"></a>

```typescript
public readonly servicenowUrl: string;
```

- *Type:* string

ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_servicenow#servicenow_url IntegrationServicenow#servicenow_url}

---

##### `servicenowUsername`<sup>Required</sup> <a name="servicenowUsername" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUsername"></a>

```typescript
public readonly servicenowUsername: string;
```

- *Type:* string

Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_servicenow#servicenow_username IntegrationServicenow#servicenow_username}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_servicenow#project_id IntegrationServicenow#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project.

Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles. 
- Allowed values: 
    - Selected Project
    - All Resources
    - All Resources, Restrict this Integration to global roles only

- Defaults to `{{`All Resources, Restrict this Integration to global roles only`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_servicenow#scope IntegrationServicenow#scope}

---

##### `servicenowClientId`<sup>Optional</sup> <a name="servicenowClientId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientId"></a>

```typescript
public readonly servicenowClientId: string;
```

- *Type:* string

ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_servicenow#servicenow_client_id IntegrationServicenow#servicenow_client_id}

---

##### `servicenowClientSecret`<sup>Optional</sup> <a name="servicenowClientSecret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientSecret"></a>

```typescript
public readonly servicenowClientSecret: string;
```

- *Type:* string

ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_servicenow#servicenow_client_secret IntegrationServicenow#servicenow_client_secret}

---



