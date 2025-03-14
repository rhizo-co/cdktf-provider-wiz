# `integrationJira` Submodule <a name="`integrationJira` Submodule" id="rhizo-co-terraform-provider-wiz.integrationJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationJira <a name="IntegrationJira" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira wiz_integration_jira}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_jira.IntegrationJira;

IntegrationJira.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .jiraUrl(java.lang.String)
    .name(java.lang.String)
//  .jiraAllowInsecureTls(java.lang.Boolean)
//  .jiraAllowInsecureTls(IResolvable)
//  .jiraClientCertificateAndPrivateKey(java.lang.String)
//  .jiraIsOnPrem(java.lang.Boolean)
//  .jiraIsOnPrem(IResolvable)
//  .jiraPassword(java.lang.String)
//  .jiraPat(java.lang.String)
//  .jiraServerCa(java.lang.String)
//  .jiraServerType(java.lang.String)
//  .jiraUsername(java.lang.String)
//  .projectId(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraUrl">jiraUrl</a></code> | <code>java.lang.String</code> | Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraAllowInsecureTls">jiraAllowInsecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Jira integration TLS setting. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraClientCertificateAndPrivateKey">jiraClientCertificateAndPrivateKey</a></code> | <code>java.lang.String</code> | Jira PEM with client certificate and private key. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraIsOnPrem">jiraIsOnPrem</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Jira instance is on prem     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraPassword">jiraPassword</a></code> | <code>java.lang.String</code> | Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraPat">jiraPat</a></code> | <code>java.lang.String</code> | Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraServerCa">jiraServerCa</a></code> | <code>java.lang.String</code> | Jira server CA. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraServerType">jiraServerType</a></code> | <code>java.lang.String</code> | Jira server type     - Defaults to `CLOUD`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraUsername">jiraUsername</a></code> | <code>java.lang.String</code> | Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jiraUrl`<sup>Required</sup> <a name="jiraUrl" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraUrl"></a>

- *Type:* java.lang.String

Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_url IntegrationJira#jira_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#name IntegrationJira#name}

---

##### `jiraAllowInsecureTls`<sup>Optional</sup> <a name="jiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraAllowInsecureTls"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Jira integration TLS setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_allow_insecure_tls IntegrationJira#jira_allow_insecure_tls}

---

##### `jiraClientCertificateAndPrivateKey`<sup>Optional</sup> <a name="jiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraClientCertificateAndPrivateKey"></a>

- *Type:* java.lang.String

Jira PEM with client certificate and private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_client_certificate_and_private_key IntegrationJira#jira_client_certificate_and_private_key}

---

##### `jiraIsOnPrem`<sup>Optional</sup> <a name="jiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraIsOnPrem"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Jira instance is on prem     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_is_on_prem IntegrationJira#jira_is_on_prem}

---

##### `jiraPassword`<sup>Optional</sup> <a name="jiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraPassword"></a>

- *Type:* java.lang.String

Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_password IntegrationJira#jira_password}

---

##### `jiraPat`<sup>Optional</sup> <a name="jiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraPat"></a>

- *Type:* java.lang.String

Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_pat IntegrationJira#jira_pat}

---

##### `jiraServerCa`<sup>Optional</sup> <a name="jiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraServerCa"></a>

- *Type:* java.lang.String

Jira server CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_server_ca IntegrationJira#jira_server_ca}

---

##### `jiraServerType`<sup>Optional</sup> <a name="jiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraServerType"></a>

- *Type:* java.lang.String

Jira server type     - Defaults to `CLOUD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_server_type IntegrationJira#jira_server_type}

---

##### `jiraUsername`<sup>Optional</sup> <a name="jiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.jiraUsername"></a>

- *Type:* java.lang.String

Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_username IntegrationJira#jira_username}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#project_id IntegrationJira#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project.

Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles.
- Allowed values:
- Selected Project
- All Resources
- All Resources, Restrict this Integration to global roles only

```
- Defaults to `All Resources, Restrict this Integration to global roles only`.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#scope IntegrationJira#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetJiraAllowInsecureTls` <a name="resetJiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraAllowInsecureTls"></a>

```java
public void resetJiraAllowInsecureTls()
```

##### `resetJiraClientCertificateAndPrivateKey` <a name="resetJiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraClientCertificateAndPrivateKey"></a>

```java
public void resetJiraClientCertificateAndPrivateKey()
```

##### `resetJiraIsOnPrem` <a name="resetJiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraIsOnPrem"></a>

```java
public void resetJiraIsOnPrem()
```

##### `resetJiraPassword` <a name="resetJiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPassword"></a>

```java
public void resetJiraPassword()
```

##### `resetJiraPat` <a name="resetJiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPat"></a>

```java
public void resetJiraPat()
```

##### `resetJiraServerCa` <a name="resetJiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerCa"></a>

```java
public void resetJiraServerCa()
```

##### `resetJiraServerType` <a name="resetJiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerType"></a>

```java
public void resetJiraServerType()
```

##### `resetJiraUsername` <a name="resetJiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraUsername"></a>

```java
public void resetJiraUsername()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetScope"></a>

```java
public void resetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationJira resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_jira.IntegrationJira;

IntegrationJira.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_jira.IntegrationJira;

IntegrationJira.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_jira.IntegrationJira;

IntegrationJira.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_jira.IntegrationJira;

IntegrationJira.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationJira.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationJira resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationJira to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationJira that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationJira to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTlsInput">jiraAllowInsecureTlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKeyInput">jiraClientCertificateAndPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPremInput">jiraIsOnPremInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPasswordInput">jiraPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPatInput">jiraPatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCaInput">jiraServerCaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerTypeInput">jiraServerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrlInput">jiraUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsernameInput">jiraUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTls">jiraAllowInsecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKey">jiraClientCertificateAndPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPrem">jiraIsOnPrem</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPassword">jiraPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPat">jiraPat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCa">jiraServerCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerType">jiraServerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrl">jiraUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsername">jiraUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jiraAllowInsecureTlsInput`<sup>Optional</sup> <a name="jiraAllowInsecureTlsInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTlsInput"></a>

```java
public java.lang.Object getJiraAllowInsecureTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraClientCertificateAndPrivateKeyInput`<sup>Optional</sup> <a name="jiraClientCertificateAndPrivateKeyInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKeyInput"></a>

```java
public java.lang.String getJiraClientCertificateAndPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `jiraIsOnPremInput`<sup>Optional</sup> <a name="jiraIsOnPremInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPremInput"></a>

```java
public java.lang.Object getJiraIsOnPremInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraPasswordInput`<sup>Optional</sup> <a name="jiraPasswordInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPasswordInput"></a>

```java
public java.lang.String getJiraPasswordInput();
```

- *Type:* java.lang.String

---

##### `jiraPatInput`<sup>Optional</sup> <a name="jiraPatInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPatInput"></a>

```java
public java.lang.String getJiraPatInput();
```

- *Type:* java.lang.String

---

##### `jiraServerCaInput`<sup>Optional</sup> <a name="jiraServerCaInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCaInput"></a>

```java
public java.lang.String getJiraServerCaInput();
```

- *Type:* java.lang.String

---

##### `jiraServerTypeInput`<sup>Optional</sup> <a name="jiraServerTypeInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerTypeInput"></a>

```java
public java.lang.String getJiraServerTypeInput();
```

- *Type:* java.lang.String

---

##### `jiraUrlInput`<sup>Optional</sup> <a name="jiraUrlInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrlInput"></a>

```java
public java.lang.String getJiraUrlInput();
```

- *Type:* java.lang.String

---

##### `jiraUsernameInput`<sup>Optional</sup> <a name="jiraUsernameInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsernameInput"></a>

```java
public java.lang.String getJiraUsernameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `jiraAllowInsecureTls`<sup>Required</sup> <a name="jiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTls"></a>

```java
public java.lang.Object getJiraAllowInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraClientCertificateAndPrivateKey`<sup>Required</sup> <a name="jiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKey"></a>

```java
public java.lang.String getJiraClientCertificateAndPrivateKey();
```

- *Type:* java.lang.String

---

##### `jiraIsOnPrem`<sup>Required</sup> <a name="jiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPrem"></a>

```java
public java.lang.Object getJiraIsOnPrem();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraPassword`<sup>Required</sup> <a name="jiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPassword"></a>

```java
public java.lang.String getJiraPassword();
```

- *Type:* java.lang.String

---

##### `jiraPat`<sup>Required</sup> <a name="jiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPat"></a>

```java
public java.lang.String getJiraPat();
```

- *Type:* java.lang.String

---

##### `jiraServerCa`<sup>Required</sup> <a name="jiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCa"></a>

```java
public java.lang.String getJiraServerCa();
```

- *Type:* java.lang.String

---

##### `jiraServerType`<sup>Required</sup> <a name="jiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerType"></a>

```java
public java.lang.String getJiraServerType();
```

- *Type:* java.lang.String

---

##### `jiraUrl`<sup>Required</sup> <a name="jiraUrl" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrl"></a>

```java
public java.lang.String getJiraUrl();
```

- *Type:* java.lang.String

---

##### `jiraUsername`<sup>Required</sup> <a name="jiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsername"></a>

```java
public java.lang.String getJiraUsername();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationJiraConfig <a name="IntegrationJiraConfig" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_jira.IntegrationJiraConfig;

IntegrationJiraConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .jiraUrl(java.lang.String)
    .name(java.lang.String)
//  .jiraAllowInsecureTls(java.lang.Boolean)
//  .jiraAllowInsecureTls(IResolvable)
//  .jiraClientCertificateAndPrivateKey(java.lang.String)
//  .jiraIsOnPrem(java.lang.Boolean)
//  .jiraIsOnPrem(IResolvable)
//  .jiraPassword(java.lang.String)
//  .jiraPat(java.lang.String)
//  .jiraServerCa(java.lang.String)
//  .jiraServerType(java.lang.String)
//  .jiraUsername(java.lang.String)
//  .projectId(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUrl">jiraUrl</a></code> | <code>java.lang.String</code> | Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraAllowInsecureTls">jiraAllowInsecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Jira integration TLS setting. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraClientCertificateAndPrivateKey">jiraClientCertificateAndPrivateKey</a></code> | <code>java.lang.String</code> | Jira PEM with client certificate and private key. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraIsOnPrem">jiraIsOnPrem</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Jira instance is on prem     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPassword">jiraPassword</a></code> | <code>java.lang.String</code> | Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPat">jiraPat</a></code> | <code>java.lang.String</code> | Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerCa">jiraServerCa</a></code> | <code>java.lang.String</code> | Jira server CA. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerType">jiraServerType</a></code> | <code>java.lang.String</code> | Jira server type     - Defaults to `CLOUD`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUsername">jiraUsername</a></code> | <code>java.lang.String</code> | Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jiraUrl`<sup>Required</sup> <a name="jiraUrl" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUrl"></a>

```java
public java.lang.String getJiraUrl();
```

- *Type:* java.lang.String

Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_url IntegrationJira#jira_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#name IntegrationJira#name}

---

##### `jiraAllowInsecureTls`<sup>Optional</sup> <a name="jiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraAllowInsecureTls"></a>

```java
public java.lang.Object getJiraAllowInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Jira integration TLS setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_allow_insecure_tls IntegrationJira#jira_allow_insecure_tls}

---

##### `jiraClientCertificateAndPrivateKey`<sup>Optional</sup> <a name="jiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraClientCertificateAndPrivateKey"></a>

```java
public java.lang.String getJiraClientCertificateAndPrivateKey();
```

- *Type:* java.lang.String

Jira PEM with client certificate and private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_client_certificate_and_private_key IntegrationJira#jira_client_certificate_and_private_key}

---

##### `jiraIsOnPrem`<sup>Optional</sup> <a name="jiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraIsOnPrem"></a>

```java
public java.lang.Object getJiraIsOnPrem();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Jira instance is on prem     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_is_on_prem IntegrationJira#jira_is_on_prem}

---

##### `jiraPassword`<sup>Optional</sup> <a name="jiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPassword"></a>

```java
public java.lang.String getJiraPassword();
```

- *Type:* java.lang.String

Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_password IntegrationJira#jira_password}

---

##### `jiraPat`<sup>Optional</sup> <a name="jiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPat"></a>

```java
public java.lang.String getJiraPat();
```

- *Type:* java.lang.String

Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_pat IntegrationJira#jira_pat}

---

##### `jiraServerCa`<sup>Optional</sup> <a name="jiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerCa"></a>

```java
public java.lang.String getJiraServerCa();
```

- *Type:* java.lang.String

Jira server CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_server_ca IntegrationJira#jira_server_ca}

---

##### `jiraServerType`<sup>Optional</sup> <a name="jiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerType"></a>

```java
public java.lang.String getJiraServerType();
```

- *Type:* java.lang.String

Jira server type     - Defaults to `CLOUD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_server_type IntegrationJira#jira_server_type}

---

##### `jiraUsername`<sup>Optional</sup> <a name="jiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUsername"></a>

```java
public java.lang.String getJiraUsername();
```

- *Type:* java.lang.String

Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_username IntegrationJira#jira_username}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#project_id IntegrationJira#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project.

Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles.
- Allowed values:
- Selected Project
- All Resources
- All Resources, Restrict this Integration to global roles only

```
- Defaults to `All Resources, Restrict this Integration to global roles only`.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#scope IntegrationJira#scope}

---



