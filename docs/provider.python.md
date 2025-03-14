# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-wiz.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WizProvider <a name="WizProvider" id="rhizo-co-terraform-provider-wiz.provider.WizProvider"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs wiz}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import provider

provider.WizProvider(
  scope: Construct,
  id: str,
  wiz_auth_client_id: str,
  wiz_auth_client_secret: str,
  wiz_url: str,
  alias: str = None,
  ca_chain: str = None,
  http_client_retry_max: typing.Union[int, float] = None,
  http_client_retry_wait_max: typing.Union[int, float] = None,
  http_client_retry_wait_min: typing.Union[int, float] = None,
  proxy: typing.Union[bool, IResolvable] = None,
  proxy_server: str = None,
  wiz_auth_audience: str = None,
  wiz_auth_grant_type: str = None,
  wiz_auth_url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthClientId">wiz_auth_client_id</a></code> | <code>str</code> | Your application's Client ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthClientSecret">wiz_auth_client_secret</a></code> | <code>str</code> | Your application's Client Secret. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizUrl">wiz_url</a></code> | <code>str</code> | Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.caChain">ca_chain</a></code> | <code>str</code> | Base64 encoded PEM of the CA chain used when communicating with Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryMax">http_client_retry_max</a></code> | <code>typing.Union[int, float]</code> | Maximum retry attempts.     - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryWaitMax">http_client_retry_wait_max</a></code> | <code>typing.Union[int, float]</code> | Maximum time to wait before retrying, in seconds.     - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryWaitMin">http_client_retry_wait_min</a></code> | <code>typing.Union[int, float]</code> | Minimum time to wait before retrying, in seconds.     - Defaults to `1`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.proxy">proxy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use an http proxy server? (default: false, environment variable: PROXY). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.proxyServer">proxy_server</a></code> | <code>str</code> | Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthAudience">wiz_auth_audience</a></code> | <code>str</code> | Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthGrantType">wiz_auth_grant_type</a></code> | <code>str</code> | Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthUrl">wiz_auth_url</a></code> | <code>str</code> | The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `wiz_auth_client_id`<sup>Required</sup> <a name="wiz_auth_client_id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthClientId"></a>

- *Type:* str

Your application's Client ID.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_client_id WizProvider#wiz_auth_client_id}

---

##### `wiz_auth_client_secret`<sup>Required</sup> <a name="wiz_auth_client_secret" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthClientSecret"></a>

- *Type:* str

Your application's Client Secret.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_SECRET)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_client_secret WizProvider#wiz_auth_client_secret}

---

##### `wiz_url`<sup>Required</sup> <a name="wiz_url" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizUrl"></a>

- *Type:* str

Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_url WizProvider#wiz_url}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#alias WizProvider#alias}

---

##### `ca_chain`<sup>Optional</sup> <a name="ca_chain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.caChain"></a>

- *Type:* str

Base64 encoded PEM of the CA chain used when communicating with Wiz.

If a proxy performs TLS interception/inspection, this will be the CA chain for the certificate used by the proxy. The default includes the CAs known to be used by Wiz: `C=IE, O=Baltimore, OU=CyberTrust, CN=Baltimore CyberTrust Root`, `C=US, O=Cloudflare, Inc., CN=Cloudflare Inc ECC CA-3`, `C=US, ST=Arizona, L=Scottsdale, O=Starfield Technologies, Inc., CN=Starfield Services Root Certificate Authority - G2`, `C=US, O=Amazon, CN=Amazon Root CA 1`, `C=US, O=Amazon, OU=Server CA 1B, CN=Amazon`. (environment variable: CA_CHAIN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#ca_chain WizProvider#ca_chain}

---

##### `http_client_retry_max`<sup>Optional</sup> <a name="http_client_retry_max" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryMax"></a>

- *Type:* typing.Union[int, float]

Maximum retry attempts.     - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#http_client_retry_max WizProvider#http_client_retry_max}

---

##### `http_client_retry_wait_max`<sup>Optional</sup> <a name="http_client_retry_wait_max" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryWaitMax"></a>

- *Type:* typing.Union[int, float]

Maximum time to wait before retrying, in seconds.     - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#http_client_retry_wait_max WizProvider#http_client_retry_wait_max}

---

##### `http_client_retry_wait_min`<sup>Optional</sup> <a name="http_client_retry_wait_min" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.httpClientRetryWaitMin"></a>

- *Type:* typing.Union[int, float]

Minimum time to wait before retrying, in seconds.     - Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#http_client_retry_wait_min WizProvider#http_client_retry_wait_min}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.proxy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use an http proxy server? (default: false, environment variable: PROXY).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#proxy WizProvider#proxy}

---

##### `proxy_server`<sup>Optional</sup> <a name="proxy_server" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.proxyServer"></a>

- *Type:* str

Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#proxy_server WizProvider#proxy_server}

---

##### `wiz_auth_audience`<sup>Optional</sup> <a name="wiz_auth_audience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthAudience"></a>

- *Type:* str

Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_audience WizProvider#wiz_auth_audience}

---

##### `wiz_auth_grant_type`<sup>Optional</sup> <a name="wiz_auth_grant_type" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthGrantType"></a>

- *Type:* str

Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_grant_type WizProvider#wiz_auth_grant_type}

---

##### `wiz_auth_url`<sup>Optional</sup> <a name="wiz_auth_url" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.Initializer.parameter.wizAuthUrl"></a>

- *Type:* str

The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_url WizProvider#wiz_auth_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetCaChain">reset_ca_chain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryMax">reset_http_client_retry_max</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMax">reset_http_client_retry_wait_max</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMin">reset_http_client_retry_wait_min</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxy">reset_proxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxyServer">reset_proxy_server</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthAudience">reset_wiz_auth_audience</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthGrantType">reset_wiz_auth_grant_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthUrl">reset_wiz_auth_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_ca_chain` <a name="reset_ca_chain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetCaChain"></a>

```python
def reset_ca_chain() -> None
```

##### `reset_http_client_retry_max` <a name="reset_http_client_retry_max" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryMax"></a>

```python
def reset_http_client_retry_max() -> None
```

##### `reset_http_client_retry_wait_max` <a name="reset_http_client_retry_wait_max" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMax"></a>

```python
def reset_http_client_retry_wait_max() -> None
```

##### `reset_http_client_retry_wait_min` <a name="reset_http_client_retry_wait_min" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetHttpClientRetryWaitMin"></a>

```python
def reset_http_client_retry_wait_min() -> None
```

##### `reset_proxy` <a name="reset_proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxy"></a>

```python
def reset_proxy() -> None
```

##### `reset_proxy_server` <a name="reset_proxy_server" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetProxyServer"></a>

```python
def reset_proxy_server() -> None
```

##### `reset_wiz_auth_audience` <a name="reset_wiz_auth_audience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthAudience"></a>

```python
def reset_wiz_auth_audience() -> None
```

##### `reset_wiz_auth_grant_type` <a name="reset_wiz_auth_grant_type" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthGrantType"></a>

```python
def reset_wiz_auth_grant_type() -> None
```

##### `reset_wiz_auth_url` <a name="reset_wiz_auth_url" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.resetWizAuthUrl"></a>

```python
def reset_wiz_auth_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WizProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import provider

provider.WizProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import provider

provider.WizProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider"></a>

```python
from rhizo-co_cdktf_provider_wiz import provider

provider.WizProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_wiz import provider

provider.WizProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WizProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WizProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WizProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WizProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChainInput">ca_chain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMaxInput">http_client_retry_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMaxInput">http_client_retry_wait_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMinInput">http_client_retry_wait_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyInput">proxy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServerInput">proxy_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudienceInput">wiz_auth_audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientIdInput">wiz_auth_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecretInput">wiz_auth_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantTypeInput">wiz_auth_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrlInput">wiz_auth_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrlInput">wiz_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChain">ca_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMax">http_client_retry_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMax">http_client_retry_wait_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMin">http_client_retry_wait_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxy">proxy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServer">proxy_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudience">wiz_auth_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientId">wiz_auth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecret">wiz_auth_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantType">wiz_auth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrl">wiz_auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrl">wiz_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `ca_chain_input`<sup>Optional</sup> <a name="ca_chain_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChainInput"></a>

```python
ca_chain_input: str
```

- *Type:* str

---

##### `http_client_retry_max_input`<sup>Optional</sup> <a name="http_client_retry_max_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMaxInput"></a>

```python
http_client_retry_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_client_retry_wait_max_input`<sup>Optional</sup> <a name="http_client_retry_wait_max_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMaxInput"></a>

```python
http_client_retry_wait_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_client_retry_wait_min_input`<sup>Optional</sup> <a name="http_client_retry_wait_min_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMinInput"></a>

```python
http_client_retry_wait_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_input`<sup>Optional</sup> <a name="proxy_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyInput"></a>

```python
proxy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proxy_server_input`<sup>Optional</sup> <a name="proxy_server_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServerInput"></a>

```python
proxy_server_input: str
```

- *Type:* str

---

##### `wiz_auth_audience_input`<sup>Optional</sup> <a name="wiz_auth_audience_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudienceInput"></a>

```python
wiz_auth_audience_input: str
```

- *Type:* str

---

##### `wiz_auth_client_id_input`<sup>Optional</sup> <a name="wiz_auth_client_id_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientIdInput"></a>

```python
wiz_auth_client_id_input: str
```

- *Type:* str

---

##### `wiz_auth_client_secret_input`<sup>Optional</sup> <a name="wiz_auth_client_secret_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecretInput"></a>

```python
wiz_auth_client_secret_input: str
```

- *Type:* str

---

##### `wiz_auth_grant_type_input`<sup>Optional</sup> <a name="wiz_auth_grant_type_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantTypeInput"></a>

```python
wiz_auth_grant_type_input: str
```

- *Type:* str

---

##### `wiz_auth_url_input`<sup>Optional</sup> <a name="wiz_auth_url_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrlInput"></a>

```python
wiz_auth_url_input: str
```

- *Type:* str

---

##### `wiz_url_input`<sup>Optional</sup> <a name="wiz_url_input" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrlInput"></a>

```python
wiz_url_input: str
```

- *Type:* str

---

##### `ca_chain`<sup>Optional</sup> <a name="ca_chain" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.caChain"></a>

```python
ca_chain: str
```

- *Type:* str

---

##### `http_client_retry_max`<sup>Optional</sup> <a name="http_client_retry_max" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryMax"></a>

```python
http_client_retry_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_client_retry_wait_max`<sup>Optional</sup> <a name="http_client_retry_wait_max" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMax"></a>

```python
http_client_retry_wait_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_client_retry_wait_min`<sup>Optional</sup> <a name="http_client_retry_wait_min" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.httpClientRetryWaitMin"></a>

```python
http_client_retry_wait_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxy"></a>

```python
proxy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proxy_server`<sup>Optional</sup> <a name="proxy_server" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.proxyServer"></a>

```python
proxy_server: str
```

- *Type:* str

---

##### `wiz_auth_audience`<sup>Optional</sup> <a name="wiz_auth_audience" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthAudience"></a>

```python
wiz_auth_audience: str
```

- *Type:* str

---

##### `wiz_auth_client_id`<sup>Optional</sup> <a name="wiz_auth_client_id" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientId"></a>

```python
wiz_auth_client_id: str
```

- *Type:* str

---

##### `wiz_auth_client_secret`<sup>Optional</sup> <a name="wiz_auth_client_secret" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthClientSecret"></a>

```python
wiz_auth_client_secret: str
```

- *Type:* str

---

##### `wiz_auth_grant_type`<sup>Optional</sup> <a name="wiz_auth_grant_type" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthGrantType"></a>

```python
wiz_auth_grant_type: str
```

- *Type:* str

---

##### `wiz_auth_url`<sup>Optional</sup> <a name="wiz_auth_url" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizAuthUrl"></a>

```python
wiz_auth_url: str
```

- *Type:* str

---

##### `wiz_url`<sup>Optional</sup> <a name="wiz_url" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.wizUrl"></a>

```python
wiz_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.provider.WizProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WizProviderConfig <a name="WizProviderConfig" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import provider

provider.WizProviderConfig(
  wiz_auth_client_id: str,
  wiz_auth_client_secret: str,
  wiz_url: str,
  alias: str = None,
  ca_chain: str = None,
  http_client_retry_max: typing.Union[int, float] = None,
  http_client_retry_wait_max: typing.Union[int, float] = None,
  http_client_retry_wait_min: typing.Union[int, float] = None,
  proxy: typing.Union[bool, IResolvable] = None,
  proxy_server: str = None,
  wiz_auth_audience: str = None,
  wiz_auth_grant_type: str = None,
  wiz_auth_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientId">wiz_auth_client_id</a></code> | <code>str</code> | Your application's Client ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientSecret">wiz_auth_client_secret</a></code> | <code>str</code> | Your application's Client Secret. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizUrl">wiz_url</a></code> | <code>str</code> | Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.caChain">ca_chain</a></code> | <code>str</code> | Base64 encoded PEM of the CA chain used when communicating with Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryMax">http_client_retry_max</a></code> | <code>typing.Union[int, float]</code> | Maximum retry attempts.     - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMax">http_client_retry_wait_max</a></code> | <code>typing.Union[int, float]</code> | Maximum time to wait before retrying, in seconds.     - Defaults to `10`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMin">http_client_retry_wait_min</a></code> | <code>typing.Union[int, float]</code> | Minimum time to wait before retrying, in seconds.     - Defaults to `1`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxy">proxy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use an http proxy server? (default: false, environment variable: PROXY). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxyServer">proxy_server</a></code> | <code>str</code> | Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthAudience">wiz_auth_audience</a></code> | <code>str</code> | Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthGrantType">wiz_auth_grant_type</a></code> | <code>str</code> | Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE). |
| <code><a href="#rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthUrl">wiz_auth_url</a></code> | <code>str</code> | The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL). |

---

##### `wiz_auth_client_id`<sup>Required</sup> <a name="wiz_auth_client_id" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientId"></a>

```python
wiz_auth_client_id: str
```

- *Type:* str

Your application's Client ID.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_client_id WizProvider#wiz_auth_client_id}

---

##### `wiz_auth_client_secret`<sup>Required</sup> <a name="wiz_auth_client_secret" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthClientSecret"></a>

```python
wiz_auth_client_secret: str
```

- *Type:* str

Your application's Client Secret.

You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_SECRET)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_client_secret WizProvider#wiz_auth_client_secret}

---

##### `wiz_url`<sup>Required</sup> <a name="wiz_url" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizUrl"></a>

```python
wiz_url: str
```

- *Type:* str

Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_url WizProvider#wiz_url}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#alias WizProvider#alias}

---

##### `ca_chain`<sup>Optional</sup> <a name="ca_chain" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.caChain"></a>

```python
ca_chain: str
```

- *Type:* str

Base64 encoded PEM of the CA chain used when communicating with Wiz.

If a proxy performs TLS interception/inspection, this will be the CA chain for the certificate used by the proxy. The default includes the CAs known to be used by Wiz: `C=IE, O=Baltimore, OU=CyberTrust, CN=Baltimore CyberTrust Root`, `C=US, O=Cloudflare, Inc., CN=Cloudflare Inc ECC CA-3`, `C=US, ST=Arizona, L=Scottsdale, O=Starfield Technologies, Inc., CN=Starfield Services Root Certificate Authority - G2`, `C=US, O=Amazon, CN=Amazon Root CA 1`, `C=US, O=Amazon, OU=Server CA 1B, CN=Amazon`. (environment variable: CA_CHAIN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#ca_chain WizProvider#ca_chain}

---

##### `http_client_retry_max`<sup>Optional</sup> <a name="http_client_retry_max" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryMax"></a>

```python
http_client_retry_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum retry attempts.     - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#http_client_retry_max WizProvider#http_client_retry_max}

---

##### `http_client_retry_wait_max`<sup>Optional</sup> <a name="http_client_retry_wait_max" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMax"></a>

```python
http_client_retry_wait_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum time to wait before retrying, in seconds.     - Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#http_client_retry_wait_max WizProvider#http_client_retry_wait_max}

---

##### `http_client_retry_wait_min`<sup>Optional</sup> <a name="http_client_retry_wait_min" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.httpClientRetryWaitMin"></a>

```python
http_client_retry_wait_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum time to wait before retrying, in seconds.     - Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#http_client_retry_wait_min WizProvider#http_client_retry_wait_min}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxy"></a>

```python
proxy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use an http proxy server? (default: false, environment variable: PROXY).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#proxy WizProvider#proxy}

---

##### `proxy_server`<sup>Optional</sup> <a name="proxy_server" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.proxyServer"></a>

```python
proxy_server: str
```

- *Type:* str

Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#proxy_server WizProvider#proxy_server}

---

##### `wiz_auth_audience`<sup>Optional</sup> <a name="wiz_auth_audience" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthAudience"></a>

```python
wiz_auth_audience: str
```

- *Type:* str

Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_audience WizProvider#wiz_auth_audience}

---

##### `wiz_auth_grant_type`<sup>Optional</sup> <a name="wiz_auth_grant_type" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthGrantType"></a>

```python
wiz_auth_grant_type: str
```

- *Type:* str

Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_grant_type WizProvider#wiz_auth_grant_type}

---

##### `wiz_auth_url`<sup>Optional</sup> <a name="wiz_auth_url" id="rhizo-co-terraform-provider-wiz.provider.WizProviderConfig.property.wizAuthUrl"></a>

```python
wiz_auth_url: str
```

- *Type:* str

The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_url WizProvider#wiz_auth_url}

---



