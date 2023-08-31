# `wiz_integration_jira`

Refer to the Terraform Registory for docs: [`wiz_integration_jira`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira).

# `integrationJira` Submodule <a name="`integrationJira` Submodule" id="rhizo-co-terraform-provider-wiz.integrationJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationJira <a name="IntegrationJira" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira wiz_integration_jira}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer"></a>

```typescript
import { integrationJira } from 'rhizo-co-terraform-provider-wiz'

new integrationJira.IntegrationJira(scope: Construct, id: string, config: IntegrationJiraConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig">IntegrationJiraConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig">IntegrationJiraConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraAllowInsecureTls">resetJiraAllowInsecureTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraClientCertificateAndPrivateKey">resetJiraClientCertificateAndPrivateKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraIsOnPrem">resetJiraIsOnPrem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPassword">resetJiraPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPat">resetJiraPat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerCa">resetJiraServerCa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerType">resetJiraServerType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraUsername">resetJiraUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetJiraAllowInsecureTls` <a name="resetJiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraAllowInsecureTls"></a>

```typescript
public resetJiraAllowInsecureTls(): void
```

##### `resetJiraClientCertificateAndPrivateKey` <a name="resetJiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraClientCertificateAndPrivateKey"></a>

```typescript
public resetJiraClientCertificateAndPrivateKey(): void
```

##### `resetJiraIsOnPrem` <a name="resetJiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraIsOnPrem"></a>

```typescript
public resetJiraIsOnPrem(): void
```

##### `resetJiraPassword` <a name="resetJiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPassword"></a>

```typescript
public resetJiraPassword(): void
```

##### `resetJiraPat` <a name="resetJiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPat"></a>

```typescript
public resetJiraPat(): void
```

##### `resetJiraServerCa` <a name="resetJiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerCa"></a>

```typescript
public resetJiraServerCa(): void
```

##### `resetJiraServerType` <a name="resetJiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerType"></a>

```typescript
public resetJiraServerType(): void
```

##### `resetJiraUsername` <a name="resetJiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraUsername"></a>

```typescript
public resetJiraUsername(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetScope"></a>

```typescript
public resetScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct"></a>

```typescript
import { integrationJira } from 'rhizo-co-terraform-provider-wiz'

integrationJira.IntegrationJira.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement"></a>

```typescript
import { integrationJira } from 'rhizo-co-terraform-provider-wiz'

integrationJira.IntegrationJira.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource"></a>

```typescript
import { integrationJira } from 'rhizo-co-terraform-provider-wiz'

integrationJira.IntegrationJira.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTlsInput">jiraAllowInsecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKeyInput">jiraClientCertificateAndPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPremInput">jiraIsOnPremInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPasswordInput">jiraPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPatInput">jiraPatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCaInput">jiraServerCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerTypeInput">jiraServerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrlInput">jiraUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsernameInput">jiraUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTls">jiraAllowInsecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKey">jiraClientCertificateAndPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPrem">jiraIsOnPrem</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPassword">jiraPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPat">jiraPat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCa">jiraServerCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerType">jiraServerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrl">jiraUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsername">jiraUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jiraAllowInsecureTlsInput`<sup>Optional</sup> <a name="jiraAllowInsecureTlsInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTlsInput"></a>

```typescript
public readonly jiraAllowInsecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraClientCertificateAndPrivateKeyInput`<sup>Optional</sup> <a name="jiraClientCertificateAndPrivateKeyInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKeyInput"></a>

```typescript
public readonly jiraClientCertificateAndPrivateKeyInput: string;
```

- *Type:* string

---

##### `jiraIsOnPremInput`<sup>Optional</sup> <a name="jiraIsOnPremInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPremInput"></a>

```typescript
public readonly jiraIsOnPremInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraPasswordInput`<sup>Optional</sup> <a name="jiraPasswordInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPasswordInput"></a>

```typescript
public readonly jiraPasswordInput: string;
```

- *Type:* string

---

##### `jiraPatInput`<sup>Optional</sup> <a name="jiraPatInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPatInput"></a>

```typescript
public readonly jiraPatInput: string;
```

- *Type:* string

---

##### `jiraServerCaInput`<sup>Optional</sup> <a name="jiraServerCaInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCaInput"></a>

```typescript
public readonly jiraServerCaInput: string;
```

- *Type:* string

---

##### `jiraServerTypeInput`<sup>Optional</sup> <a name="jiraServerTypeInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerTypeInput"></a>

```typescript
public readonly jiraServerTypeInput: string;
```

- *Type:* string

---

##### `jiraUrlInput`<sup>Optional</sup> <a name="jiraUrlInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrlInput"></a>

```typescript
public readonly jiraUrlInput: string;
```

- *Type:* string

---

##### `jiraUsernameInput`<sup>Optional</sup> <a name="jiraUsernameInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsernameInput"></a>

```typescript
public readonly jiraUsernameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `jiraAllowInsecureTls`<sup>Required</sup> <a name="jiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTls"></a>

```typescript
public readonly jiraAllowInsecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraClientCertificateAndPrivateKey`<sup>Required</sup> <a name="jiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKey"></a>

```typescript
public readonly jiraClientCertificateAndPrivateKey: string;
```

- *Type:* string

---

##### `jiraIsOnPrem`<sup>Required</sup> <a name="jiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPrem"></a>

```typescript
public readonly jiraIsOnPrem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraPassword`<sup>Required</sup> <a name="jiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPassword"></a>

```typescript
public readonly jiraPassword: string;
```

- *Type:* string

---

##### `jiraPat`<sup>Required</sup> <a name="jiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPat"></a>

```typescript
public readonly jiraPat: string;
```

- *Type:* string

---

##### `jiraServerCa`<sup>Required</sup> <a name="jiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCa"></a>

```typescript
public readonly jiraServerCa: string;
```

- *Type:* string

---

##### `jiraServerType`<sup>Required</sup> <a name="jiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerType"></a>

```typescript
public readonly jiraServerType: string;
```

- *Type:* string

---

##### `jiraUrl`<sup>Required</sup> <a name="jiraUrl" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrl"></a>

```typescript
public readonly jiraUrl: string;
```

- *Type:* string

---

##### `jiraUsername`<sup>Required</sup> <a name="jiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsername"></a>

```typescript
public readonly jiraUsername: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationJiraConfig <a name="IntegrationJiraConfig" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.Initializer"></a>

```typescript
import { integrationJira } from 'rhizo-co-terraform-provider-wiz'

const integrationJiraConfig: integrationJira.IntegrationJiraConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUrl">jiraUrl</a></code> | <code>string</code> | Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.name">name</a></code> | <code>string</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraAllowInsecureTls">jiraAllowInsecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Jira integration TLS setting. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraClientCertificateAndPrivateKey">jiraClientCertificateAndPrivateKey</a></code> | <code>string</code> | Jira PEM with client certificate and private key. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraIsOnPrem">jiraIsOnPrem</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Jira instance is on prem - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPassword">jiraPassword</a></code> | <code>string</code> | Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPat">jiraPat</a></code> | <code>string</code> | Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerCa">jiraServerCa</a></code> | <code>string</code> | Jira server CA. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerType">jiraServerType</a></code> | <code>string</code> | Jira server type - Defaults to `{{`CLOUD`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUsername">jiraUsername</a></code> | <code>string</code> | Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.projectId">projectId</a></code> | <code>string</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.scope">scope</a></code> | <code>string</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jiraUrl`<sup>Required</sup> <a name="jiraUrl" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUrl"></a>

```typescript
public readonly jiraUrl: string;
```

- *Type:* string

Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_url IntegrationJira#jira_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#name IntegrationJira#name}

---

##### `jiraAllowInsecureTls`<sup>Optional</sup> <a name="jiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraAllowInsecureTls"></a>

```typescript
public readonly jiraAllowInsecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Jira integration TLS setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_allow_insecure_tls IntegrationJira#jira_allow_insecure_tls}

---

##### `jiraClientCertificateAndPrivateKey`<sup>Optional</sup> <a name="jiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraClientCertificateAndPrivateKey"></a>

```typescript
public readonly jiraClientCertificateAndPrivateKey: string;
```

- *Type:* string

Jira PEM with client certificate and private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_client_certificate_and_private_key IntegrationJira#jira_client_certificate_and_private_key}

---

##### `jiraIsOnPrem`<sup>Optional</sup> <a name="jiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraIsOnPrem"></a>

```typescript
public readonly jiraIsOnPrem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Jira instance is on prem - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_is_on_prem IntegrationJira#jira_is_on_prem}

---

##### `jiraPassword`<sup>Optional</sup> <a name="jiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPassword"></a>

```typescript
public readonly jiraPassword: string;
```

- *Type:* string

Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_password IntegrationJira#jira_password}

---

##### `jiraPat`<sup>Optional</sup> <a name="jiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPat"></a>

```typescript
public readonly jiraPat: string;
```

- *Type:* string

Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_pat IntegrationJira#jira_pat}

---

##### `jiraServerCa`<sup>Optional</sup> <a name="jiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerCa"></a>

```typescript
public readonly jiraServerCa: string;
```

- *Type:* string

Jira server CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_server_ca IntegrationJira#jira_server_ca}

---

##### `jiraServerType`<sup>Optional</sup> <a name="jiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerType"></a>

```typescript
public readonly jiraServerType: string;
```

- *Type:* string

Jira server type - Defaults to `{{`CLOUD`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_server_type IntegrationJira#jira_server_type}

---

##### `jiraUsername`<sup>Optional</sup> <a name="jiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUsername"></a>

```typescript
public readonly jiraUsername: string;
```

- *Type:* string

Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_username IntegrationJira#jira_username}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#project_id IntegrationJira#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.scope"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#scope IntegrationJira#scope}

---



