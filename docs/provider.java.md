# `provider`

Refer to the Terraform Registory for docs: [`wiz`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs).

# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-wiz.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WizProvider <a name="WizProvider" id="rhizo-co-terraform-provider-wiz.provider.WizProvider"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs wiz}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.provider.WizProvider;

WizProvider.Builder.create(Construct scope, java.lang.String id)
    .wizAuthClientId(java.lang.String)
    .wizAuthClientSecret(java.lang.String)
    .wizUrl(java.lang.String)
//  .alias(java.lang.String)
//  .caChain(java.lang.String)
//  .httpClientRetryMax(java.lang.Number)
//  .httpClientRetryWaitMax(java.lang.Number)
//  .httpClientRetryWaitMin(java.lang.Number)
//  .proxy(java.lang.Boolean)
//  .proxy(IResolvable)
//  .proxyServer(java.lang.String)
//  .wizAuthAudience(java.lang.String)
//  .wizAuthGrantType(java.lang.String)
//  .wizAuthUrl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthClientId">wizAuthClientId</a></code> | <code>java.lang.String</code> | Your application's Client ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthClientSecret">wizAuthClientSecret</a></code> | <code>java.lang.String</code> | Your application's Client Secret. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizUrl">wizUrl</a></code> | <code>java.lang.String</code> | Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.caChain">caChain</a></code> | <code>java.lang.String</code> | Base64 encoded PEM of the CA chain used when communicating with Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryMax">httpClientRetryMax</a></code> | <code>java.lang.Number</code> | Maximum retry attempts. - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryWaitMax">httpClientRetryWaitMax</a></code> | <code>java.lang.Number</code> | Maximum time to wait before retrying, in seconds. - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryWaitMin">httpClientRetryWaitMin</a></code> | <code>java.lang.Number</code> | Minimum time to wait before retrying, in seconds. - Defaults to `1`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.proxy">proxy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use an http proxy server? (default: false, environment variable: PROXY). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.proxyServer">proxyServer</a></code> | <code>java.lang.String</code> | Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthAudience">wizAuthAudience</a></code> | <code>java.lang.String</code> | Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthGrantType">wizAuthGrantType</a></code> | <code>java.lang.String</code> | Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthUrl">wizAuthUrl</a></code> | <code>java.lang.String</code> | The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `wizAuthClientId`<sup>Required</sup> <a name="wizAuthClientId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthClientId"></a>

- *Type:* java.lang.String

Your application's Client ID.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_client_id WizProvider#wiz_auth_client_id}

---

##### `wizAuthClientSecret`<sup>Required</sup> <a name="wizAuthClientSecret" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthClientSecret"></a>

- *Type:* java.lang.String

Your application's Client Secret.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_SECRET)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_client_secret WizProvider#wiz_auth_client_secret}

---

##### `wizUrl`<sup>Required</sup> <a name="wizUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizUrl"></a>

- *Type:* java.lang.String

Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_url WizProvider#wiz_url}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#alias WizProvider#alias}

---

##### `caChain`<sup>Optional</sup> <a name="caChain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.caChain"></a>

- *Type:* java.lang.String

Base64 encoded PEM of the CA chain used when communicating with Wiz.

If a proxy performs TLS interception/inspection, this will be the CA chain for the certificate used by the proxy. The default includes the CAs known to be used by Wiz: `C=IE, O=Baltimore, OU=CyberTrust, CN=Baltimore CyberTrust Root`, `C=US, O=Cloudflare, Inc., CN=Cloudflare Inc ECC CA-3`, `C=US, ST=Arizona, L=Scottsdale, O=Starfield Technologies, Inc., CN=Starfield Services Root Certificate Authority - G2`, `C=US, O=Amazon, CN=Amazon Root CA 1`, `C=US, O=Amazon, OU=Server CA 1B, CN=Amazon`. (environment variable: CA_CHAIN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#ca_chain WizProvider#ca_chain}

---

##### `httpClientRetryMax`<sup>Optional</sup> <a name="httpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryMax"></a>

- *Type:* java.lang.Number

Maximum retry attempts. - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_max WizProvider#http_client_retry_max}

---

##### `httpClientRetryWaitMax`<sup>Optional</sup> <a name="httpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryWaitMax"></a>

- *Type:* java.lang.Number

Maximum time to wait before retrying, in seconds. - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_wait_max WizProvider#http_client_retry_wait_max}

---

##### `httpClientRetryWaitMin`<sup>Optional</sup> <a name="httpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryWaitMin"></a>

- *Type:* java.lang.Number

Minimum time to wait before retrying, in seconds. - Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_wait_min WizProvider#http_client_retry_wait_min}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.proxy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use an http proxy server? (default: false, environment variable: PROXY).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#proxy WizProvider#proxy}

---

##### `proxyServer`<sup>Optional</sup> <a name="proxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.proxyServer"></a>

- *Type:* java.lang.String

Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#proxy_server WizProvider#proxy_server}

---

##### `wizAuthAudience`<sup>Optional</sup> <a name="wizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthAudience"></a>

- *Type:* java.lang.String

Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_audience WizProvider#wiz_auth_audience}

---

##### `wizAuthGrantType`<sup>Optional</sup> <a name="wizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthGrantType"></a>

- *Type:* java.lang.String

Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_grant_type WizProvider#wiz_auth_grant_type}

---

##### `wizAuthUrl`<sup>Optional</sup> <a name="wizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthUrl"></a>

- *Type:* java.lang.String

The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_url WizProvider#wiz_auth_url}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetCaChain` <a name="resetCaChain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetCaChain"></a>

```java
public void resetCaChain()
```

##### `resetHttpClientRetryMax` <a name="resetHttpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryMax"></a>

```java
public void resetHttpClientRetryMax()
```

##### `resetHttpClientRetryWaitMax` <a name="resetHttpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMax"></a>

```java
public void resetHttpClientRetryWaitMax()
```

##### `resetHttpClientRetryWaitMin` <a name="resetHttpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMin"></a>

```java
public void resetHttpClientRetryWaitMin()
```

##### `resetProxy` <a name="resetProxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxy"></a>

```java
public void resetProxy()
```

##### `resetProxyServer` <a name="resetProxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxyServer"></a>

```java
public void resetProxyServer()
```

##### `resetWizAuthAudience` <a name="resetWizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthAudience"></a>

```java
public void resetWizAuthAudience()
```

##### `resetWizAuthGrantType` <a name="resetWizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthGrantType"></a>

```java
public void resetWizAuthGrantType()
```

##### `resetWizAuthUrl` <a name="resetWizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthUrl"></a>

```java
public void resetWizAuthUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.provider.WizProvider;

WizProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.provider.WizProvider;

WizProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.wiz.provider.WizProvider;

WizProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChainInput">caChainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMaxInput">httpClientRetryMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMaxInput">httpClientRetryWaitMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMinInput">httpClientRetryWaitMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyInput">proxyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServerInput">proxyServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudienceInput">wizAuthAudienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientIdInput">wizAuthClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecretInput">wizAuthClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantTypeInput">wizAuthGrantTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrlInput">wizAuthUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrlInput">wizUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChain">caChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMax">httpClientRetryMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMax">httpClientRetryWaitMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMin">httpClientRetryWaitMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxy">proxy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServer">proxyServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudience">wizAuthAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientId">wizAuthClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecret">wizAuthClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantType">wizAuthGrantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrl">wizAuthUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrl">wizUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `caChainInput`<sup>Optional</sup> <a name="caChainInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChainInput"></a>

```java
public java.lang.String getCaChainInput();
```

- *Type:* java.lang.String

---

##### `httpClientRetryMaxInput`<sup>Optional</sup> <a name="httpClientRetryMaxInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMaxInput"></a>

```java
public java.lang.Number getHttpClientRetryMaxInput();
```

- *Type:* java.lang.Number

---

##### `httpClientRetryWaitMaxInput`<sup>Optional</sup> <a name="httpClientRetryWaitMaxInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMaxInput"></a>

```java
public java.lang.Number getHttpClientRetryWaitMaxInput();
```

- *Type:* java.lang.Number

---

##### `httpClientRetryWaitMinInput`<sup>Optional</sup> <a name="httpClientRetryWaitMinInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMinInput"></a>

```java
public java.lang.Number getHttpClientRetryWaitMinInput();
```

- *Type:* java.lang.Number

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyInput"></a>

```java
public java.lang.Object getProxyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `proxyServerInput`<sup>Optional</sup> <a name="proxyServerInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServerInput"></a>

```java
public java.lang.String getProxyServerInput();
```

- *Type:* java.lang.String

---

##### `wizAuthAudienceInput`<sup>Optional</sup> <a name="wizAuthAudienceInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudienceInput"></a>

```java
public java.lang.String getWizAuthAudienceInput();
```

- *Type:* java.lang.String

---

##### `wizAuthClientIdInput`<sup>Optional</sup> <a name="wizAuthClientIdInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientIdInput"></a>

```java
public java.lang.String getWizAuthClientIdInput();
```

- *Type:* java.lang.String

---

##### `wizAuthClientSecretInput`<sup>Optional</sup> <a name="wizAuthClientSecretInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecretInput"></a>

```java
public java.lang.String getWizAuthClientSecretInput();
```

- *Type:* java.lang.String

---

##### `wizAuthGrantTypeInput`<sup>Optional</sup> <a name="wizAuthGrantTypeInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantTypeInput"></a>

```java
public java.lang.String getWizAuthGrantTypeInput();
```

- *Type:* java.lang.String

---

##### `wizAuthUrlInput`<sup>Optional</sup> <a name="wizAuthUrlInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrlInput"></a>

```java
public java.lang.String getWizAuthUrlInput();
```

- *Type:* java.lang.String

---

##### `wizUrlInput`<sup>Optional</sup> <a name="wizUrlInput" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrlInput"></a>

```java
public java.lang.String getWizUrlInput();
```

- *Type:* java.lang.String

---

##### `caChain`<sup>Optional</sup> <a name="caChain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChain"></a>

```java
public java.lang.String getCaChain();
```

- *Type:* java.lang.String

---

##### `httpClientRetryMax`<sup>Optional</sup> <a name="httpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMax"></a>

```java
public java.lang.Number getHttpClientRetryMax();
```

- *Type:* java.lang.Number

---

##### `httpClientRetryWaitMax`<sup>Optional</sup> <a name="httpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMax"></a>

```java
public java.lang.Number getHttpClientRetryWaitMax();
```

- *Type:* java.lang.Number

---

##### `httpClientRetryWaitMin`<sup>Optional</sup> <a name="httpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMin"></a>

```java
public java.lang.Number getHttpClientRetryWaitMin();
```

- *Type:* java.lang.Number

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxy"></a>

```java
public java.lang.Object getProxy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `proxyServer`<sup>Optional</sup> <a name="proxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServer"></a>

```java
public java.lang.String getProxyServer();
```

- *Type:* java.lang.String

---

##### `wizAuthAudience`<sup>Optional</sup> <a name="wizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudience"></a>

```java
public java.lang.String getWizAuthAudience();
```

- *Type:* java.lang.String

---

##### `wizAuthClientId`<sup>Optional</sup> <a name="wizAuthClientId" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientId"></a>

```java
public java.lang.String getWizAuthClientId();
```

- *Type:* java.lang.String

---

##### `wizAuthClientSecret`<sup>Optional</sup> <a name="wizAuthClientSecret" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecret"></a>

```java
public java.lang.String getWizAuthClientSecret();
```

- *Type:* java.lang.String

---

##### `wizAuthGrantType`<sup>Optional</sup> <a name="wizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantType"></a>

```java
public java.lang.String getWizAuthGrantType();
```

- *Type:* java.lang.String

---

##### `wizAuthUrl`<sup>Optional</sup> <a name="wizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrl"></a>

```java
public java.lang.String getWizAuthUrl();
```

- *Type:* java.lang.String

---

##### `wizUrl`<sup>Optional</sup> <a name="wizUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrl"></a>

```java
public java.lang.String getWizUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WizProviderConfig <a name="WizProviderConfig" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.provider.WizProviderConfig;

WizProviderConfig.builder()
    .wizAuthClientId(java.lang.String)
    .wizAuthClientSecret(java.lang.String)
    .wizUrl(java.lang.String)
//  .alias(java.lang.String)
//  .caChain(java.lang.String)
//  .httpClientRetryMax(java.lang.Number)
//  .httpClientRetryWaitMax(java.lang.Number)
//  .httpClientRetryWaitMin(java.lang.Number)
//  .proxy(java.lang.Boolean)
//  .proxy(IResolvable)
//  .proxyServer(java.lang.String)
//  .wizAuthAudience(java.lang.String)
//  .wizAuthGrantType(java.lang.String)
//  .wizAuthUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientId">wizAuthClientId</a></code> | <code>java.lang.String</code> | Your application's Client ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientSecret">wizAuthClientSecret</a></code> | <code>java.lang.String</code> | Your application's Client Secret. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizUrl">wizUrl</a></code> | <code>java.lang.String</code> | Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.caChain">caChain</a></code> | <code>java.lang.String</code> | Base64 encoded PEM of the CA chain used when communicating with Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryMax">httpClientRetryMax</a></code> | <code>java.lang.Number</code> | Maximum retry attempts. - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMax">httpClientRetryWaitMax</a></code> | <code>java.lang.Number</code> | Maximum time to wait before retrying, in seconds. - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMin">httpClientRetryWaitMin</a></code> | <code>java.lang.Number</code> | Minimum time to wait before retrying, in seconds. - Defaults to `1`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxy">proxy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use an http proxy server? (default: false, environment variable: PROXY). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxyServer">proxyServer</a></code> | <code>java.lang.String</code> | Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthAudience">wizAuthAudience</a></code> | <code>java.lang.String</code> | Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthGrantType">wizAuthGrantType</a></code> | <code>java.lang.String</code> | Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthUrl">wizAuthUrl</a></code> | <code>java.lang.String</code> | The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL). |

---

##### `wizAuthClientId`<sup>Required</sup> <a name="wizAuthClientId" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientId"></a>

```java
public java.lang.String getWizAuthClientId();
```

- *Type:* java.lang.String

Your application's Client ID.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_client_id WizProvider#wiz_auth_client_id}

---

##### `wizAuthClientSecret`<sup>Required</sup> <a name="wizAuthClientSecret" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientSecret"></a>

```java
public java.lang.String getWizAuthClientSecret();
```

- *Type:* java.lang.String

Your application's Client Secret.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_SECRET)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_client_secret WizProvider#wiz_auth_client_secret}

---

##### `wizUrl`<sup>Required</sup> <a name="wizUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizUrl"></a>

```java
public java.lang.String getWizUrl();
```

- *Type:* java.lang.String

Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_url WizProvider#wiz_url}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#alias WizProvider#alias}

---

##### `caChain`<sup>Optional</sup> <a name="caChain" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.caChain"></a>

```java
public java.lang.String getCaChain();
```

- *Type:* java.lang.String

Base64 encoded PEM of the CA chain used when communicating with Wiz.

If a proxy performs TLS interception/inspection, this will be the CA chain for the certificate used by the proxy. The default includes the CAs known to be used by Wiz: `C=IE, O=Baltimore, OU=CyberTrust, CN=Baltimore CyberTrust Root`, `C=US, O=Cloudflare, Inc., CN=Cloudflare Inc ECC CA-3`, `C=US, ST=Arizona, L=Scottsdale, O=Starfield Technologies, Inc., CN=Starfield Services Root Certificate Authority - G2`, `C=US, O=Amazon, CN=Amazon Root CA 1`, `C=US, O=Amazon, OU=Server CA 1B, CN=Amazon`. (environment variable: CA_CHAIN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#ca_chain WizProvider#ca_chain}

---

##### `httpClientRetryMax`<sup>Optional</sup> <a name="httpClientRetryMax" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryMax"></a>

```java
public java.lang.Number getHttpClientRetryMax();
```

- *Type:* java.lang.Number

Maximum retry attempts. - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_max WizProvider#http_client_retry_max}

---

##### `httpClientRetryWaitMax`<sup>Optional</sup> <a name="httpClientRetryWaitMax" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMax"></a>

```java
public java.lang.Number getHttpClientRetryWaitMax();
```

- *Type:* java.lang.Number

Maximum time to wait before retrying, in seconds. - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_wait_max WizProvider#http_client_retry_wait_max}

---

##### `httpClientRetryWaitMin`<sup>Optional</sup> <a name="httpClientRetryWaitMin" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMin"></a>

```java
public java.lang.Number getHttpClientRetryWaitMin();
```

- *Type:* java.lang.Number

Minimum time to wait before retrying, in seconds. - Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#http_client_retry_wait_min WizProvider#http_client_retry_wait_min}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxy"></a>

```java
public java.lang.Object getProxy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use an http proxy server? (default: false, environment variable: PROXY).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#proxy WizProvider#proxy}

---

##### `proxyServer`<sup>Optional</sup> <a name="proxyServer" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxyServer"></a>

```java
public java.lang.String getProxyServer();
```

- *Type:* java.lang.String

Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#proxy_server WizProvider#proxy_server}

---

##### `wizAuthAudience`<sup>Optional</sup> <a name="wizAuthAudience" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthAudience"></a>

```java
public java.lang.String getWizAuthAudience();
```

- *Type:* java.lang.String

Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_audience WizProvider#wiz_auth_audience}

---

##### `wizAuthGrantType`<sup>Optional</sup> <a name="wizAuthGrantType" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthGrantType"></a>

```java
public java.lang.String getWizAuthGrantType();
```

- *Type:* java.lang.String

Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_grant_type WizProvider#wiz_auth_grant_type}

---

##### `wizAuthUrl`<sup>Optional</sup> <a name="wizAuthUrl" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthUrl"></a>

```java
public java.lang.String getWizAuthUrl();
```

- *Type:* java.lang.String

The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs#wiz_auth_url WizProvider#wiz_auth_url}

---



