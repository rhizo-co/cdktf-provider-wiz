# `integrationServicenow` Submodule <a name="`integrationServicenow` Submodule" id="rhizo-co-terraform-provider-wiz.integrationServicenow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationServicenow <a name="IntegrationServicenow" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow wiz_integration_servicenow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_servicenow.IntegrationServicenow;

IntegrationServicenow.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .servicenowPassword(java.lang.String)
    .servicenowUrl(java.lang.String)
    .servicenowUsername(java.lang.String)
//  .projectId(java.lang.String)
//  .scope(java.lang.String)
//  .servicenowClientId(java.lang.String)
//  .servicenowClientSecret(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowPassword">servicenowPassword</a></code> | <code>java.lang.String</code> | ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowUrl">servicenowUrl</a></code> | <code>java.lang.String</code> | ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowUsername">servicenowUsername</a></code> | <code>java.lang.String</code> | Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowClientId">servicenowClientId</a></code> | <code>java.lang.String</code> | ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowClientSecret">servicenowClientSecret</a></code> | <code>java.lang.String</code> | ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#name IntegrationServicenow#name}

---

##### `servicenowPassword`<sup>Required</sup> <a name="servicenowPassword" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowPassword"></a>

- *Type:* java.lang.String

ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_password IntegrationServicenow#servicenow_password}

---

##### `servicenowUrl`<sup>Required</sup> <a name="servicenowUrl" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowUrl"></a>

- *Type:* java.lang.String

ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_url IntegrationServicenow#servicenow_url}

---

##### `servicenowUsername`<sup>Required</sup> <a name="servicenowUsername" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowUsername"></a>

- *Type:* java.lang.String

Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_username IntegrationServicenow#servicenow_username}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#project_id IntegrationServicenow#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#scope IntegrationServicenow#scope}

---

##### `servicenowClientId`<sup>Optional</sup> <a name="servicenowClientId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowClientId"></a>

- *Type:* java.lang.String

ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_id IntegrationServicenow#servicenow_client_id}

---

##### `servicenowClientSecret`<sup>Optional</sup> <a name="servicenowClientSecret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.servicenowClientSecret"></a>

- *Type:* java.lang.String

ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_secret IntegrationServicenow#servicenow_client_secret}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientId">resetServicenowClientId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientSecret">resetServicenowClientSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetScope"></a>

```java
public void resetScope()
```

##### `resetServicenowClientId` <a name="resetServicenowClientId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientId"></a>

```java
public void resetServicenowClientId()
```

##### `resetServicenowClientSecret` <a name="resetServicenowClientSecret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientSecret"></a>

```java
public void resetServicenowClientSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationServicenow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_servicenow.IntegrationServicenow;

IntegrationServicenow.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_servicenow.IntegrationServicenow;

IntegrationServicenow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_servicenow.IntegrationServicenow;

IntegrationServicenow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_servicenow.IntegrationServicenow;

IntegrationServicenow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationServicenow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationServicenow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationServicenow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationServicenow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationServicenow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientIdInput">servicenowClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecretInput">servicenowClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPasswordInput">servicenowPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrlInput">servicenowUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsernameInput">servicenowUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientId">servicenowClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecret">servicenowClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPassword">servicenowPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrl">servicenowUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsername">servicenowUsername</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `servicenowClientIdInput`<sup>Optional</sup> <a name="servicenowClientIdInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientIdInput"></a>

```java
public java.lang.String getServicenowClientIdInput();
```

- *Type:* java.lang.String

---

##### `servicenowClientSecretInput`<sup>Optional</sup> <a name="servicenowClientSecretInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecretInput"></a>

```java
public java.lang.String getServicenowClientSecretInput();
```

- *Type:* java.lang.String

---

##### `servicenowPasswordInput`<sup>Optional</sup> <a name="servicenowPasswordInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPasswordInput"></a>

```java
public java.lang.String getServicenowPasswordInput();
```

- *Type:* java.lang.String

---

##### `servicenowUrlInput`<sup>Optional</sup> <a name="servicenowUrlInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrlInput"></a>

```java
public java.lang.String getServicenowUrlInput();
```

- *Type:* java.lang.String

---

##### `servicenowUsernameInput`<sup>Optional</sup> <a name="servicenowUsernameInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsernameInput"></a>

```java
public java.lang.String getServicenowUsernameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `servicenowClientId`<sup>Required</sup> <a name="servicenowClientId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientId"></a>

```java
public java.lang.String getServicenowClientId();
```

- *Type:* java.lang.String

---

##### `servicenowClientSecret`<sup>Required</sup> <a name="servicenowClientSecret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecret"></a>

```java
public java.lang.String getServicenowClientSecret();
```

- *Type:* java.lang.String

---

##### `servicenowPassword`<sup>Required</sup> <a name="servicenowPassword" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPassword"></a>

```java
public java.lang.String getServicenowPassword();
```

- *Type:* java.lang.String

---

##### `servicenowUrl`<sup>Required</sup> <a name="servicenowUrl" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrl"></a>

```java
public java.lang.String getServicenowUrl();
```

- *Type:* java.lang.String

---

##### `servicenowUsername`<sup>Required</sup> <a name="servicenowUsername" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsername"></a>

```java
public java.lang.String getServicenowUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationServicenowConfig <a name="IntegrationServicenowConfig" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_servicenow.IntegrationServicenowConfig;

IntegrationServicenowConfig.builder()
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
    .name(java.lang.String)
    .servicenowPassword(java.lang.String)
    .servicenowUrl(java.lang.String)
    .servicenowUsername(java.lang.String)
//  .projectId(java.lang.String)
//  .scope(java.lang.String)
//  .servicenowClientId(java.lang.String)
//  .servicenowClientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowPassword">servicenowPassword</a></code> | <code>java.lang.String</code> | ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUrl">servicenowUrl</a></code> | <code>java.lang.String</code> | ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUsername">servicenowUsername</a></code> | <code>java.lang.String</code> | Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientId">servicenowClientId</a></code> | <code>java.lang.String</code> | ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientSecret">servicenowClientSecret</a></code> | <code>java.lang.String</code> | ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#name IntegrationServicenow#name}

---

##### `servicenowPassword`<sup>Required</sup> <a name="servicenowPassword" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowPassword"></a>

```java
public java.lang.String getServicenowPassword();
```

- *Type:* java.lang.String

ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_password IntegrationServicenow#servicenow_password}

---

##### `servicenowUrl`<sup>Required</sup> <a name="servicenowUrl" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUrl"></a>

```java
public java.lang.String getServicenowUrl();
```

- *Type:* java.lang.String

ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_url IntegrationServicenow#servicenow_url}

---

##### `servicenowUsername`<sup>Required</sup> <a name="servicenowUsername" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUsername"></a>

```java
public java.lang.String getServicenowUsername();
```

- *Type:* java.lang.String

Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_username IntegrationServicenow#servicenow_username}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#project_id IntegrationServicenow#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.scope"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#scope IntegrationServicenow#scope}

---

##### `servicenowClientId`<sup>Optional</sup> <a name="servicenowClientId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientId"></a>

```java
public java.lang.String getServicenowClientId();
```

- *Type:* java.lang.String

ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_id IntegrationServicenow#servicenow_client_id}

---

##### `servicenowClientSecret`<sup>Optional</sup> <a name="servicenowClientSecret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientSecret"></a>

```java
public java.lang.String getServicenowClientSecret();
```

- *Type:* java.lang.String

ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_secret IntegrationServicenow#servicenow_client_secret}

---



