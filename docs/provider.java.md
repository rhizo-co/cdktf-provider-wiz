# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-databricks.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksProvider <a name="DatabricksProvider" id="@cdktf/provider-databricks.provider.DatabricksProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks databricks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.provider.DatabricksProvider;

DatabricksProvider.Builder.create(Construct scope, java.lang.String id)
//  .accountId(java.lang.String)
//  .alias(java.lang.String)
//  .authType(java.lang.String)
//  .azureClientId(java.lang.String)
//  .azureClientSecret(java.lang.String)
//  .azureEnvironment(java.lang.String)
//  .azureLoginAppId(java.lang.String)
//  .azureTenantId(java.lang.String)
//  .azureUseMsi(java.lang.Boolean)
//  .azureUseMsi(IResolvable)
//  .azureWorkspaceResourceId(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .configFile(java.lang.String)
//  .debugHeaders(java.lang.Boolean)
//  .debugHeaders(IResolvable)
//  .debugTruncateBytes(java.lang.Number)
//  .googleCredentials(java.lang.String)
//  .googleServiceAccount(java.lang.String)
//  .host(java.lang.String)
//  .httpTimeoutSeconds(java.lang.Number)
//  .password(java.lang.String)
//  .profile(java.lang.String)
//  .rateLimit(java.lang.Number)
//  .retryTimeoutSeconds(java.lang.Number)
//  .skipVerify(java.lang.Boolean)
//  .skipVerify(IResolvable)
//  .token(java.lang.String)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#account_id DatabricksProvider#account_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#auth_type DatabricksProvider#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureClientId">azureClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_client_id DatabricksProvider#azure_client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureClientSecret">azureClientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_client_secret DatabricksProvider#azure_client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureEnvironment">azureEnvironment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_environment DatabricksProvider#azure_environment}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureLoginAppId">azureLoginAppId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_login_app_id DatabricksProvider#azure_login_app_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_tenant_id DatabricksProvider#azure_tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureUseMsi">azureUseMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_use_msi DatabricksProvider#azure_use_msi}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureWorkspaceResourceId">azureWorkspaceResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#client_id DatabricksProvider#client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#client_secret DatabricksProvider#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.configFile">configFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#config_file DatabricksProvider#config_file}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.debugHeaders">debugHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#debug_headers DatabricksProvider#debug_headers}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.debugTruncateBytes">debugTruncateBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.googleCredentials">googleCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#google_credentials DatabricksProvider#google_credentials}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#google_service_account DatabricksProvider#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#host DatabricksProvider#host}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.httpTimeoutSeconds">httpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#http_timeout_seconds DatabricksProvider#http_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#password DatabricksProvider#password}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.profile">profile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#profile DatabricksProvider#profile}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#rate_limit DatabricksProvider#rate_limit}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.retryTimeoutSeconds">retryTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.skipVerify">skipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#skip_verify DatabricksProvider#skip_verify}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#token DatabricksProvider#token}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#username DatabricksProvider#username}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#account_id DatabricksProvider#account_id}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#alias DatabricksProvider#alias}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#auth_type DatabricksProvider#auth_type}.

---

##### `azureClientId`<sup>Optional</sup> <a name="azureClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureClientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_client_id DatabricksProvider#azure_client_id}.

---

##### `azureClientSecret`<sup>Optional</sup> <a name="azureClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureClientSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_client_secret DatabricksProvider#azure_client_secret}.

---

##### `azureEnvironment`<sup>Optional</sup> <a name="azureEnvironment" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureEnvironment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_environment DatabricksProvider#azure_environment}.

---

##### `azureLoginAppId`<sup>Optional</sup> <a name="azureLoginAppId" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureLoginAppId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_login_app_id DatabricksProvider#azure_login_app_id}.

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureTenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_tenant_id DatabricksProvider#azure_tenant_id}.

---

##### `azureUseMsi`<sup>Optional</sup> <a name="azureUseMsi" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureUseMsi"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_use_msi DatabricksProvider#azure_use_msi}.

---

##### `azureWorkspaceResourceId`<sup>Optional</sup> <a name="azureWorkspaceResourceId" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureWorkspaceResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#client_id DatabricksProvider#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#client_secret DatabricksProvider#client_secret}.

---

##### `configFile`<sup>Optional</sup> <a name="configFile" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.configFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#config_file DatabricksProvider#config_file}.

---

##### `debugHeaders`<sup>Optional</sup> <a name="debugHeaders" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.debugHeaders"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#debug_headers DatabricksProvider#debug_headers}.

---

##### `debugTruncateBytes`<sup>Optional</sup> <a name="debugTruncateBytes" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.debugTruncateBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}.

---

##### `googleCredentials`<sup>Optional</sup> <a name="googleCredentials" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.googleCredentials"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#google_credentials DatabricksProvider#google_credentials}.

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.googleServiceAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#google_service_account DatabricksProvider#google_service_account}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.host"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#host DatabricksProvider#host}.

---

##### `httpTimeoutSeconds`<sup>Optional</sup> <a name="httpTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.httpTimeoutSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#http_timeout_seconds DatabricksProvider#http_timeout_seconds}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#password DatabricksProvider#password}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.profile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#profile DatabricksProvider#profile}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.rateLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#rate_limit DatabricksProvider#rate_limit}.

---

##### `retryTimeoutSeconds`<sup>Optional</sup> <a name="retryTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.retryTimeoutSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}.

---

##### `skipVerify`<sup>Optional</sup> <a name="skipVerify" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.skipVerify"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#skip_verify DatabricksProvider#skip_verify}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#token DatabricksProvider#token}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#username DatabricksProvider#username}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientId">resetAzureClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientSecret">resetAzureClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureEnvironment">resetAzureEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureLoginAppId">resetAzureLoginAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureUseMsi">resetAzureUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureWorkspaceResourceId">resetAzureWorkspaceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetConfigFile">resetConfigFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugHeaders">resetDebugHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugTruncateBytes">resetDebugTruncateBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleCredentials">resetGoogleCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleServiceAccount">resetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetHttpTimeoutSeconds">resetHttpTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetRateLimit">resetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetRetryTimeoutSeconds">resetRetryTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetSkipVerify">resetSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.provider.DatabricksProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.provider.DatabricksProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.provider.DatabricksProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.provider.DatabricksProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.provider.DatabricksProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetAzureClientId` <a name="resetAzureClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientId"></a>

```java
public void resetAzureClientId()
```

##### `resetAzureClientSecret` <a name="resetAzureClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientSecret"></a>

```java
public void resetAzureClientSecret()
```

##### `resetAzureEnvironment` <a name="resetAzureEnvironment" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureEnvironment"></a>

```java
public void resetAzureEnvironment()
```

##### `resetAzureLoginAppId` <a name="resetAzureLoginAppId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureLoginAppId"></a>

```java
public void resetAzureLoginAppId()
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureTenantId"></a>

```java
public void resetAzureTenantId()
```

##### `resetAzureUseMsi` <a name="resetAzureUseMsi" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureUseMsi"></a>

```java
public void resetAzureUseMsi()
```

##### `resetAzureWorkspaceResourceId` <a name="resetAzureWorkspaceResourceId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureWorkspaceResourceId"></a>

```java
public void resetAzureWorkspaceResourceId()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetConfigFile` <a name="resetConfigFile" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetConfigFile"></a>

```java
public void resetConfigFile()
```

##### `resetDebugHeaders` <a name="resetDebugHeaders" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugHeaders"></a>

```java
public void resetDebugHeaders()
```

##### `resetDebugTruncateBytes` <a name="resetDebugTruncateBytes" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugTruncateBytes"></a>

```java
public void resetDebugTruncateBytes()
```

##### `resetGoogleCredentials` <a name="resetGoogleCredentials" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleCredentials"></a>

```java
public void resetGoogleCredentials()
```

##### `resetGoogleServiceAccount` <a name="resetGoogleServiceAccount" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleServiceAccount"></a>

```java
public void resetGoogleServiceAccount()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetHost"></a>

```java
public void resetHost()
```

##### `resetHttpTimeoutSeconds` <a name="resetHttpTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetHttpTimeoutSeconds"></a>

```java
public void resetHttpTimeoutSeconds()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetRateLimit"></a>

```java
public void resetRateLimit()
```

##### `resetRetryTimeoutSeconds` <a name="resetRetryTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetRetryTimeoutSeconds"></a>

```java
public void resetRetryTimeoutSeconds()
```

##### `resetSkipVerify` <a name="resetSkipVerify" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetSkipVerify"></a>

```java
public void resetSkipVerify()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetToken"></a>

```java
public void resetToken()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.provider.DatabricksProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.provider.DatabricksProvider;

DatabricksProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.provider.DatabricksProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.provider.DatabricksProvider;

DatabricksProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.databricks.provider.DatabricksProvider;

DatabricksProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientIdInput">azureClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecretInput">azureClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironmentInput">azureEnvironmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppIdInput">azureLoginAppIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsiInput">azureUseMsiInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceIdInput">azureWorkspaceResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.configFileInput">configFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeadersInput">debugHeadersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytesInput">debugTruncateBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentialsInput">googleCredentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccountInput">googleServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSecondsInput">httpTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSecondsInput">retryTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerifyInput">skipVerifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientId">azureClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecret">azureClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironment">azureEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppId">azureLoginAppId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsi">azureUseMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceId">azureWorkspaceResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.configFile">configFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeaders">debugHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytes">debugTruncateBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentials">googleCredentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSeconds">httpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSeconds">retryTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerify">skipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `azureClientIdInput`<sup>Optional</sup> <a name="azureClientIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientIdInput"></a>

```java
public java.lang.String getAzureClientIdInput();
```

- *Type:* java.lang.String

---

##### `azureClientSecretInput`<sup>Optional</sup> <a name="azureClientSecretInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecretInput"></a>

```java
public java.lang.String getAzureClientSecretInput();
```

- *Type:* java.lang.String

---

##### `azureEnvironmentInput`<sup>Optional</sup> <a name="azureEnvironmentInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironmentInput"></a>

```java
public java.lang.String getAzureEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `azureLoginAppIdInput`<sup>Optional</sup> <a name="azureLoginAppIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppIdInput"></a>

```java
public java.lang.String getAzureLoginAppIdInput();
```

- *Type:* java.lang.String

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantIdInput"></a>

```java
public java.lang.String getAzureTenantIdInput();
```

- *Type:* java.lang.String

---

##### `azureUseMsiInput`<sup>Optional</sup> <a name="azureUseMsiInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsiInput"></a>

```java
public java.lang.Object getAzureUseMsiInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `azureWorkspaceResourceIdInput`<sup>Optional</sup> <a name="azureWorkspaceResourceIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceIdInput"></a>

```java
public java.lang.String getAzureWorkspaceResourceIdInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `configFileInput`<sup>Optional</sup> <a name="configFileInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.configFileInput"></a>

```java
public java.lang.String getConfigFileInput();
```

- *Type:* java.lang.String

---

##### `debugHeadersInput`<sup>Optional</sup> <a name="debugHeadersInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeadersInput"></a>

```java
public java.lang.Object getDebugHeadersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `debugTruncateBytesInput`<sup>Optional</sup> <a name="debugTruncateBytesInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytesInput"></a>

```java
public java.lang.Number getDebugTruncateBytesInput();
```

- *Type:* java.lang.Number

---

##### `googleCredentialsInput`<sup>Optional</sup> <a name="googleCredentialsInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentialsInput"></a>

```java
public java.lang.String getGoogleCredentialsInput();
```

- *Type:* java.lang.String

---

##### `googleServiceAccountInput`<sup>Optional</sup> <a name="googleServiceAccountInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccountInput"></a>

```java
public java.lang.String getGoogleServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `httpTimeoutSecondsInput`<sup>Optional</sup> <a name="httpTimeoutSecondsInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSecondsInput"></a>

```java
public java.lang.Number getHttpTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimitInput"></a>

```java
public java.lang.Number getRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `retryTimeoutSecondsInput`<sup>Optional</sup> <a name="retryTimeoutSecondsInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSecondsInput"></a>

```java
public java.lang.Number getRetryTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `skipVerifyInput`<sup>Optional</sup> <a name="skipVerifyInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerifyInput"></a>

```java
public java.lang.Object getSkipVerifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `azureClientId`<sup>Optional</sup> <a name="azureClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientId"></a>

```java
public java.lang.String getAzureClientId();
```

- *Type:* java.lang.String

---

##### `azureClientSecret`<sup>Optional</sup> <a name="azureClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecret"></a>

```java
public java.lang.String getAzureClientSecret();
```

- *Type:* java.lang.String

---

##### `azureEnvironment`<sup>Optional</sup> <a name="azureEnvironment" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironment"></a>

```java
public java.lang.String getAzureEnvironment();
```

- *Type:* java.lang.String

---

##### `azureLoginAppId`<sup>Optional</sup> <a name="azureLoginAppId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppId"></a>

```java
public java.lang.String getAzureLoginAppId();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `azureUseMsi`<sup>Optional</sup> <a name="azureUseMsi" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsi"></a>

```java
public java.lang.Object getAzureUseMsi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `azureWorkspaceResourceId`<sup>Optional</sup> <a name="azureWorkspaceResourceId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceId"></a>

```java
public java.lang.String getAzureWorkspaceResourceId();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `configFile`<sup>Optional</sup> <a name="configFile" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.configFile"></a>

```java
public java.lang.String getConfigFile();
```

- *Type:* java.lang.String

---

##### `debugHeaders`<sup>Optional</sup> <a name="debugHeaders" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeaders"></a>

```java
public java.lang.Object getDebugHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `debugTruncateBytes`<sup>Optional</sup> <a name="debugTruncateBytes" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytes"></a>

```java
public java.lang.Number getDebugTruncateBytes();
```

- *Type:* java.lang.Number

---

##### `googleCredentials`<sup>Optional</sup> <a name="googleCredentials" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentials"></a>

```java
public java.lang.String getGoogleCredentials();
```

- *Type:* java.lang.String

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `httpTimeoutSeconds`<sup>Optional</sup> <a name="httpTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSeconds"></a>

```java
public java.lang.Number getHttpTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `retryTimeoutSeconds`<sup>Optional</sup> <a name="retryTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSeconds"></a>

```java
public java.lang.Number getRetryTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `skipVerify`<sup>Optional</sup> <a name="skipVerify" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerify"></a>

```java
public java.lang.Object getSkipVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksProviderConfig <a name="DatabricksProviderConfig" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.provider.DatabricksProviderConfig;

DatabricksProviderConfig.builder()
//  .accountId(java.lang.String)
//  .alias(java.lang.String)
//  .authType(java.lang.String)
//  .azureClientId(java.lang.String)
//  .azureClientSecret(java.lang.String)
//  .azureEnvironment(java.lang.String)
//  .azureLoginAppId(java.lang.String)
//  .azureTenantId(java.lang.String)
//  .azureUseMsi(java.lang.Boolean)
//  .azureUseMsi(IResolvable)
//  .azureWorkspaceResourceId(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .configFile(java.lang.String)
//  .debugHeaders(java.lang.Boolean)
//  .debugHeaders(IResolvable)
//  .debugTruncateBytes(java.lang.Number)
//  .googleCredentials(java.lang.String)
//  .googleServiceAccount(java.lang.String)
//  .host(java.lang.String)
//  .httpTimeoutSeconds(java.lang.Number)
//  .password(java.lang.String)
//  .profile(java.lang.String)
//  .rateLimit(java.lang.Number)
//  .retryTimeoutSeconds(java.lang.Number)
//  .skipVerify(java.lang.Boolean)
//  .skipVerify(IResolvable)
//  .token(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#account_id DatabricksProvider#account_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#auth_type DatabricksProvider#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientId">azureClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_client_id DatabricksProvider#azure_client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientSecret">azureClientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_client_secret DatabricksProvider#azure_client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureEnvironment">azureEnvironment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_environment DatabricksProvider#azure_environment}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureLoginAppId">azureLoginAppId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_login_app_id DatabricksProvider#azure_login_app_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_tenant_id DatabricksProvider#azure_tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureUseMsi">azureUseMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_use_msi DatabricksProvider#azure_use_msi}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureWorkspaceResourceId">azureWorkspaceResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#client_id DatabricksProvider#client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#client_secret DatabricksProvider#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.configFile">configFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#config_file DatabricksProvider#config_file}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugHeaders">debugHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#debug_headers DatabricksProvider#debug_headers}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugTruncateBytes">debugTruncateBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleCredentials">googleCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#google_credentials DatabricksProvider#google_credentials}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#google_service_account DatabricksProvider#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#host DatabricksProvider#host}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.httpTimeoutSeconds">httpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#http_timeout_seconds DatabricksProvider#http_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#password DatabricksProvider#password}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#profile DatabricksProvider#profile}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#rate_limit DatabricksProvider#rate_limit}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.retryTimeoutSeconds">retryTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.skipVerify">skipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#skip_verify DatabricksProvider#skip_verify}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#token DatabricksProvider#token}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#username DatabricksProvider#username}. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#account_id DatabricksProvider#account_id}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#alias DatabricksProvider#alias}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#auth_type DatabricksProvider#auth_type}.

---

##### `azureClientId`<sup>Optional</sup> <a name="azureClientId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientId"></a>

```java
public java.lang.String getAzureClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_client_id DatabricksProvider#azure_client_id}.

---

##### `azureClientSecret`<sup>Optional</sup> <a name="azureClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientSecret"></a>

```java
public java.lang.String getAzureClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_client_secret DatabricksProvider#azure_client_secret}.

---

##### `azureEnvironment`<sup>Optional</sup> <a name="azureEnvironment" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureEnvironment"></a>

```java
public java.lang.String getAzureEnvironment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_environment DatabricksProvider#azure_environment}.

---

##### `azureLoginAppId`<sup>Optional</sup> <a name="azureLoginAppId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureLoginAppId"></a>

```java
public java.lang.String getAzureLoginAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_login_app_id DatabricksProvider#azure_login_app_id}.

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_tenant_id DatabricksProvider#azure_tenant_id}.

---

##### `azureUseMsi`<sup>Optional</sup> <a name="azureUseMsi" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureUseMsi"></a>

```java
public java.lang.Object getAzureUseMsi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_use_msi DatabricksProvider#azure_use_msi}.

---

##### `azureWorkspaceResourceId`<sup>Optional</sup> <a name="azureWorkspaceResourceId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureWorkspaceResourceId"></a>

```java
public java.lang.String getAzureWorkspaceResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#client_id DatabricksProvider#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#client_secret DatabricksProvider#client_secret}.

---

##### `configFile`<sup>Optional</sup> <a name="configFile" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.configFile"></a>

```java
public java.lang.String getConfigFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#config_file DatabricksProvider#config_file}.

---

##### `debugHeaders`<sup>Optional</sup> <a name="debugHeaders" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugHeaders"></a>

```java
public java.lang.Object getDebugHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#debug_headers DatabricksProvider#debug_headers}.

---

##### `debugTruncateBytes`<sup>Optional</sup> <a name="debugTruncateBytes" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugTruncateBytes"></a>

```java
public java.lang.Number getDebugTruncateBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}.

---

##### `googleCredentials`<sup>Optional</sup> <a name="googleCredentials" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleCredentials"></a>

```java
public java.lang.String getGoogleCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#google_credentials DatabricksProvider#google_credentials}.

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#google_service_account DatabricksProvider#google_service_account}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#host DatabricksProvider#host}.

---

##### `httpTimeoutSeconds`<sup>Optional</sup> <a name="httpTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.httpTimeoutSeconds"></a>

```java
public java.lang.Number getHttpTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#http_timeout_seconds DatabricksProvider#http_timeout_seconds}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#password DatabricksProvider#password}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#profile DatabricksProvider#profile}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#rate_limit DatabricksProvider#rate_limit}.

---

##### `retryTimeoutSeconds`<sup>Optional</sup> <a name="retryTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.retryTimeoutSeconds"></a>

```java
public java.lang.Number getRetryTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}.

---

##### `skipVerify`<sup>Optional</sup> <a name="skipVerify" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.skipVerify"></a>

```java
public java.lang.Object getSkipVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#skip_verify DatabricksProvider#skip_verify}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#token DatabricksProvider#token}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#username DatabricksProvider#username}.

---


