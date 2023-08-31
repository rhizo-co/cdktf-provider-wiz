# `provider`

Refer to the Terraform Registory for docs: [`wiz`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs).

# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-wiz.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WizProvider <a name="WizProvider" id="rhizo-co-terraform-provider-wiz.provider.WizProvider"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs wiz}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/provider"

provider.NewWizProvider(scope Construct, id *string, config WizProviderConfig) WizProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig">WizProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetCaChain` <a name="ResetCaChain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetCaChain"></a>

```go
func ResetCaChain()
```

##### `ResetHttpClientRetryMax` <a name="ResetHttpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryMax"></a>

```go
func ResetHttpClientRetryMax()
```

##### `ResetHttpClientRetryWaitMax` <a name="ResetHttpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMax"></a>

```go
func ResetHttpClientRetryWaitMax()
```

##### `ResetHttpClientRetryWaitMin` <a name="ResetHttpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMin"></a>

```go
func ResetHttpClientRetryWaitMin()
```

##### `ResetProxy` <a name="ResetProxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxy"></a>

```go
func ResetProxy()
```

##### `ResetProxyServer` <a name="ResetProxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxyServer"></a>

```go
func ResetProxyServer()
```

##### `ResetWizAuthAudience` <a name="ResetWizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthAudience"></a>

```go
func ResetWizAuthAudience()
```

##### `ResetWizAuthGrantType` <a name="ResetWizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthGrantType"></a>

```go
func ResetWizAuthGrantType()
```

##### `ResetWizAuthUrl` <a name="ResetWizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthUrl"></a>

```go
func ResetWizAuthUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/provider"

provider.WizProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/provider"

provider.WizProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/provider"

provider.WizProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChainInput">CaChainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMaxInput">HttpClientRetryMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMaxInput">HttpClientRetryWaitMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMinInput">HttpClientRetryWaitMinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyInput">ProxyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServerInput">ProxyServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudienceInput">WizAuthAudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientIdInput">WizAuthClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecretInput">WizAuthClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantTypeInput">WizAuthGrantTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrlInput">WizAuthUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrlInput">WizUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChain">CaChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMax">HttpClientRetryMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMax">HttpClientRetryWaitMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMin">HttpClientRetryWaitMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxy">Proxy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServer">ProxyServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudience">WizAuthAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientId">WizAuthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecret">WizAuthClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantType">WizAuthGrantType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrl">WizAuthUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrl">WizUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `CaChainInput`<sup>Optional</sup> <a name="CaChainInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChainInput"></a>

```go
func CaChainInput() *string
```

- *Type:* *string

---

##### `HttpClientRetryMaxInput`<sup>Optional</sup> <a name="HttpClientRetryMaxInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMaxInput"></a>

```go
func HttpClientRetryMaxInput() *f64
```

- *Type:* *f64

---

##### `HttpClientRetryWaitMaxInput`<sup>Optional</sup> <a name="HttpClientRetryWaitMaxInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMaxInput"></a>

```go
func HttpClientRetryWaitMaxInput() *f64
```

- *Type:* *f64

---

##### `HttpClientRetryWaitMinInput`<sup>Optional</sup> <a name="HttpClientRetryWaitMinInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMinInput"></a>

```go
func HttpClientRetryWaitMinInput() *f64
```

- *Type:* *f64

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyInput"></a>

```go
func ProxyInput() interface{}
```

- *Type:* interface{}

---

##### `ProxyServerInput`<sup>Optional</sup> <a name="ProxyServerInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServerInput"></a>

```go
func ProxyServerInput() *string
```

- *Type:* *string

---

##### `WizAuthAudienceInput`<sup>Optional</sup> <a name="WizAuthAudienceInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudienceInput"></a>

```go
func WizAuthAudienceInput() *string
```

- *Type:* *string

---

##### `WizAuthClientIdInput`<sup>Optional</sup> <a name="WizAuthClientIdInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientIdInput"></a>

```go
func WizAuthClientIdInput() *string
```

- *Type:* *string

---

##### `WizAuthClientSecretInput`<sup>Optional</sup> <a name="WizAuthClientSecretInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecretInput"></a>

```go
func WizAuthClientSecretInput() *string
```

- *Type:* *string

---

##### `WizAuthGrantTypeInput`<sup>Optional</sup> <a name="WizAuthGrantTypeInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantTypeInput"></a>

```go
func WizAuthGrantTypeInput() *string
```

- *Type:* *string

---

##### `WizAuthUrlInput`<sup>Optional</sup> <a name="WizAuthUrlInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrlInput"></a>

```go
func WizAuthUrlInput() *string
```

- *Type:* *string

---

##### `WizUrlInput`<sup>Optional</sup> <a name="WizUrlInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrlInput"></a>

```go
func WizUrlInput() *string
```

- *Type:* *string

---

##### `CaChain`<sup>Optional</sup> <a name="CaChain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChain"></a>

```go
func CaChain() *string
```

- *Type:* *string

---

##### `HttpClientRetryMax`<sup>Optional</sup> <a name="HttpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMax"></a>

```go
func HttpClientRetryMax() *f64
```

- *Type:* *f64

---

##### `HttpClientRetryWaitMax`<sup>Optional</sup> <a name="HttpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMax"></a>

```go
func HttpClientRetryWaitMax() *f64
```

- *Type:* *f64

---

##### `HttpClientRetryWaitMin`<sup>Optional</sup> <a name="HttpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMin"></a>

```go
func HttpClientRetryWaitMin() *f64
```

- *Type:* *f64

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxy"></a>

```go
func Proxy() interface{}
```

- *Type:* interface{}

---

##### `ProxyServer`<sup>Optional</sup> <a name="ProxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServer"></a>

```go
func ProxyServer() *string
```

- *Type:* *string

---

##### `WizAuthAudience`<sup>Optional</sup> <a name="WizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudience"></a>

```go
func WizAuthAudience() *string
```

- *Type:* *string

---

##### `WizAuthClientId`<sup>Optional</sup> <a name="WizAuthClientId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientId"></a>

```go
func WizAuthClientId() *string
```

- *Type:* *string

---

##### `WizAuthClientSecret`<sup>Optional</sup> <a name="WizAuthClientSecret" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecret"></a>

```go
func WizAuthClientSecret() *string
```

- *Type:* *string

---

##### `WizAuthGrantType`<sup>Optional</sup> <a name="WizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantType"></a>

```go
func WizAuthGrantType() *string
```

- *Type:* *string

---

##### `WizAuthUrl`<sup>Optional</sup> <a name="WizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrl"></a>

```go
func WizAuthUrl() *string
```

- *Type:* *string

---

##### `WizUrl`<sup>Optional</sup> <a name="WizUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrl"></a>

```go
func WizUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WizProviderConfig <a name="WizProviderConfig" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/provider"

&provider.WizProviderConfig {
	WizAuthClientId: *string,
	WizAuthClientSecret: *string,
	WizUrl: *string,
	Alias: *string,
	CaChain: *string,
	HttpClientRetryMax: *f64,
	HttpClientRetryWaitMax: *f64,
	HttpClientRetryWaitMin: *f64,
	Proxy: interface{},
	ProxyServer: *string,
	WizAuthAudience: *string,
	WizAuthGrantType: *string,
	WizAuthUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientId">WizAuthClientId</a></code> | <code>*string</code> | Your application's Client ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientSecret">WizAuthClientSecret</a></code> | <code>*string</code> | Your application's Client Secret. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizUrl">WizUrl</a></code> | <code>*string</code> | Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.caChain">CaChain</a></code> | <code>*string</code> | Base64 encoded PEM of the CA chain used when communicating with Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryMax">HttpClientRetryMax</a></code> | <code>*f64</code> | Maximum retry attempts. - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMax">HttpClientRetryWaitMax</a></code> | <code>*f64</code> | Maximum time to wait before retrying, in seconds. - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMin">HttpClientRetryWaitMin</a></code> | <code>*f64</code> | Minimum time to wait before retrying, in seconds. - Defaults to `1`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxy">Proxy</a></code> | <code>interface{}</code> | Use an http proxy server? (default: false, environment variable: PROXY). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxyServer">ProxyServer</a></code> | <code>*string</code> | Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthAudience">WizAuthAudience</a></code> | <code>*string</code> | Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthGrantType">WizAuthGrantType</a></code> | <code>*string</code> | Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthUrl">WizAuthUrl</a></code> | <code>*string</code> | The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL). |

---

##### `WizAuthClientId`<sup>Required</sup> <a name="WizAuthClientId" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientId"></a>

```go
WizAuthClientId *string
```

- *Type:* *string

Your application's Client ID.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_client_id WizProvider#wiz_auth_client_id}

---

##### `WizAuthClientSecret`<sup>Required</sup> <a name="WizAuthClientSecret" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientSecret"></a>

```go
WizAuthClientSecret *string
```

- *Type:* *string

Your application's Client Secret.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_SECRET)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_client_secret WizProvider#wiz_auth_client_secret}

---

##### `WizUrl`<sup>Required</sup> <a name="WizUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizUrl"></a>

```go
WizUrl *string
```

- *Type:* *string

Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_url WizProvider#wiz_url}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#alias WizProvider#alias}

---

##### `CaChain`<sup>Optional</sup> <a name="CaChain" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.caChain"></a>

```go
CaChain *string
```

- *Type:* *string

Base64 encoded PEM of the CA chain used when communicating with Wiz.

If a proxy performs TLS interception/inspection, this will be the CA chain for the certificate used by the proxy. The default includes the CAs known to be used by Wiz: `C=IE, O=Baltimore, OU=CyberTrust, CN=Baltimore CyberTrust Root`, `C=US, O=Cloudflare, Inc., CN=Cloudflare Inc ECC CA-3`, `C=US, ST=Arizona, L=Scottsdale, O=Starfield Technologies, Inc., CN=Starfield Services Root Certificate Authority - G2`, `C=US, O=Amazon, CN=Amazon Root CA 1`, `C=US, O=Amazon, OU=Server CA 1B, CN=Amazon`. (environment variable: CA_CHAIN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#ca_chain WizProvider#ca_chain}

---

##### `HttpClientRetryMax`<sup>Optional</sup> <a name="HttpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryMax"></a>

```go
HttpClientRetryMax *f64
```

- *Type:* *f64

Maximum retry attempts. - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_max WizProvider#http_client_retry_max}

---

##### `HttpClientRetryWaitMax`<sup>Optional</sup> <a name="HttpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMax"></a>

```go
HttpClientRetryWaitMax *f64
```

- *Type:* *f64

Maximum time to wait before retrying, in seconds. - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_wait_max WizProvider#http_client_retry_wait_max}

---

##### `HttpClientRetryWaitMin`<sup>Optional</sup> <a name="HttpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMin"></a>

```go
HttpClientRetryWaitMin *f64
```

- *Type:* *f64

Minimum time to wait before retrying, in seconds. - Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_wait_min WizProvider#http_client_retry_wait_min}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxy"></a>

```go
Proxy interface{}
```

- *Type:* interface{}

Use an http proxy server? (default: false, environment variable: PROXY).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#proxy WizProvider#proxy}

---

##### `ProxyServer`<sup>Optional</sup> <a name="ProxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxyServer"></a>

```go
ProxyServer *string
```

- *Type:* *string

Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#proxy_server WizProvider#proxy_server}

---

##### `WizAuthAudience`<sup>Optional</sup> <a name="WizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthAudience"></a>

```go
WizAuthAudience *string
```

- *Type:* *string

Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_audience WizProvider#wiz_auth_audience}

---

##### `WizAuthGrantType`<sup>Optional</sup> <a name="WizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthGrantType"></a>

```go
WizAuthGrantType *string
```

- *Type:* *string

Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_grant_type WizProvider#wiz_auth_grant_type}

---

##### `WizAuthUrl`<sup>Optional</sup> <a name="WizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthUrl"></a>

```go
WizAuthUrl *string
```

- *Type:* *string

The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_url WizProvider#wiz_auth_url}

---



