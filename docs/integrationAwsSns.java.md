# `integrationAwsSns` Submodule <a name="`integrationAwsSns` Submodule" id="rhizo-co-terraform-provider-wiz.integrationAwsSns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsSns <a name="IntegrationAwsSns" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns wiz_integration_aws_sns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_aws_sns.IntegrationAwsSns;

IntegrationAwsSns.Builder.create(Construct scope, java.lang.String id)
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
    .awsSnsAccessMethod(java.lang.String)
    .name(java.lang.String)
//  .awsSnsConnectorId(java.lang.String)
//  .awsSnsCustomerRoleArn(java.lang.String)
//  .awsSnsTopicArn(java.lang.String)
//  .projectId(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsAccessMethod">awsSnsAccessMethod</a></code> | <code>java.lang.String</code> | The access method this integration should use. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsConnectorId">awsSnsConnectorId</a></code> | <code>java.lang.String</code> | Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsCustomerRoleArn">awsSnsCustomerRoleArn</a></code> | <code>java.lang.String</code> | Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | The SNS Topic Arn. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsSnsAccessMethod`<sup>Required</sup> <a name="awsSnsAccessMethod" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsAccessMethod"></a>

- *Type:* java.lang.String

The access method this integration should use.

* Allowed values:
  - ASSUME_CONNECTOR_ROLE
  - ASSUME_SPECIFIED_ROLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_access_method IntegrationAwsSns#aws_sns_access_method}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#name IntegrationAwsSns#name}

---

##### `awsSnsConnectorId`<sup>Optional</sup> <a name="awsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsConnectorId"></a>

- *Type:* java.lang.String

Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken.

* Conflicts with `[aws_sns_customer_role_arn]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_connector_id IntegrationAwsSns#aws_sns_connector_id}

---

##### `awsSnsCustomerRoleArn`<sup>Optional</sup> <a name="awsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsCustomerRoleArn"></a>

- *Type:* java.lang.String

Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID).

* Conflicts with `[aws_sns_connector_id]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_customer_role_arn IntegrationAwsSns#aws_sns_customer_role_arn}

---

##### `awsSnsTopicArn`<sup>Optional</sup> <a name="awsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.awsSnsTopicArn"></a>

- *Type:* java.lang.String

The SNS Topic Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_topic_arn IntegrationAwsSns#aws_sns_topic_arn}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#project_id IntegrationAwsSns#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#scope IntegrationAwsSns#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsConnectorId">resetAwsSnsConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsCustomerRoleArn">resetAwsSnsCustomerRoleArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsTopicArn">resetAwsSnsTopicArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAwsSnsConnectorId` <a name="resetAwsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsConnectorId"></a>

```java
public void resetAwsSnsConnectorId()
```

##### `resetAwsSnsCustomerRoleArn` <a name="resetAwsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsCustomerRoleArn"></a>

```java
public void resetAwsSnsCustomerRoleArn()
```

##### `resetAwsSnsTopicArn` <a name="resetAwsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsTopicArn"></a>

```java
public void resetAwsSnsTopicArn()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetScope"></a>

```java
public void resetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAwsSns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_aws_sns.IntegrationAwsSns;

IntegrationAwsSns.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_aws_sns.IntegrationAwsSns;

IntegrationAwsSns.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_aws_sns.IntegrationAwsSns;

IntegrationAwsSns.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_aws_sns.IntegrationAwsSns;

IntegrationAwsSns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationAwsSns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationAwsSns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationAwsSns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationAwsSns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsSns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethodInput">awsSnsAccessMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorIdInput">awsSnsConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArnInput">awsSnsCustomerRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArnInput">awsSnsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethod">awsSnsAccessMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorId">awsSnsConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArn">awsSnsCustomerRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `awsSnsAccessMethodInput`<sup>Optional</sup> <a name="awsSnsAccessMethodInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethodInput"></a>

```java
public java.lang.String getAwsSnsAccessMethodInput();
```

- *Type:* java.lang.String

---

##### `awsSnsConnectorIdInput`<sup>Optional</sup> <a name="awsSnsConnectorIdInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorIdInput"></a>

```java
public java.lang.String getAwsSnsConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `awsSnsCustomerRoleArnInput`<sup>Optional</sup> <a name="awsSnsCustomerRoleArnInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArnInput"></a>

```java
public java.lang.String getAwsSnsCustomerRoleArnInput();
```

- *Type:* java.lang.String

---

##### `awsSnsTopicArnInput`<sup>Optional</sup> <a name="awsSnsTopicArnInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArnInput"></a>

```java
public java.lang.String getAwsSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `awsSnsAccessMethod`<sup>Required</sup> <a name="awsSnsAccessMethod" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethod"></a>

```java
public java.lang.String getAwsSnsAccessMethod();
```

- *Type:* java.lang.String

---

##### `awsSnsConnectorId`<sup>Required</sup> <a name="awsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorId"></a>

```java
public java.lang.String getAwsSnsConnectorId();
```

- *Type:* java.lang.String

---

##### `awsSnsCustomerRoleArn`<sup>Required</sup> <a name="awsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArn"></a>

```java
public java.lang.String getAwsSnsCustomerRoleArn();
```

- *Type:* java.lang.String

---

##### `awsSnsTopicArn`<sup>Required</sup> <a name="awsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArn"></a>

```java
public java.lang.String getAwsSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsSnsConfig <a name="IntegrationAwsSnsConfig" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.integration_aws_sns.IntegrationAwsSnsConfig;

IntegrationAwsSnsConfig.builder()
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
    .awsSnsAccessMethod(java.lang.String)
    .name(java.lang.String)
//  .awsSnsConnectorId(java.lang.String)
//  .awsSnsCustomerRoleArn(java.lang.String)
//  .awsSnsTopicArn(java.lang.String)
//  .projectId(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsAccessMethod">awsSnsAccessMethod</a></code> | <code>java.lang.String</code> | The access method this integration should use. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsConnectorId">awsSnsConnectorId</a></code> | <code>java.lang.String</code> | Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsCustomerRoleArn">awsSnsCustomerRoleArn</a></code> | <code>java.lang.String</code> | Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | The SNS Topic Arn. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsSnsAccessMethod`<sup>Required</sup> <a name="awsSnsAccessMethod" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsAccessMethod"></a>

```java
public java.lang.String getAwsSnsAccessMethod();
```

- *Type:* java.lang.String

The access method this integration should use.

* Allowed values:
  - ASSUME_CONNECTOR_ROLE
  - ASSUME_SPECIFIED_ROLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_access_method IntegrationAwsSns#aws_sns_access_method}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#name IntegrationAwsSns#name}

---

##### `awsSnsConnectorId`<sup>Optional</sup> <a name="awsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsConnectorId"></a>

```java
public java.lang.String getAwsSnsConnectorId();
```

- *Type:* java.lang.String

Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken.

* Conflicts with `[aws_sns_customer_role_arn]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_connector_id IntegrationAwsSns#aws_sns_connector_id}

---

##### `awsSnsCustomerRoleArn`<sup>Optional</sup> <a name="awsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsCustomerRoleArn"></a>

```java
public java.lang.String getAwsSnsCustomerRoleArn();
```

- *Type:* java.lang.String

Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID).

* Conflicts with `[aws_sns_connector_id]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_customer_role_arn IntegrationAwsSns#aws_sns_customer_role_arn}

---

##### `awsSnsTopicArn`<sup>Optional</sup> <a name="awsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsTopicArn"></a>

```java
public java.lang.String getAwsSnsTopicArn();
```

- *Type:* java.lang.String

The SNS Topic Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_topic_arn IntegrationAwsSns#aws_sns_topic_arn}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#project_id IntegrationAwsSns#project_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.scope"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#scope IntegrationAwsSns#scope}

---



