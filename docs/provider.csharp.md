# `provider`

Refer to the Terraform Registory for docs: [`wiz`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs).

# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-wiz.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WizProvider <a name="WizProvider" id="rhizo-co-terraform-provider-wiz.provider.WizProvider"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs wiz}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new WizProvider(Construct Scope, string Id, WizProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig">WizProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig">WizProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetCaChain">ResetCaChain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryMax">ResetHttpClientRetryMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMax">ResetHttpClientRetryWaitMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMin">ResetHttpClientRetryWaitMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxyServer">ResetProxyServer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthAudience">ResetWizAuthAudience</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthGrantType">ResetWizAuthGrantType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthUrl">ResetWizAuthUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetCaChain` <a name="ResetCaChain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetCaChain"></a>

```csharp
private void ResetCaChain()
```

##### `ResetHttpClientRetryMax` <a name="ResetHttpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryMax"></a>

```csharp
private void ResetHttpClientRetryMax()
```

##### `ResetHttpClientRetryWaitMax` <a name="ResetHttpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMax"></a>

```csharp
private void ResetHttpClientRetryWaitMax()
```

##### `ResetHttpClientRetryWaitMin` <a name="ResetHttpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMin"></a>

```csharp
private void ResetHttpClientRetryWaitMin()
```

##### `ResetProxy` <a name="ResetProxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxy"></a>

```csharp
private void ResetProxy()
```

##### `ResetProxyServer` <a name="ResetProxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxyServer"></a>

```csharp
private void ResetProxyServer()
```

##### `ResetWizAuthAudience` <a name="ResetWizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthAudience"></a>

```csharp
private void ResetWizAuthAudience()
```

##### `ResetWizAuthGrantType` <a name="ResetWizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthGrantType"></a>

```csharp
private void ResetWizAuthGrantType()
```

##### `ResetWizAuthUrl` <a name="ResetWizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthUrl"></a>

```csharp
private void ResetWizAuthUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

WizProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

WizProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

WizProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChainInput">CaChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMaxInput">HttpClientRetryMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMaxInput">HttpClientRetryWaitMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMinInput">HttpClientRetryWaitMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyInput">ProxyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServerInput">ProxyServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudienceInput">WizAuthAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientIdInput">WizAuthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecretInput">WizAuthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantTypeInput">WizAuthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrlInput">WizAuthUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrlInput">WizUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChain">CaChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMax">HttpClientRetryMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMax">HttpClientRetryWaitMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMin">HttpClientRetryWaitMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxy">Proxy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServer">ProxyServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudience">WizAuthAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientId">WizAuthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecret">WizAuthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantType">WizAuthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrl">WizAuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrl">WizUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `CaChainInput`<sup>Optional</sup> <a name="CaChainInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChainInput"></a>

```csharp
public string CaChainInput { get; }
```

- *Type:* string

---

##### `HttpClientRetryMaxInput`<sup>Optional</sup> <a name="HttpClientRetryMaxInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMaxInput"></a>

```csharp
public double HttpClientRetryMaxInput { get; }
```

- *Type:* double

---

##### `HttpClientRetryWaitMaxInput`<sup>Optional</sup> <a name="HttpClientRetryWaitMaxInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMaxInput"></a>

```csharp
public double HttpClientRetryWaitMaxInput { get; }
```

- *Type:* double

---

##### `HttpClientRetryWaitMinInput`<sup>Optional</sup> <a name="HttpClientRetryWaitMinInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMinInput"></a>

```csharp
public double HttpClientRetryWaitMinInput { get; }
```

- *Type:* double

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyInput"></a>

```csharp
public object ProxyInput { get; }
```

- *Type:* object

---

##### `ProxyServerInput`<sup>Optional</sup> <a name="ProxyServerInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServerInput"></a>

```csharp
public string ProxyServerInput { get; }
```

- *Type:* string

---

##### `WizAuthAudienceInput`<sup>Optional</sup> <a name="WizAuthAudienceInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudienceInput"></a>

```csharp
public string WizAuthAudienceInput { get; }
```

- *Type:* string

---

##### `WizAuthClientIdInput`<sup>Optional</sup> <a name="WizAuthClientIdInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientIdInput"></a>

```csharp
public string WizAuthClientIdInput { get; }
```

- *Type:* string

---

##### `WizAuthClientSecretInput`<sup>Optional</sup> <a name="WizAuthClientSecretInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecretInput"></a>

```csharp
public string WizAuthClientSecretInput { get; }
```

- *Type:* string

---

##### `WizAuthGrantTypeInput`<sup>Optional</sup> <a name="WizAuthGrantTypeInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantTypeInput"></a>

```csharp
public string WizAuthGrantTypeInput { get; }
```

- *Type:* string

---

##### `WizAuthUrlInput`<sup>Optional</sup> <a name="WizAuthUrlInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrlInput"></a>

```csharp
public string WizAuthUrlInput { get; }
```

- *Type:* string

---

##### `WizUrlInput`<sup>Optional</sup> <a name="WizUrlInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrlInput"></a>

```csharp
public string WizUrlInput { get; }
```

- *Type:* string

---

##### `CaChain`<sup>Optional</sup> <a name="CaChain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChain"></a>

```csharp
public string CaChain { get; }
```

- *Type:* string

---

##### `HttpClientRetryMax`<sup>Optional</sup> <a name="HttpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMax"></a>

```csharp
public double HttpClientRetryMax { get; }
```

- *Type:* double

---

##### `HttpClientRetryWaitMax`<sup>Optional</sup> <a name="HttpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMax"></a>

```csharp
public double HttpClientRetryWaitMax { get; }
```

- *Type:* double

---

##### `HttpClientRetryWaitMin`<sup>Optional</sup> <a name="HttpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMin"></a>

```csharp
public double HttpClientRetryWaitMin { get; }
```

- *Type:* double

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxy"></a>

```csharp
public object Proxy { get; }
```

- *Type:* object

---

##### `ProxyServer`<sup>Optional</sup> <a name="ProxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServer"></a>

```csharp
public string ProxyServer { get; }
```

- *Type:* string

---

##### `WizAuthAudience`<sup>Optional</sup> <a name="WizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudience"></a>

```csharp
public string WizAuthAudience { get; }
```

- *Type:* string

---

##### `WizAuthClientId`<sup>Optional</sup> <a name="WizAuthClientId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientId"></a>

```csharp
public string WizAuthClientId { get; }
```

- *Type:* string

---

##### `WizAuthClientSecret`<sup>Optional</sup> <a name="WizAuthClientSecret" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecret"></a>

```csharp
public string WizAuthClientSecret { get; }
```

- *Type:* string

---

##### `WizAuthGrantType`<sup>Optional</sup> <a name="WizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantType"></a>

```csharp
public string WizAuthGrantType { get; }
```

- *Type:* string

---

##### `WizAuthUrl`<sup>Optional</sup> <a name="WizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrl"></a>

```csharp
public string WizAuthUrl { get; }
```

- *Type:* string

---

##### `WizUrl`<sup>Optional</sup> <a name="WizUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrl"></a>

```csharp
public string WizUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WizProviderConfig <a name="WizProviderConfig" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new WizProviderConfig {
    string WizAuthClientId,
    string WizAuthClientSecret,
    string WizUrl,
    string Alias = null,
    string CaChain = null,
    double HttpClientRetryMax = null,
    double HttpClientRetryWaitMax = null,
    double HttpClientRetryWaitMin = null,
    object Proxy = null,
    string ProxyServer = null,
    string WizAuthAudience = null,
    string WizAuthGrantType = null,
    string WizAuthUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientId">WizAuthClientId</a></code> | <code>string</code> | Your application's Client ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientSecret">WizAuthClientSecret</a></code> | <code>string</code> | Your application's Client Secret. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizUrl">WizUrl</a></code> | <code>string</code> | Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.caChain">CaChain</a></code> | <code>string</code> | Base64 encoded PEM of the CA chain used when communicating with Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryMax">HttpClientRetryMax</a></code> | <code>double</code> | Maximum retry attempts. - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMax">HttpClientRetryWaitMax</a></code> | <code>double</code> | Maximum time to wait before retrying, in seconds. - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMin">HttpClientRetryWaitMin</a></code> | <code>double</code> | Minimum time to wait before retrying, in seconds. - Defaults to `1`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxy">Proxy</a></code> | <code>object</code> | Use an http proxy server? (default: false, environment variable: PROXY). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxyServer">ProxyServer</a></code> | <code>string</code> | Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthAudience">WizAuthAudience</a></code> | <code>string</code> | Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthGrantType">WizAuthGrantType</a></code> | <code>string</code> | Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthUrl">WizAuthUrl</a></code> | <code>string</code> | The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL). |

---

##### `WizAuthClientId`<sup>Required</sup> <a name="WizAuthClientId" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientId"></a>

```csharp
public string WizAuthClientId { get; set; }
```

- *Type:* string

Your application's Client ID.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_client_id WizProvider#wiz_auth_client_id}

---

##### `WizAuthClientSecret`<sup>Required</sup> <a name="WizAuthClientSecret" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientSecret"></a>

```csharp
public string WizAuthClientSecret { get; set; }
```

- *Type:* string

Your application's Client Secret.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_SECRET)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_client_secret WizProvider#wiz_auth_client_secret}

---

##### `WizUrl`<sup>Required</sup> <a name="WizUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizUrl"></a>

```csharp
public string WizUrl { get; set; }
```

- *Type:* string

Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_url WizProvider#wiz_url}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#alias WizProvider#alias}

---

##### `CaChain`<sup>Optional</sup> <a name="CaChain" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.caChain"></a>

```csharp
public string CaChain { get; set; }
```

- *Type:* string

Base64 encoded PEM of the CA chain used when communicating with Wiz.

If a proxy performs TLS interception/inspection, this will be the CA chain for the certificate used by the proxy. The default includes the CAs known to be used by Wiz: `C=IE, O=Baltimore, OU=CyberTrust, CN=Baltimore CyberTrust Root`, `C=US, O=Cloudflare, Inc., CN=Cloudflare Inc ECC CA-3`, `C=US, ST=Arizona, L=Scottsdale, O=Starfield Technologies, Inc., CN=Starfield Services Root Certificate Authority - G2`, `C=US, O=Amazon, CN=Amazon Root CA 1`, `C=US, O=Amazon, OU=Server CA 1B, CN=Amazon`. (environment variable: CA_CHAIN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#ca_chain WizProvider#ca_chain}

---

##### `HttpClientRetryMax`<sup>Optional</sup> <a name="HttpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryMax"></a>

```csharp
public double HttpClientRetryMax { get; set; }
```

- *Type:* double

Maximum retry attempts. - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_max WizProvider#http_client_retry_max}

---

##### `HttpClientRetryWaitMax`<sup>Optional</sup> <a name="HttpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMax"></a>

```csharp
public double HttpClientRetryWaitMax { get; set; }
```

- *Type:* double

Maximum time to wait before retrying, in seconds. - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_wait_max WizProvider#http_client_retry_wait_max}

---

##### `HttpClientRetryWaitMin`<sup>Optional</sup> <a name="HttpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMin"></a>

```csharp
public double HttpClientRetryWaitMin { get; set; }
```

- *Type:* double

Minimum time to wait before retrying, in seconds. - Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_wait_min WizProvider#http_client_retry_wait_min}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxy"></a>

```csharp
public object Proxy { get; set; }
```

- *Type:* object

Use an http proxy server? (default: false, environment variable: PROXY).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#proxy WizProvider#proxy}

---

##### `ProxyServer`<sup>Optional</sup> <a name="ProxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxyServer"></a>

```csharp
public string ProxyServer { get; set; }
```

- *Type:* string

Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#proxy_server WizProvider#proxy_server}

---

##### `WizAuthAudience`<sup>Optional</sup> <a name="WizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthAudience"></a>

```csharp
public string WizAuthAudience { get; set; }
```

- *Type:* string

Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_audience WizProvider#wiz_auth_audience}

---

##### `WizAuthGrantType`<sup>Optional</sup> <a name="WizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthGrantType"></a>

```csharp
public string WizAuthGrantType { get; set; }
```

- *Type:* string

Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_grant_type WizProvider#wiz_auth_grant_type}

---

##### `WizAuthUrl`<sup>Optional</sup> <a name="WizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthUrl"></a>

```csharp
public string WizAuthUrl { get; set; }
```

- *Type:* string

The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_url WizProvider#wiz_auth_url}

---



