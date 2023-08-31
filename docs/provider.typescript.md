# `provider`

Refer to the Terraform Registory for docs: [`wiz`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs).

# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-wiz.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WizProvider <a name="WizProvider" id="rhizo-co-terraform-provider-wiz.provider.WizProvider"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs wiz}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-wiz'

new provider.WizProvider(scope: Construct, id: string, config: WizProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig">WizProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig">WizProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetCaChain">resetCaChain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryMax">resetHttpClientRetryMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMax">resetHttpClientRetryWaitMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMin">resetHttpClientRetryWaitMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxy">resetProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxyServer">resetProxyServer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthAudience">resetWizAuthAudience</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthGrantType">resetWizAuthGrantType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthUrl">resetWizAuthUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetCaChain` <a name="resetCaChain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetCaChain"></a>

```typescript
public resetCaChain(): void
```

##### `resetHttpClientRetryMax` <a name="resetHttpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryMax"></a>

```typescript
public resetHttpClientRetryMax(): void
```

##### `resetHttpClientRetryWaitMax` <a name="resetHttpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMax"></a>

```typescript
public resetHttpClientRetryWaitMax(): void
```

##### `resetHttpClientRetryWaitMin` <a name="resetHttpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMin"></a>

```typescript
public resetHttpClientRetryWaitMin(): void
```

##### `resetProxy` <a name="resetProxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxy"></a>

```typescript
public resetProxy(): void
```

##### `resetProxyServer` <a name="resetProxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxyServer"></a>

```typescript
public resetProxyServer(): void
```

##### `resetWizAuthAudience` <a name="resetWizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthAudience"></a>

```typescript
public resetWizAuthAudience(): void
```

##### `resetWizAuthGrantType` <a name="resetWizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthGrantType"></a>

```typescript
public resetWizAuthGrantType(): void
```

##### `resetWizAuthUrl` <a name="resetWizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthUrl"></a>

```typescript
public resetWizAuthUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-wiz'

provider.WizProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-wiz'

provider.WizProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-wiz'

provider.WizProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChainInput">caChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMaxInput">httpClientRetryMaxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMaxInput">httpClientRetryWaitMaxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMinInput">httpClientRetryWaitMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyInput">proxyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServerInput">proxyServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudienceInput">wizAuthAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientIdInput">wizAuthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecretInput">wizAuthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantTypeInput">wizAuthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrlInput">wizAuthUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrlInput">wizUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChain">caChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMax">httpClientRetryMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMax">httpClientRetryWaitMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMin">httpClientRetryWaitMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxy">proxy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServer">proxyServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudience">wizAuthAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientId">wizAuthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecret">wizAuthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantType">wizAuthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrl">wizAuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrl">wizUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `caChainInput`<sup>Optional</sup> <a name="caChainInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChainInput"></a>

```typescript
public readonly caChainInput: string;
```

- *Type:* string

---

##### `httpClientRetryMaxInput`<sup>Optional</sup> <a name="httpClientRetryMaxInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMaxInput"></a>

```typescript
public readonly httpClientRetryMaxInput: number;
```

- *Type:* number

---

##### `httpClientRetryWaitMaxInput`<sup>Optional</sup> <a name="httpClientRetryWaitMaxInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMaxInput"></a>

```typescript
public readonly httpClientRetryWaitMaxInput: number;
```

- *Type:* number

---

##### `httpClientRetryWaitMinInput`<sup>Optional</sup> <a name="httpClientRetryWaitMinInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMinInput"></a>

```typescript
public readonly httpClientRetryWaitMinInput: number;
```

- *Type:* number

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyInput"></a>

```typescript
public readonly proxyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `proxyServerInput`<sup>Optional</sup> <a name="proxyServerInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServerInput"></a>

```typescript
public readonly proxyServerInput: string;
```

- *Type:* string

---

##### `wizAuthAudienceInput`<sup>Optional</sup> <a name="wizAuthAudienceInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudienceInput"></a>

```typescript
public readonly wizAuthAudienceInput: string;
```

- *Type:* string

---

##### `wizAuthClientIdInput`<sup>Optional</sup> <a name="wizAuthClientIdInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientIdInput"></a>

```typescript
public readonly wizAuthClientIdInput: string;
```

- *Type:* string

---

##### `wizAuthClientSecretInput`<sup>Optional</sup> <a name="wizAuthClientSecretInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecretInput"></a>

```typescript
public readonly wizAuthClientSecretInput: string;
```

- *Type:* string

---

##### `wizAuthGrantTypeInput`<sup>Optional</sup> <a name="wizAuthGrantTypeInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantTypeInput"></a>

```typescript
public readonly wizAuthGrantTypeInput: string;
```

- *Type:* string

---

##### `wizAuthUrlInput`<sup>Optional</sup> <a name="wizAuthUrlInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrlInput"></a>

```typescript
public readonly wizAuthUrlInput: string;
```

- *Type:* string

---

##### `wizUrlInput`<sup>Optional</sup> <a name="wizUrlInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrlInput"></a>

```typescript
public readonly wizUrlInput: string;
```

- *Type:* string

---

##### `caChain`<sup>Optional</sup> <a name="caChain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChain"></a>

```typescript
public readonly caChain: string;
```

- *Type:* string

---

##### `httpClientRetryMax`<sup>Optional</sup> <a name="httpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMax"></a>

```typescript
public readonly httpClientRetryMax: number;
```

- *Type:* number

---

##### `httpClientRetryWaitMax`<sup>Optional</sup> <a name="httpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMax"></a>

```typescript
public readonly httpClientRetryWaitMax: number;
```

- *Type:* number

---

##### `httpClientRetryWaitMin`<sup>Optional</sup> <a name="httpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMin"></a>

```typescript
public readonly httpClientRetryWaitMin: number;
```

- *Type:* number

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxy"></a>

```typescript
public readonly proxy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `proxyServer`<sup>Optional</sup> <a name="proxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServer"></a>

```typescript
public readonly proxyServer: string;
```

- *Type:* string

---

##### `wizAuthAudience`<sup>Optional</sup> <a name="wizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudience"></a>

```typescript
public readonly wizAuthAudience: string;
```

- *Type:* string

---

##### `wizAuthClientId`<sup>Optional</sup> <a name="wizAuthClientId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientId"></a>

```typescript
public readonly wizAuthClientId: string;
```

- *Type:* string

---

##### `wizAuthClientSecret`<sup>Optional</sup> <a name="wizAuthClientSecret" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecret"></a>

```typescript
public readonly wizAuthClientSecret: string;
```

- *Type:* string

---

##### `wizAuthGrantType`<sup>Optional</sup> <a name="wizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantType"></a>

```typescript
public readonly wizAuthGrantType: string;
```

- *Type:* string

---

##### `wizAuthUrl`<sup>Optional</sup> <a name="wizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrl"></a>

```typescript
public readonly wizAuthUrl: string;
```

- *Type:* string

---

##### `wizUrl`<sup>Optional</sup> <a name="wizUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrl"></a>

```typescript
public readonly wizUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WizProviderConfig <a name="WizProviderConfig" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.Initializer"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-wiz'

const wizProviderConfig: provider.WizProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientId">wizAuthClientId</a></code> | <code>string</code> | Your application's Client ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientSecret">wizAuthClientSecret</a></code> | <code>string</code> | Your application's Client Secret. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizUrl">wizUrl</a></code> | <code>string</code> | Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.caChain">caChain</a></code> | <code>string</code> | Base64 encoded PEM of the CA chain used when communicating with Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryMax">httpClientRetryMax</a></code> | <code>number</code> | Maximum retry attempts. - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMax">httpClientRetryWaitMax</a></code> | <code>number</code> | Maximum time to wait before retrying, in seconds. - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMin">httpClientRetryWaitMin</a></code> | <code>number</code> | Minimum time to wait before retrying, in seconds. - Defaults to `1`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxy">proxy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use an http proxy server? (default: false, environment variable: PROXY). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxyServer">proxyServer</a></code> | <code>string</code> | Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthAudience">wizAuthAudience</a></code> | <code>string</code> | Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthGrantType">wizAuthGrantType</a></code> | <code>string</code> | Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthUrl">wizAuthUrl</a></code> | <code>string</code> | The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL). |

---

##### `wizAuthClientId`<sup>Required</sup> <a name="wizAuthClientId" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientId"></a>

```typescript
public readonly wizAuthClientId: string;
```

- *Type:* string

Your application's Client ID.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_client_id WizProvider#wiz_auth_client_id}

---

##### `wizAuthClientSecret`<sup>Required</sup> <a name="wizAuthClientSecret" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientSecret"></a>

```typescript
public readonly wizAuthClientSecret: string;
```

- *Type:* string

Your application's Client Secret.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_SECRET)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_client_secret WizProvider#wiz_auth_client_secret}

---

##### `wizUrl`<sup>Required</sup> <a name="wizUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizUrl"></a>

```typescript
public readonly wizUrl: string;
```

- *Type:* string

Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_url WizProvider#wiz_url}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#alias WizProvider#alias}

---

##### `caChain`<sup>Optional</sup> <a name="caChain" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.caChain"></a>

```typescript
public readonly caChain: string;
```

- *Type:* string

Base64 encoded PEM of the CA chain used when communicating with Wiz.

If a proxy performs TLS interception/inspection, this will be the CA chain for the certificate used by the proxy. The default includes the CAs known to be used by Wiz: `C=IE, O=Baltimore, OU=CyberTrust, CN=Baltimore CyberTrust Root`, `C=US, O=Cloudflare, Inc., CN=Cloudflare Inc ECC CA-3`, `C=US, ST=Arizona, L=Scottsdale, O=Starfield Technologies, Inc., CN=Starfield Services Root Certificate Authority - G2`, `C=US, O=Amazon, CN=Amazon Root CA 1`, `C=US, O=Amazon, OU=Server CA 1B, CN=Amazon`. (environment variable: CA_CHAIN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#ca_chain WizProvider#ca_chain}

---

##### `httpClientRetryMax`<sup>Optional</sup> <a name="httpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryMax"></a>

```typescript
public readonly httpClientRetryMax: number;
```

- *Type:* number

Maximum retry attempts. - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_max WizProvider#http_client_retry_max}

---

##### `httpClientRetryWaitMax`<sup>Optional</sup> <a name="httpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMax"></a>

```typescript
public readonly httpClientRetryWaitMax: number;
```

- *Type:* number

Maximum time to wait before retrying, in seconds. - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_wait_max WizProvider#http_client_retry_wait_max}

---

##### `httpClientRetryWaitMin`<sup>Optional</sup> <a name="httpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMin"></a>

```typescript
public readonly httpClientRetryWaitMin: number;
```

- *Type:* number

Minimum time to wait before retrying, in seconds. - Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_wait_min WizProvider#http_client_retry_wait_min}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxy"></a>

```typescript
public readonly proxy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use an http proxy server? (default: false, environment variable: PROXY).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#proxy WizProvider#proxy}

---

##### `proxyServer`<sup>Optional</sup> <a name="proxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxyServer"></a>

```typescript
public readonly proxyServer: string;
```

- *Type:* string

Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#proxy_server WizProvider#proxy_server}

---

##### `wizAuthAudience`<sup>Optional</sup> <a name="wizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthAudience"></a>

```typescript
public readonly wizAuthAudience: string;
```

- *Type:* string

Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_audience WizProvider#wiz_auth_audience}

---

##### `wizAuthGrantType`<sup>Optional</sup> <a name="wizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthGrantType"></a>

```typescript
public readonly wizAuthGrantType: string;
```

- *Type:* string

Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_grant_type WizProvider#wiz_auth_grant_type}

---

##### `wizAuthUrl`<sup>Optional</sup> <a name="wizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthUrl"></a>

```typescript
public readonly wizAuthUrl: string;
```

- *Type:* string

The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_url WizProvider#wiz_auth_url}

---



